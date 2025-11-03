# Vercel Deployment Checklist for Comments

## Required Steps

### 1. Environment Variables in Vercel

You **MUST** add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:

```
ASTRO_DB_REMOTE_URL=libsql://your-database-url-here
ASTRO_DB_APP_TOKEN=your-auth-token-here
```

**Important**:
- Use the exact same values from your `.env` file
- Make sure to add them for **Production**, **Preview**, and **Development** environments
- Click **Save** after adding each variable

### 2. Verify Database Schema is Pushed

Before deploying, make sure the schema is pushed to your remote database:

```bash
npx astro db push --remote
```

You should see:
```
Pushing database schema updates...
Push complete!
```

### 3. Redeploy After Adding Environment Variables

After adding environment variables in Vercel:
1. Go to **Deployments** tab
2. Click the **⋯** menu on your latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

### 4. Verify Deployment

After deployment:
1. Visit a blog post on your deployed site
2. Check the browser console (F12) for any errors
3. Try submitting a comment
4. Check Vercel function logs for errors

## Troubleshooting 500 Errors

### Check Vercel Function Logs

1. Go to Vercel dashboard → Your project
2. Navigate to **Functions** tab
3. Click on the function that's failing (e.g., `api/comments/[slug]`)
4. Check the logs for specific error messages

Common errors:
- **"Comment table is not defined"**: Environment variables not set or schema not pushed
- **"Cannot connect to database"**: Incorrect `ASTRO_DB_REMOTE_URL` or `ASTRO_DB_APP_TOKEN`
- **"Invalid URL"**: The `ASTRO_DB_REMOTE_URL` format is incorrect

### Verify Environment Variables

Run this to check your local values:
```bash
cat .env | grep ASTRO_DB
```

Then verify these exact values are in Vercel:
- Settings → Environment Variables

### Test Database Connection

You can test if your database is accessible:
```bash
turso db shell blog-comments
# Then run:
SELECT * FROM Comment LIMIT 1;
```

If the table doesn't exist, run:
```bash
npx astro db push --remote
```

## Quick Fix Checklist

- [ ] Environment variables added to Vercel (ASTRO_DB_REMOTE_URL, ASTRO_DB_APP_TOKEN)
- [ ] Schema pushed to remote database (`npx astro db push --remote`)
- [ ] Redeployed after adding environment variables
- [ ] Checked Vercel function logs for specific errors
- [ ] Verified database connection works locally

