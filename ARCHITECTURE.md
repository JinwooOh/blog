# Project Structure Overview

## Architecture Summary

Your blog follows Astro's component-based architecture with clear separation between:
- **Components**: Reusable UI pieces (Header, Footer, etc.)
- **Layouts**: Page templates (BlogPost layout)
- **Pages**: Individual routes (home, blog, about)
- **Content**: Markdown files in content collections

## Key Files and Their Roles

### Entry Point: BaseHead Component
**Location**: `src/components/BaseHead.astro`

This is the **most important file** because it:
- Imports `global.css` (line 4) - making all styling available site-wide
- Provides SEO metadata, Open Graph tags, Twitter cards
- Is included on every page through page layouts

### Content System
1. **Markdown files** in `src/content/blog/*.md` contain your blog posts
2. **Content config** in `src/content.config.ts` validates frontmatter
3. **Dynamic routes** in `src/pages/blog/[...slug].astro` fetch and render posts

### Styling System
1. **Global CSS** in `src/styles/global.css` defines:
   - CSS custom properties (colors, spacing, etc.)
   - Base typography and layout styles
   - Responsive design rules

2. **Component-scoped styles** in each `.astro` file's `<style>` tag
   - Only affects that specific component
   - Can use CSS variables from global.css

## Data Flow Example

For a blog post request:

1. **User visits** `/blog/obsidian-guide`
2. **`blog/[...slug].astro`** catches the dynamic route
3. **`getStaticPaths()`** function runs, loads all markdown files
4. **Astro matches** the slug to find the right post
5. **`BlogPost` layout** receives post data as props
6. **Layout renders** with Header, content, Footer
7. **Final HTML** is sent to browser

## How to Customize

### Change Site Name
Edit `src/consts.ts` → `SITE_TITLE`

### Change Colors
Edit `src/styles/global.css` → CSS variables in `:root {`

### Change Header/Navigation
Edit `src/components/Header.astro`

### Change Blog Post Layout
Edit `src/layouts/BlogPost.astro`

### Add New Post
Create a new `.md` file in `src/content/blog/` with frontmatter

### Change Blog Listing
Edit `src/pages/blog/index.astro`

## Key Features

✅ **Content Collections** - Type-safe markdown with validation
✅ **Tag System** - Posts can have tags, filterable by tag
✅ **Search** - Client-side search through post titles/descriptions
✅ **Responsive** - Works on mobile and desktop
✅ **SEO** - Meta tags, sitemap, RSS feed
✅ **Image Optimization** - Automatic image processing
✅ **Obsidian Compatible** - Uses standard markdown
