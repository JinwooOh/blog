# Comment System Setup Guide

This blog uses Astro DB with Turso for comments. Follow these steps to set up the commenting system.

## Prerequisites

1. Node.js and npm installed
2. Turso CLI installed ([Installation Guide](https://docs.turso.tech/cli/installation))

## Setup Steps

### 1. Install Turso CLI (if not already installed)

**macOS:**
```bash
brew install tursodatabase/tap/turso
```

**Other platforms:**
Visit https://docs.turso.tech/cli/installation

### 2. Login to Turso

```bash
turso auth login
```

This will open your browser to authenticate.

### 3. Create a Database

```bash
turso db create blog-comments
```

Replace `blog-comments` with your preferred database name.

### 4. Get Database URL

```bash
turso db show blog-comments --url
```

Copy the URL that's displayed (starts with `libsql://`).

### 5. Create Auth Token

```bash
turso db tokens create blog-comments
```

Copy the token that's displayed.

### 6. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```
ASTRO_DB_REMOTE_URL=libsql://your-database-url-here
ASTRO_DB_APP_TOKEN=your-auth-token-here
```

**Important**: Astro DB uses `ASTRO_DB_REMOTE_URL` and `ASTRO_DB_APP_TOKEN` (not `TURSO_DATABASE_URL`).

### 7. Push Database Schema

**IMPORTANT**: This must be done before building or running the site.

```bash
npx astro db push --remote
```

This will create the `Comment` table in your Turso database.

### 8. Verify Setup

Run the development server:

```bash
npm run dev
```

Visit a blog post and check if the comments section appears. The comments will be empty initially.

## Troubleshooting

### Build fails with "does not provide an export named 'Comment'"

This means the database schema hasn't been pushed yet. Run:
```bash
npx astro db push --remote
```

### API routes return errors

Make sure:
- Your `.env` file has the correct `ASTRO_DB_REMOTE_URL` and `ASTRO_DB_APP_TOKEN`
- The database schema has been pushed (`npx astro db push --remote`)
- Your environment variables are loaded (restart the dev server after adding them)

### Comments don't appear

1. Check browser console for errors
2. Verify the API endpoint is working: visit `/api/comments/[any-slug]` in your browser
3. Make sure the post slug matches what's in the URL

## Free Tier Limits

Turso's free tier includes:
- 500 million rows read per month
- 10 million rows written per month
- 5GB storage

This should be more than sufficient for a personal blog's commenting system.

## Deployment

When deploying:

1. Add the same environment variables (`ASTRO_DB_REMOTE_URL` and `ASTRO_DB_APP_TOKEN`) to your deployment platform
2. Make sure the database schema is already pushed (step 7 above)
3. The API routes will work automatically on platforms that support Astro SSR (Vercel, Netlify, etc.)

For platforms that require static generation, you'll need to:
- Install an Astro adapter (e.g., `@astrojs/node`, `@astrojs/vercel`)
- Configure the adapter in `astro.config.mjs`
- Update the build command if needed

