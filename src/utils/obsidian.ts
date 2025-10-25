/**
 * Utility functions for Obsidian compatibility
 */

/**
 * Convert Obsidian-style image references to standard markdown
 * Supports both ![[image.png]] and [[image.png]] syntax
 */
export function convertObsidianImages(content: string): string {
  // Convert ![[image.png]] to ![alt](image.png)
  content = content.replace(/!\[\[([^\]]+)\]\]/g, '![]($1)');

  // Convert [[image.png]] to [image.png](image.png) for linked images
  content = content.replace(/\[\[([^\]]+)\]\]/g, '[$1]($1)');

  return content;
}

/**
 * Extract tags from frontmatter and convert to array if needed
 */
export function normalizeTags(tags: string | string[] | undefined): string[] {
  if (!tags) return [];
  if (typeof tags === 'string') {
    // Handle comma-separated tags
    return tags.split(',').map(tag => tag.trim()).filter(Boolean);
  }
  return tags;
}

/**
 * Convert Obsidian date format to ISO string
 */
export function parseObsidianDate(dateStr: string): Date {
  // Handle various Obsidian date formats
  const formats = [
    'YYYY-MM-DD',
    'YYYY/MM/DD',
    'MM/DD/YYYY',
    'DD-MM-YYYY'
  ];

  // Try to parse the date
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date format: ${dateStr}`);
    return new Date();
  }

  return date;
}
