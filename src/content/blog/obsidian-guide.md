---
title: 'Obsidian Integration Guide'
description: 'How to use Obsidian with your Astro blog for seamless content management'
pubDate: '2024-01-15'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags: ['obsidian', 'workflow', 'markdown']
draft: true
author: 'Your Name'
---

# Obsidian Integration Guide

This post demonstrates how to use Obsidian with your Astro blog for seamless content management.

## Features Supported

### Image References
Use standard markdown for images (Obsidian `![[image]]` syntax should be converted):

![Blog placeholder](/images/blog/blog-placeholder-2.jpg)

### Tables
Markdown tables are fully supported:

| Feature | Status | Notes |
|---------|--------|-------|
| Images | ✅ | Use standard markdown: `![alt](/images/blog/image.png)` |
| Tags | ✅ | Array format in frontmatter |
| Footnotes | ✅ | Using [^1] syntax |
| Tables | ✅ | GitHub Flavored Markdown |

### Footnotes
You can use footnotes like this[^1].

### Code Blocks
```javascript
// Code highlighting is supported
function greet(name) {
  return `Hello, ${name}!`;
}
```

## Workflow Tips

1. **Create posts in Obsidian** - Write your content using Obsidian's powerful editor
2. **Use tags** - Add tags in the frontmatter for categorization
3. **Link images** - Use standard markdown: `![alt](/images/blog/image.png)`
4. **Export to blog** - Copy your markdown to the blog's content folder

## Conclusion

This setup provides a seamless workflow between Obsidian and your Astro blog, maintaining compatibility with Obsidian's markdown features while leveraging Astro's performance and SEO benefits.

[^1]: This is a footnote example.
