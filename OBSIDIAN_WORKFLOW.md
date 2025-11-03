# Simple Obsidian to Blog Workflow

A straightforward workflow for publishing your Obsidian notes as blog posts.

## ✅ What Works Out of the Box

Your blog supports standard Markdown features that Obsidian uses:
- ✅ **Standard Markdown** - Headings, lists, bold, italic, links
- ✅ **Tables** - Via GitHub Flavored Markdown
- ✅ **Footnotes** - Using `[^1]` syntax
- ✅ **Code blocks** - With syntax highlighting
- ✅ **Frontmatter** - YAML frontmatter works the same

## 🚫 What Doesn't Work

- ❌ Obsidian-specific syntax: `![[image.png]]` and `[[wikilinks]]`
  - These need to be converted to standard markdown before publishing

## 📝 Simple Publishing Workflow

### Step 1: Prepare Your Note in Obsidian

Write your post in Obsidian using standard markdown. Avoid:
- `![[image.png]]` syntax (use `![alt](/images/blog/image.png)` instead)
- `[[wikilinks]]` (use `[link text](/blog/post-slug/)` instead)

### Step 2: Copy to Blog

**Option A: Copy/Paste Content**
1. Open your Obsidian note
2. Copy the markdown content (Cmd+C / Ctrl+C)
3. Create a new file in `src/content/blog/your-post-slug.md`
4. Add frontmatter (see template below)
5. Paste your content below the frontmatter

**Option B: Export and Move File**
1. Export your note as markdown from Obsidian
2. Move the `.md` file to `src/content/blog/`
3. Add/update the frontmatter

### Step 3: Add Frontmatter

Every blog post needs frontmatter at the top:

```yaml
---
title: 'Your Post Title'
description: 'Brief description for listings and SEO'
pubDate: '2024-01-15'
tags: ['tag1', 'tag2']
draft: false
author: 'Your Name'
---
```

**Required fields:**
- `title` - Your post title
- `description` - Brief summary
- `pubDate` - Publication date (YYYY-MM-DD)

**Optional fields:**
- `heroImage` - Path to hero image (relative to post file)
- `tags` - Array of tags
- `draft` - Set to `true` while writing, `false` to publish
- `author` - Your name
- `updatedDate` - If you update the post later

### Step 4: Convert Obsidian-Specific Syntax

If your note uses Obsidian syntax, convert it:

**Images:**
```markdown
# Obsidian
![[my-image.png]]

# Convert to standard markdown
![Alt text](/images/blog/my-image.png)
```
Then copy the image to `public/images/blog/my-image.png`

**Wikilinks:**
```markdown
# Obsidian
[[another-note]]

# Convert to standard markdown
[Link text](/blog/another-note-slug/)
```

### Step 5: Handle Images

**For hero images:**
1. Copy image to `src/assets/blog/`
2. Reference in frontmatter: `heroImage: '../../assets/blog/image.jpg'`

**For inline images:**
1. Copy image to `public/images/blog/`
2. Reference in markdown: `![alt](/images/blog/image.jpg)`

See [QUICK_IMAGE_GUIDE.md](./QUICK_IMAGE_GUIDE.md) for details.

### Step 6: Preview Locally

```bash
npm run dev
```

Visit `http://localhost:4321/blog/your-post-slug/` to preview.

### Step 7: Publish

```bash
git add src/content/blog/your-post-slug.md
git commit -m "Add new post: Your Post Title"
git push
```

Vercel will automatically deploy your new post!

## 🔄 Recommended Obsidian Setup

### Template for Blog Posts

Create an Obsidian template for blog posts:

```markdown
---
title: '{{title}}'
description: '{{description}}'
pubDate: '{{date:YYYY-MM-DD}}'
tags: []
draft: true
---

# {{title}}

Write your content here...
```

### Folder Structure in Obsidian

You can organize your Obsidian vault to mirror your blog:
```
Obsidian Vault/
├── Blog/
│   ├── Published/
│   │   ├── post-1.md
│   │   └── post-2.md
│   └── Drafts/
│       └── work-in-progress.md
└── Images/
    └── blog/          # Keep blog images here
```

### Quick Tips

1. **Use standard markdown** - Avoid Obsidian-specific features that won't convert
2. **Keep frontmatter simple** - Use the blog's frontmatter format
3. **Organize images** - Keep blog images separate from personal notes
4. **Test locally** - Always preview before publishing
5. **Use drafts** - Set `draft: true` while writing, change to `false` when ready

## 📋 Checklist Before Publishing

- [ ] Content copied from Obsidian
- [ ] Frontmatter added with all required fields
- [ ] Obsidian syntax converted (`![[image]]` → standard markdown)
- [ ] Images copied to correct folders (`src/assets/` or `public/images/`)
- [ ] Previewed locally - looks good
- [ ] Set `draft: false` when ready to publish
- [ ] Committed and pushed to trigger deployment

## 🎯 Example: Complete Workflow

1. **In Obsidian:**
   ```markdown
   # My Amazing Post

   This is my content with a [link](https://example.com)

   ![Screenshot](/path/to/image.png)
   ```

2. **Convert and add to blog:**
   ```markdown
   ---
   title: 'My Amazing Post'
   description: 'A post about something amazing'
   pubDate: '2024-01-15'
   tags: ['example']
   draft: false
   ---

   # My Amazing Post

   This is my content with a [link](https://example.com)

   ![Screenshot](/images/blog/screenshot.png)
   ```

3. **Copy image:**
   ```bash
   cp ~/path/to/image.png public/images/blog/screenshot.png
   ```

4. **Test and publish:**
   ```bash
   npm run dev  # Preview
   git add src/content/blog/my-amazing-post.md public/images/blog/screenshot.png
   git commit -m "Add new post"
   git push
   ```

That's it! Simple and straightforward. 🚀

