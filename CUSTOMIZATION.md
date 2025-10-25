# Blog Customization Guide

This Astro blog is designed to be easily customizable while maintaining a clean, minimal aesthetic. Here's how to customize various aspects:

## Color Scheme

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  /* Primary colors */
  --accent: #2337ff;           /* Main accent color */
  --accent-dark: #000d8a;     /* Darker accent for hover states */

  /* Grayscale */
  --black: 15, 18, 25;        /* Darkest text */
  --gray-dark: 34, 41, 57;    /* Dark gray text */
  --gray: 96, 115, 159;       /* Medium gray */
  --gray-light: 229, 233, 240; /* Light gray backgrounds */
}
```

## Typography

The blog uses the Atkinson font by default. To change fonts:

1. Replace font files in `public/fonts/`
2. Update `@font-face` declarations in `global.css`
3. Modify font-size variables as needed

## Layout

Adjust layout variables in `global.css`:

```css
:root {
  --max-width: 720px;         /* Main content width */
  --max-width-wide: 960px;    /* Wide content width */
  --border-radius: 8px;       /* Default border radius */
}
```

## Site Information

Update `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Your Blog Name';
export const SITE_DESCRIPTION = 'Your blog description';
export const SITE_URL = 'https://yourdomain.com';
```

## Adding New Posts

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

## Obsidian Integration

The blog supports Obsidian-style markdown:

- Use `![[image.png]]` for images
- Use `[[link]]` for internal links
- Tables, footnotes, and code blocks are supported
- Tags in frontmatter work seamlessly

## Custom Components

Create reusable components in `src/components/`:

```astro
---
// src/components/MyComponent.astro
---

<div class="my-component">
  <slot />
</div>

<style>
  .my-component {
    /* Your styles */
  }
</style>
```

## Deployment

The blog is ready to deploy to:

- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build && netlify deploy --prod --dir=dist`
- **GitHub Pages**: Use the GitHub Actions workflow

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Tips

- Use CSS custom properties for consistent theming
- Keep images in `src/assets/` for optimization
- Use semantic HTML for better SEO
- Test your changes across different screen sizes
