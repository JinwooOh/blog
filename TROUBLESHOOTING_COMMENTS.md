# Troubleshooting Comment System Issues

## Issue: "Comment table is not defined" Error

### Symptoms
- Error: `Comment table is not defined. Restart dev server after pushing schema.`
- Generated types file `.astro/integrations/astro_db/db.d.ts` is empty
- API routes return 500 errors

### Solution Steps

1. **Verify Schema File Exists**
   ```bash
   ls -la src/db/config.ts
   ```
   Should show the config file with Comment table definition.

2. **Verify Schema Has Been Pushed**
   ```bash
   npx astro db push --remote
   ```
   Should show "Push complete!" without errors.

3. **Clear Astro Cache and Restart**
   ```bash
   # Stop the dev server (Ctrl+C)
   rm -rf .astro/integrations/astro_db
   npm run dev
   ```

   **IMPORTANT**: The dev server MUST be fully restarted (not just hot reload) for Astro DB to generate types.

4. **Verify Types Are Generated**
   After restarting, check:
   ```bash
   cat .astro/integrations/astro_db/db.d.ts
   ```

   This file should NOT be empty. It should contain exports for `Comment`, `db`, `eq`, etc.

   If it's still empty after a full restart:
   - Make sure the schema file is at `src/db/config.ts`
   - Check that `astro.config.mjs` has `db()` in integrations
   - Verify environment variables are set correctly

5. **Check Environment Variables**
   ```bash
   cat .env
   ```
   Should contain:
   - `ASTRO_DB_REMOTE_URL=libsql://...`
   - `ASTRO_DB_APP_TOKEN=...`

### Common Issues

- **Types file is empty**: Dev server wasn't fully restarted after schema push
- **Comment is undefined**: Types weren't generated, need to restart dev server
- **API routes return 500**: Either Comment is undefined or database connection issue

### Debug Commands

Check if Comment is being exported:
```bash
# After restarting dev server, check server console logs
# Look for any Astro DB initialization messages
```

Check database connection:
```bash
turso db shell blog-comments
# Then run: SELECT * FROM Comment LIMIT 1;
```

