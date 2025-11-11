---
title: 'Snowflake Stream to Automate Forecast'
description: ''
pubDate: 'Nov 11 2025'
heroImage: ''
tags: ['Snowflake']
draft: true
author: 'Jinwoo'
---

### 1. The Challenge of Forecasting in Snowflake

Let’s start with a common challenge many data engineers face.
We need to calculate forecast values based on data stored in Snowflake.

Without any automation, the typical workflow looks like this:

1. Read Snowflake data through an API or connector

2. Run forecasting logic externally (for example, in Python)

3. Insert the forecasted values back into a target table

This approach works for a while.

---

### 2. When Data Changes, Everything Breaks

The real complexity appears when the underlying data changes.
What happens when new data arrives and forecasts need to be recalculated?

For instance, suppose we initially forecast values for 2026 and 2027.
When time moves forward and it’s now 2026, we suddenly need to recalculate forecasts for 2027 and 2028.

Manually managing these updates quickly becomes error-prone and inefficient.
You end up rerunning the entire pipeline just to refresh a few numbers, wasting both time and compute.

---

### 3. Enter Snowflake Streams

Change Data Capture (CDC) should live in a layer that helps us track exactly which data needs to be processed.
This is where Snowflake Streams come in.

Streams automatically capture inserts, updates, and deletes on a table, allowing a forecasting process to react only to new or changed data without reprocessing everything.

Think of a Stream as a change log that keeps track of what’s happened since the last time you checked the table.
Instead of reading the entire dataset, you can query the Stream to get only the delta, the rows that were recently added or updated.
Once those changes are consumed, the Stream’s offset automatically advances, keeping your workflow efficient and consistent.

---

### 4. Designing the Forecast Pipeline in Snowflake

Streams handle change detection beautifully. Now let’s keep the entire workflow inside Snowflake to process those changes and publish new forecasts.

To do that, we can combine 3 key components:

Function: encapsulates the forecasting math (simple and reusable)
Procedure: orchestrates the end-to-end process (read deltas → compute → write results)
Task: schedules and automates the procedure

---

### How the Data Flows

Think of this pipeline as a simple chain of events:

1. Data lands in Snowflake
    Fresh records arrive in your source table, for example, new months or corrected historical values.

2. The “change radar” notices
    A Stream quietly keeps track of what’s new or updated, nothing else.

3. The “forecast run” kicks off
    A scheduled Task tells Snowflake, “If there’s anything new, go update the forecast.”

4. The “calculator” does its thing
    Inside Snowflake, a small forecasting function turns inputs into next-period predictions.

5. Results get published
    Updated forecasts are saved to a results table, ready for dashboards, reports, or downstream models.


---

#### When Data Changes

If a new month or quarter arrives, only those new rows flow through the forecast.
If a past value gets corrected, only that slice is recalculated, no full reruns required.

#### When the Calendar Advances

If you forecasted 2026–2027 last month and it’s now 2026, the next run naturally shifts forward and produces 2027–2028.
No manual edits or scripts. The pipeline uses the latest data to extend the horizon automatically.

#### Why This Approach Works

No large reprocesses, only deltas move.
Everything stays in Snowflake: storage, change tracking, scheduling, and computation.
Easy to reason about: one job watches, one job runs, one table publishes.

---

This post shares my personal perspective as a data engineer exploring how Snowflake’s native features can simplify forecasting workflows. The examples are illustrative and not tied to any specific company system.

### Closing Thoughts
Building this pipeline reminded me that automation doesn’t always mean adding more tools.
Sometimes it’s about using what’s already available, but in a more intentional way.

By combining Streams, Procedures, and Tasks, I was able to keep everything inside Snowflake and let the system handle what used to be a manual process.
Now, when new data arrives, forecasts update automatically. No scripts, no cron jobs, no extra moving parts.
It’s a small reminder that good design often comes from simplifying, not adding more steps.

If you’ve been managing forecasts or similar updates manually, consider bringing the logic into Snowflake.
You might be surprised by how much cleaner and more predictable the workflow feels.