# Quick Guide: Adding Images to Blog Posts

A quick reference for adding images to your blog posts.

## 🎯 Three Methods

### 1. Hero Image (Featured Image)

**Use for:** The main image that appears at the top of your post and in blog listings.

**Steps:**
1. Put your image in `src/assets/blog/` (or create a subfolder)
2. Add to frontmatter:

```yaml
---
title: 'My Post'
heroImage: '../../assets/blog/my-hero.jpg'
---
```

**Example:**
```yaml
---
title: 'Building a Blog'
heroImage: '../../assets/blog/blog-hero.jpg'
---
```

**Path rules:**
- From `src/content/blog/my-post.md` → `../../assets/blog/image.jpg`
- From `src/content/blog/nested/my-post.md` → `../../../assets/blog/image.jpg`
- Always relative to your post file

**Benefits:**
- ✅ Automatically optimized by Astro
- ✅ Responsive images
- ✅ Modern formats (WebP/AVIF)

---

### 2. Inline Images in Content

**Use for:** Images within your post content.

**Steps:**
1. Put your image in `public/images/blog/` (or create a subfolder)
2. Reference in markdown:

```markdown
![Alt text describing the image](/images/blog/my-image.jpg)
```

**Example:**
```markdown
Here's a screenshot showing the result:

![Result screenshot](/images/blog/result.png)

And here's another image in a subfolder:

![Diagram](/images/blog/diagrams/architecture.png)
```

**Path rules:**
- Path starts with `/` (root of site)
- Maps to `public/` folder
- `/images/blog/photo.jpg` → `public/images/blog/photo.jpg`

**Note:**
- ⚠️ Images in `public/` are NOT automatically optimized
- Optimize manually before uploading (compress, resize)

---

### 3. Images from Assets Folder (Astro Import)

**Use for:** When you need Astro's automatic optimization for inline images.

**Steps:**
1. Put image in `src/assets/blog/`
2. Use HTML `<img>` tag (since Astro Image component needs import):

```html
<img src="/src/assets/blog/image.jpg" alt="Description" />
```

**Note:** This is less common for markdown posts. Usually you'd use Option 2 for inline images and Option 1 for heroes.

---

## 📁 Folder Structure

```
your-blog/
├── src/
│   ├── assets/
│   │   └── blog/           ← Hero images go here
│   │       ├── post-1-hero.jpg
│   │       └── post-2-hero.jpg
│   └── content/
│       └── blog/
│           └── my-post.md  ← Your posts reference images
│
└── public/
    └── images/
        └── blog/           ← Inline content images go here
            ├── screenshot-1.png
            └── diagrams/
                └── flow.png
```

---

## 💡 Quick Examples

### Complete Post with Images

```markdown
---
title: 'My First Post'
description: 'Learning to blog'
pubDate: '2024-01-15'
heroImage: '../../assets/blog/first-post-hero.jpg'  ← Hero image
tags: ['beginner']
draft: false
---

# My First Post

Here's a screenshot of what I built:

![My project screenshot](/images/blog/project-screenshot.png)  ← Inline image

And here's the architecture:

![Architecture diagram](/images/blog/architecture.png)  ← Another inline image
```

---

## ✅ Best Practices

1. **Optimize before upload:**
   - Compress images (TinyPNG, ImageOptim)
   - Keep under 1MB when possible
   - Use JPEG for photos, PNG for graphics

2. **Use descriptive alt text:**
   ```markdown
   ✅ Good: ![Screenshot showing the login page with error message]
   ❌ Bad: ![image]
   ```

3. **Organize in folders:**
   - `src/assets/blog/heroes/` - Hero images
   - `public/images/blog/screenshots/` - Screenshots
   - `public/images/blog/diagrams/` - Diagrams

4. **Naming convention:**
   - Use lowercase with hyphens: `my-image.jpg`
   - Be descriptive: `login-page-error.png`
   - Include post context: `blog-post-title-hero.jpg`

---

## 🚀 Common Workflows

### Adding Images from Your Computer

1. **For hero images:**
   ```bash
   # Copy image to assets
   cp ~/Downloads/my-photo.jpg src/assets/blog/post-title-hero.jpg

   # Reference in post frontmatter
   heroImage: '../../assets/blog/post-title-hero.jpg'
   ```

2. **For inline images:**
   ```bash
   # Copy image to public folder
   cp ~/Downloads/screenshot.png public/images/blog/screenshot.png

   # Reference in markdown
   ![Screenshot](/images/blog/screenshot.png)
   ```

### Adding Images from Obsidian

If you use Obsidian:
1. Copy images from your Obsidian vault
2. Paste into `public/images/blog/`
3. Use standard markdown syntax: `![alt](/images/blog/image.jpg)`

---

## 🔧 Troubleshooting

### Image Not Showing

**Check:**
1. ✅ Path is correct (relative vs absolute)
2. ✅ Image file exists in the folder
3. ✅ File extension matches (`.jpg` vs `.jpeg`)
4. ✅ Case sensitivity (Linux servers are case-sensitive)

### Hero Image Not Showing

**Check:**
1. ✅ Path in frontmatter is relative to post file
2. ✅ Image is in `src/assets/` (not `public/`)
3. ✅ Restart dev server after adding new images

### Image Too Large/Slow

**Solutions:**
1. Compress with [TinyPNG](https://tinypng.com/)
2. Use hero images (they're optimized automatically)
3. Resize large images before upload

---

## 📚 More Information

- See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for detailed image management
- See [PUBLISHING_WORKFLOW.md](./PUBLISHING_WORKFLOW.md) for complete post publishing guide

