import { describe, it, expect } from 'vitest';
import { formatBlogDate } from '../utils/date';

describe('formatBlogDate', () => {
  it('returns "Date TBD" for null', () => {
    expect(formatBlogDate(null)).toBe('Date TBD');
  });

  it('returns "Date TBD" for undefined', () => {
    expect(formatBlogDate(undefined)).toBe('Date TBD');
  });

  it('returns "Date TBD" for empty string', () => {
    expect(formatBlogDate('')).toBe('Date TBD');
  });

  it('formats a valid ISO date string correctly', () => {
    const result = formatBlogDate('2025-01-15T10:00:00Z');
    expect(result).toBe('January 15, 2025');
  });

  it('formats a date-only string correctly', () => {
    // Use noon UTC to avoid timezone edge effects
    const result = formatBlogDate('2024-06-01T12:00:00Z');
    expect(result).toBe('June 1, 2024');
  });

  it('formats a date with timezone offset correctly', () => {
    const result = formatBlogDate('2023-12-25T00:00:00-05:00');
    expect(result).toBe('December 25, 2023');
  });

  it('returns "Date TBD" for an invalid date string', () => {
    expect(formatBlogDate('not-a-date')).toBe('Date TBD');
  });
});
