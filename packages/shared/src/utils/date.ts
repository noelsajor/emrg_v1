/**
 * Format a blog post's published date for display.
 *
 * - Valid date string → formatted as "Month Day, Year" (e.g. "January 15, 2025")
 * - null / undefined / empty string → returns "Date TBD"
 * - Invalid date strings → returns "Date TBD" (caught by try/catch)
 *
 * This is the canonical fix for the blog date bug where `new Date(null)`
 * was rendered as "Jan 1, 1970" across all sites.
 */
export function formatBlogDate(publishedAt: string | null | undefined): string {
  if (!publishedAt) return 'Date TBD';

  const date = new Date(publishedAt);
  if (isNaN(date.getTime())) return 'Date TBD';

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
