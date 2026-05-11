/**
 * Type-level tests for shared types.
 * These ensure the type structure compiles correctly.
 * No runtime assertions needed — the tsc --noEmit pass IS the test.
 */
import type {
  Post,
  PostTeaser,
  PostDetail,
  SeoProps,
  SeoPost,
  BreadcrumbItem,
  SanityImageSource,
} from '../types';

// Verify Post structure
const _post: Post = {
  _id: 'abc123',
  title: 'Test Post',
  slug: 'test-post',
  publishedAt: '2025-01-15',
  excerpt: 'An excerpt',
  mainImage: null,
  categories: ['Tech'],
  author: {
    name: 'John Doe',
    role: 'Editor',
    bio: 'Bio text',
    image: null,
  },
  readingTime: 5,
  seo: {
    metaDesc: 'SEO description',
  },
};
void _post;

// Verify PostTeaser structure
const _teaser: PostTeaser = {
  title: 'Teaser',
  slug: 'teaser',
  excerpt: 'Short',
  publishedAt: null,
  mainImage: null,
  categories: ['News'],
  author: 'Jane Doe',
  readingTime: 3,
};
void _teaser;

// Verify PostDetail extends Post with body + relatedPosts
const _detail: PostDetail = {
  ..._post,
  body: [{ _type: 'block', children: [{ text: 'Hello' }] }],
  relatedPosts: [
    {
      title: 'Related',
      slug: 'related',
      mainImage: null,
      publishedAt: '2025-02-01',
    },
  ],
};
void _detail;

// Verify SeoProps structure
const _seo: SeoProps = {
  title: 'Page Title',
  description: 'Page description',
  image: 'https://example.com/image.jpg',
  url: 'https://example.com',
  site: 'EMRG',
  canonical: 'https://example.com/page',
  type: 'article',
  publishedAt: '2025-01-15',
  updatedAt: '2025-02-01',
  authorName: 'John',
};
void _seo;

// Verify SeoPost structure
const _seoPost: SeoPost = {
  title: 'Post Title',
  description: 'Post desc',
  image: 'https://example.com/img.jpg',
  publishedAt: '2025-01-15',
  updatedAt: '2025-02-01',
  authorName: 'John',
};
void _seoPost;

// Verify BreadcrumbItem structure
const _breadcrumb: BreadcrumbItem = {
  name: 'Home',
  item: 'https://example.com',
};
void _breadcrumb;

// Verify SanityImageSource is usable
const _imageSource: SanityImageSource = {
  _type: 'image',
  asset: {
    _ref: 'image-abc123-2000x1500-jpg',
    _type: 'reference',
  },
};
void _imageSource;

// SanityImageSource can also be a string
const _stringRef: SanityImageSource = 'image-abc123';
void _stringRef;

// Trivial runtime test so vitest has a suite to run
import { describe, it, expect } from 'vitest';

describe('types', () => {
  it('compiles without error (verifies type structure)', () => {
    expect(true).toBe(true);
  });
});

