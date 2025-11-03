# Blog Post Publishing Workflow

This guide explains the complete workflow for creating and publishing a blog post on your Astro blog.

## Quick Start: Publishing a Post

1. **Create a new markdown file** in `src/content/blog/`
2. **Add frontmatter** with required fields
3. **Write your content** using Markdown or Obsidian syntax
4. **Set `draft: false`** when ready to publish
5. **Commit and push** to deploy (if using Vercel/GitHub)

## Step-by-Step Workflow

### 1. Create a New Post File

Create a new `.md` or `.mdx` file in `src/content/blog/`. The filename will become the URL slug.

**Example:**
```bash
# File: src/content/blog/my-new-post.md
# URL: https://your-site.com/blog/my-new-post/
```

**Naming conventions:**
- Use lowercase letters, numbers, and hyphens
- Keep it short and descriptive
- Examples: `getting-started.md`, `advanced-tips.md`, `my-journey-2024.md`

### 2. Add Frontmatter

Every post needs frontmatter at the top of the file. Here's the complete template:

```yaml
---
title: 'Your Post Title'
description: 'A brief description that appears in listings and meta tags'
pubDate: '2024-01-15'
updatedDate: '2024-01-20'  # Optional - only include if you updated the post
heroImage: '../../assets/blog/your-image.jpg'  # Optional
tags: ['tag1', 'tag2', 'tag3']  # Optional - for categorization
draft: false  # Set to true while writing, false when ready to publish
author: 'Your Name'  # Optional
---
```

**Required fields:**
- `title`: The post title (shown in listings and on the post page)
- `description`: Brief summary (for meta tags and listings)
- `pubDate`: Publication date (ISO format: `YYYY-MM-DD` or `Mon DD YYYY`)

**Optional fields:**
- `updatedDate`: Last update date (if you revise the post)
- `heroImage`: Path to hero image (relative to `src/content/blog/`)
- `tags`: Array of tags for categorization and filtering
- `draft`: Boolean - `true` to hide from public, `false` to publish
- `author`: Your name

### 3. Write Your Content

Write your content below the frontmatter using Markdown:

```markdown
---
title: 'My First Post'
description: 'This is my first blog post'
pubDate: '2024-01-15'
tags: ['introduction', 'getting-started']
draft: false
---

# My First Post

This is the introduction paragraph.

## Section Heading

More content here with **bold** and *italic* text.

### Subsection

- Bullet points
- More items

[Link text](https://example.com)

![Image alt text](../../assets/blog/my-image.jpg)
```

**Supported features:**
- Standard Markdown syntax
- Code blocks with syntax highlighting
- Tables (GitHub Flavored Markdown)
- Footnotes (`[^1]`)
- MDX components (if using `.mdx` files)

**Using Obsidian?**
- Standard markdown works perfectly!
- Convert `![[image.png]]` to `![alt](/images/blog/image.png)`
- Convert `[[wikilinks]]` to standard markdown links
- See [OBSIDIAN_WORKFLOW.md](./OBSIDIAN_WORKFLOW.md) for details

### 4. Adding Images

There are **three ways** to add images to your posts:

#### Option 1: Hero Image (Featured Image)

Add a hero image that appears at the top of your post and in listings:

**In frontmatter:**
```yaml
---
title: 'My Post'
heroImage: '../../assets/blog/my-hero-image.jpg'
---
```

**Requirements:**
- Image must be in `src/assets/` or a subfolder
- Path is relative to your post file
- Images in `src/assets/` are automatically optimized by Astro

**Example structure:**
```
src/
├── assets/
│   └── blog/
│       └── my-hero-image.jpg
└── content/
    └── blog/
        └── my-post.md  (references ../../assets/blog/my-hero-image.jpg)
```

#### Option 2: Standard Markdown Images (Inline)

For images within your post content:

```markdown
![Description of the image](/images/blog/my-image.jpg)
```

**Requirements:**
- Images must be in `public/images/` or a subfolder
- Path starts with `/` (relative to public folder)
- **No automatic optimization** - optimize manually before uploading

**Example:**
```markdown
Here's a screenshot of my setup:

![My development setup](/images/blog/dev-setup.jpg)
```

**Note:** Obsidian-style images (`![[image.png]]`) are not automatically converted. Use standard markdown image syntax instead, or convert them manually before publishing.

#### Recommended Workflow

1. **Hero images** → Use `src/assets/blog/` with frontmatter `heroImage`
2. **Content images** → Use `public/images/blog/` with standard markdown syntax
3. **Optimize before upload** → Compress images to keep site fast

See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for complete image management details.

### 5. Preview Locally

Before publishing, preview your post locally:

```bash
npm run dev
```

Then visit:
- Blog listing: `http://localhost:4321/blog`
- Your post: `http://localhost:4321/blog/your-post-slug/`

**Testing draft posts:**
- Set `draft: true` to work on posts privately
- Draft posts are hidden from the blog listing
- ⚠️ **Note**: Draft posts may still be accessible via direct URL

### 6. When Ready to Publish

**Change `draft: false`:**

```yaml
---
title: 'My First Post'
description: 'This is my first blog post'
pubDate: '2024-01-15'
tags: ['introduction', 'getting-started']
draft: false  # ✅ Changed to false
---
```

### 7. Commit and Deploy

**If using Git + Vercel:**

```bash
# Stage your new post
git add src/content/blog/your-new-post.md

# Commit
git commit -m "Add new post: Your Post Title"

# Push to trigger automatic deployment
git push origin main
```

**What happens:**
1. You push to GitHub
2. Vercel automatically detects the push
3. Builds your site (~30 seconds - 2 minutes)
4. Deploys the new post
5. Your post is live!

**No manual redeploy needed** - it's all automatic! The deployment happens because Astro needs to process the markdown files during the build process.

**Note:** While you're using SSR mode (`output: 'server'`), Astro's content collections still process files at build/deployment time. Each deployment includes all your markdown files, so new posts need to be part of a new deployment.

### 8. Verify Deployment

After deployment:
1. Visit your live site
2. Check the blog listing page
3. Click through to your new post
4. Test the comments functionality
5. Verify tags work correctly

## Draft Post Workflow

### Creating Drafts

Set `draft: true` while writing:

```yaml
---
title: 'Work in Progress'
description: 'Still writing this...'
pubDate: '2024-01-15'
draft: true  # Hidden from public
---
```

**Current behavior:**
- ✅ Draft posts are filtered from the blog listing page
- ⚠️ Draft posts may still be accessible via direct URL
- ⚠️ Draft posts appear in RSS feed (if not filtered)

### Publishing a Draft

Simply change `draft: false` and commit:

```yaml
draft: false  # Now published!
```

## Post Organization Tips

### Using Tags

Tags help organize and filter posts:

```yaml
tags: ['javascript', 'tutorial', 'beginner']
```

- Tags appear as clickable filters on the blog page
- Each tag has its own page: `/blog/tag/javascript/`
- Use consistent tag names (lowercase, no spaces)

### Using Categories (via Tags)

You can use tags as categories:

```yaml
tags: ['tutorial', 'javascript', 'intermediate']
```

### Sorting Posts

Posts are automatically sorted by `pubDate` (newest first). To change the order:
- Update the `pubDate` in the frontmatter
- Posts with later dates appear first

## Updating Existing Posts

### Minor Updates

For small fixes, just edit the markdown file:

```yaml
---
title: 'My Post'
description: 'Updated description'
pubDate: '2024-01-15'
updatedDate: '2024-01-20'  # Add this when you update
---
```

### Major Revisions

For substantial updates:
1. Edit the content
2. Update `updatedDate` in frontmatter
3. Consider updating the `description` if the focus changed
4. Commit and push

## Best Practices

### 1. Descriptive Filenames
```
✅ Good: getting-started-with-astro.md
❌ Bad: post1.md, new-post.md
```

### 2. Clear Titles
```
✅ Good: "How to Build a Blog with Astro"
❌ Bad: "Blog Post", "Untitled"
```

### 3. Helpful Descriptions
Keep descriptions concise but informative (50-160 characters):
```
✅ Good: "Learn how to set up an Astro blog with markdown, tags, and comments in under 10 minutes."
❌ Bad: "Blog post", "Check this out"
```

### 4. Consistent Tagging
Use a consistent set of tags:
- Technical: `javascript`, `typescript`, `astro`, `react`
- Content type: `tutorial`, `guide`, `tips`, `review`
- Level: `beginner`, `intermediate`, `advanced`

### 5. Quality Images
- Use appropriate hero images for listings
- Optimize images before adding
- Use descriptive alt text

## Troubleshooting

### Post Not Appearing

1. **Check `draft: false`** - drafts are hidden
2. **Verify filename** - must be in `src/content/blog/`
3. **Check frontmatter** - all required fields must be valid
4. **Restart dev server** - sometimes needed for new files

### Images Not Loading

1. **Check path** - relative to the post file location
2. **Verify file exists** - image must be in the assets folder
3. **Check syntax** - use `![alt](path)` or `![[image.png]]`

### Tags Not Showing

1. **Verify tags array** - must be an array: `['tag1', 'tag2']`
2. **Check spelling** - tags are case-sensitive
3. **Clear browser cache** - sometimes helps

### Build Errors

If you get build errors:
1. Check frontmatter syntax (valid YAML)
2. Verify all required fields are present
3. Check for invalid date formats
4. Review terminal output for specific errors

## Example: Complete Post

Here's a complete example of a blog post:

```markdown
---
title: 'Building My First Astro Blog'
description: 'A journey from zero to published blog in one day'
pubDate: '2024-01-15'
updatedDate: '2024-01-16'
heroImage: '../../assets/blog/astro-logo.jpg'
tags: ['astro', 'blogging', 'tutorial', 'beginner']
draft: false
author: 'Jane Doe'
---

# Building My First Astro Blog

I've always wanted to start a blog, and Astro seemed like the perfect framework. In this post, I'll share my experience building this blog from scratch.

## Why Astro?

Astro offers several advantages for blog building:

- **Performance**: Incredibly fast static site generation
- **Simplicity**: Easy to understand and customize
- **Flexibility**: Works with React, Vue, or just vanilla JS

## Getting Started

The first step was...

[Continue reading...]

## Conclusion

Starting a blog with Astro was easier than I expected. The documentation is excellent, and the community is helpful.

---

**Next steps**: Learn about [optimizing images](/blog/image-optimization/) and [adding comments](/blog/comment-system/).
```

## Summary

**Quick checklist before publishing:**

- [ ] Post file created in `src/content/blog/`
- [ ] Frontmatter includes `title`, `description`, `pubDate`
- [ ] `draft: false` is set
- [ ] Content is written and proofread
- [ ] Images are added and working
- [ ] Tags are added (if desired)
- [ ] Post previewed locally
- [ ] Committed to Git
- [ ] Pushed to trigger deployment
- [ ] Verified on live site

That's it! Your blog post is now published and live. 🎉

