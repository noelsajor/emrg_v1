import imageUrlBuilder from '@sanity/image-url';
import { getClient } from './client';
import type { SanityImageSource } from '../types';

let _builder: ReturnType<typeof imageUrlBuilder> | null = null;

function getBuilder() {
  if (!_builder) {
    _builder = imageUrlBuilder(getClient());
  }
  return _builder;
}

/**
 * Build a Sanity image URL builder for the given source.
 * Returns a no-op builder yielding empty string when source is null/undefined.
 *
 * Usage:
 * ```ts
 * urlFor(post.mainImage).width(800).height(600).url()
 * ```
 */
export function urlFor(source: SanityImageSource | null | undefined): {
  url: () => string;
  width: (w: number) => unknown;
  height: (h: number) => unknown;
} {
  if (!source) {
    // Return a no-op chain that always yields empty string
    const noop = () => ({ url: () => '' } as const);
    return { url: () => '', width: noop, height: noop };
  }
  return getBuilder().image(source);
}

/**
 * Build a direct image URL string for the given source.
 * Handles null/undefined gracefully (returns empty string).
 */
export function buildImageSrc(
  source: SanityImageSource | null | undefined,
  width?: number,
  height?: number,
): string {
  if (!source) return '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let builder: any = getBuilder().image(source);
  if (width) builder = builder.width(width);
  if (height) builder = builder.height(height);
  return builder.url() || '';
}
