# Astro Blog with Obsidian Integration

A clean, minimal blog built with Astro that's fully compatible with Obsidian's markdown format. Features include tag filtering, search functionality, and optimized image handling.

## Features

- ✅ **Clean, minimal design** with easy customization
- ✅ **Obsidian compatibility** - supports `![[image.png]]` syntax and frontmatter
- ✅ **Tag system** with filtering and dedicated tag pages
- ✅ **Search functionality** - client-side search through posts
- ✅ **Comment system** - powered by Astro DB with Turso (free tier)
- ✅ **Image optimization** - automatic image processing and responsive images
- ✅ **SEO optimized** - built-in sitemap and meta tags
- ✅ **Mobile responsive** - works great on all devices
- ✅ **Fast performance** - static site generation with Astro

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Set up Turso database for comments (optional):**
   ```bash
   # Install Turso CLI (if not already installed)
   # macOS: brew install tursodatabase/tap/turso
   # Or visit: https://docs.turso.tech/cli/installation

   # Login to Turso
   turso auth login

   # Create a database
   turso db create blog-comments

   # Get database URL
   turso db show blog-comments --url

   # Create auth token
   turso db tokens create blog-comments

   # Create .env file with your credentials
   cp .env.example .env
   # Then edit .env and add your ASTRO_DB_REMOTE_URL and ASTRO_DB_APP_TOKEN
   ```

4. **Push database schema:**
   ```bash
   # This must be done before building/running the site
   npx astro db push --remote
   ```

   **Note**: The build will fail if the schema hasn't been pushed. Make sure to complete this step before running `npm run build`.

5. **Open your browser:**
   Visit `http://localhost:4321` to see your blog

## Creating Posts

See [PUBLISHING_WORKFLOW.md](./PUBLISHING_WORKFLOW.md) for a complete guide on publishing blog posts.

**Adding Images?** See [QUICK_IMAGE_GUIDE.md](./QUICK_IMAGE_GUIDE.md) for a quick reference, or [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for detailed image management.

**Quick start:**

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```yaml
---
title: 'Your Post Title'
description: 'Brief description of your post'
pubDate: '2024-01-15'
heroImage: '../../assets/your-image.jpg'
tags: ['tag1', 'tag2']
draft: false  # Set to true while writing
author: 'Your Name'
---
```

3. Write your content using standard markdown or Obsidian syntax
4. Set `draft: false` when ready to publish

## Obsidian Workflow

This blog works great with Obsidian! Use standard markdown in Obsidian and publish to your blog.

**What works:**
- ✅ Standard Markdown (headings, lists, bold, italic)
- ✅ Tables (via GitHub Flavored Markdown)
- ✅ Footnotes (`[^1]` syntax)
- ✅ Code blocks with syntax highlighting
- ✅ Frontmatter (YAML)

**What to convert:**
- `![[image.png]]` → `![alt](/images/blog/image.png)`
- `[[wikilinks]]` → `[link text](/blog/post/)`

See [OBSIDIAN_WORKFLOW.md](./OBSIDIAN_WORKFLOW.md) for a complete workflow guide.

## Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed customization instructions.

Key customization areas:
- Colors and typography in `src/styles/global.css`
- Site information in `src/consts.ts`
- Layout components in `src/layouts/`

## Deployment

The blog is ready to deploy to:

- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build && netlify deploy --prod --dir=dist`
- **GitHub Pages**: Use GitHub Actions

## Project Structure

```
src/
├── content/
│   └── blog/           # Markdown blog posts
├── components/         # Reusable components
├── layouts/           # Page layouts
├── pages/             # Routes
├── styles/            # Global styles
└── utils/             # Helper functions
```

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## License

MIT License - feel free to use this template for your own blog!