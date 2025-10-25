# Astro Blog with Obsidian Integration

A clean, minimal blog built with Astro that's fully compatible with Obsidian's markdown format. Features include tag filtering, search functionality, and optimized image handling.

## Features

- ✅ **Clean, minimal design** with easy customization
- ✅ **Obsidian compatibility** - supports `![[image.png]]` syntax and frontmatter
- ✅ **Tag system** with filtering and dedicated tag pages
- ✅ **Search functionality** - client-side search through posts
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

3. **Open your browser:**
   Visit `http://localhost:4321` to see your blog

## Creating Posts

1. Create a new `.md` file in `src/content/blog/`
2. Use this frontmatter template:

```yaml
---
title: 'Your Post Title'
description: 'Brief description of your post'
pubDate: '2024-01-15'
heroImage: '../../assets/your-image.jpg'
tags: ['tag1', 'tag2']
draft: false
author: 'Your Name'
---
```

3. Write your content using standard markdown or Obsidian syntax

## Obsidian Integration

This blog supports Obsidian's markdown features:

- **Images**: Use `![[image.png]]` syntax
- **Links**: Use `[[internal-link]]` for internal references
- **Tables**: Standard markdown tables
- **Footnotes**: Use `[^1]` syntax
- **Code blocks**: With syntax highlighting

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