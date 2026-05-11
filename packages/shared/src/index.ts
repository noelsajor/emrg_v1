// ─── Types ───────────────────────────────────────────────────────────────────
export type {
  SanityImageSource,
  Post,
  PostTeaser,
  PostDetail,
  SeoProps,
  SeoPost,
  BreadcrumbItem,
  NavItem,
  SocialLink,
  FooterColumn,
  SiteOverride,
  SiteSettings,
} from './types';

// ─── Sanity Client ───────────────────────────────────────────────────────────
export { createSanityClient, getClient } from './sanity/client';
export type { SanityClientOptions } from './sanity/client';

// ─── Sanity Queries ──────────────────────────────────────────────────────────
export {
  getPosts,
  getLatestPosts,
  getPostBySlug,
  getPaginatedPosts,
  getAllSlugs,
  getSiteSettings,
} from './sanity/queries';

// ─── Sanity Image ────────────────────────────────────────────────────────────
export { urlFor, buildImageSrc } from './sanity/image';

// ─── SEO ─────────────────────────────────────────────────────────────────────
export {
  generateBlogPostingJsonLd,
  generateOrganizationJsonLd,
  generateBreadcrumbSchema,
  generateSeoMeta,
} from './seo';
export type { SeoMetadata } from './seo';

// ─── Utils ───────────────────────────────────────────────────────────────────
export { formatBlogDate } from './utils/date';
