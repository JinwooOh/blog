# Image Management Guide

This guide explains how to manage images in your Astro blog with Obsidian compatibility.

## 📁 **Folder Structure**

```
src/assets/           # Processed images (Astro optimization)
├── blog/            # Blog post images
├── heroes/          # Hero images for posts
└── illustrations/   # Diagrams, charts, etc.

public/images/       # Static images (direct access)
├── blog/            # Blog post images (Obsidian style)
├── assets/          # General assets
└── gallery/         # Image galleries
```

## 🎯 **When to Use Each Location**

### Use `src/assets/` for:
- ✅ Hero images (frontmatter)
- ✅ Images that need optimization
- ✅ Images referenced in components
- ✅ Images that change frequently

### Use `public/images/` for:
- ✅ Obsidian-style references (`![[image.jpg]]`)
- ✅ Static assets (logos, icons)
- ✅ Large image galleries
- ✅ Images that don't need processing

## 📝 **Usage Examples**

### 1. Hero Images (Frontmatter)
```yaml
---
title: 'My Post'
heroImage: '../../assets/heroes/post-hero.jpg'
---
```

### 2. Obsidian-Style References
```markdown
# My Post

Here's an image using Obsidian syntax:
![[images/blog/my-diagram.png]]

And another one:
![[images/gallery/photo1.jpg]]
```

### 3. Standard Markdown Images
```markdown
![Alt text](/images/blog/example.jpg)
```

## 🔧 **Image Optimization**

### Astro Automatic Optimization
Images in `src/assets/` are automatically:
- ✅ Compressed
- ✅ Converted to modern formats (WebP, AVIF)
- ✅ Resized for different screen sizes
- ✅ Lazy loaded

### Manual Optimization
For `public/images/`, optimize manually:
- Use tools like [TinyPNG](https://tinypng.com/)
- Compress before uploading
- Use appropriate formats (JPEG for photos, PNG for graphics)

## 📱 **Responsive Images**

### With Astro Image Component
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/heroes/post-hero.jpg';
---

<Image
  src={heroImage}
  alt="Hero image"
  width={800}
  height={400}
  loading="eager"
/>
```

### With Standard Markdown
```markdown
![Alt text](/images/blog/example.jpg)
```

## 🚀 **Best Practices**

1. **Naming Convention**:
   - Use descriptive names: `post-title-hero.jpg`
   - Use lowercase with hyphens
   - Include dimensions for clarity: `logo-200x200.png`

2. **File Sizes**:
   - Keep images under 1MB when possible
   - Use appropriate formats (JPEG for photos, PNG for graphics)

3. **Alt Text**:
   - Always include alt text for accessibility
   - Be descriptive but concise

4. **Organization**:
   - Group related images in folders
   - Use consistent folder structure
   - Keep hero images separate from content images

## 🔄 **Obsidian Workflow**

1. **In Obsidian**:
   - Create images in your vault
   - Use `![[image.jpg]]` syntax
   - Organize in folders

2. **For Blog**:
   - Copy images to `public/images/`
   - Maintain folder structure
   - Update references if needed

## 📊 **Image Formats**

| Format | Best For | Notes |
|--------|----------|-------|
| JPEG | Photos, complex images | Smaller file size |
| PNG | Graphics, logos, screenshots | Supports transparency |
| WebP | Modern browsers | Better compression |
| SVG | Icons, simple graphics | Scalable, small file size |

## 🛠 **Tools for Image Management**

- **Compression**: TinyPNG, ImageOptim
- **Resizing**: Preview (macOS), GIMP
- **Format Conversion**: Online converters
- **Batch Processing**: ImageMagick, scripts
