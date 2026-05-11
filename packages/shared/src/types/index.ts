/**
 * Shared Sanity types for @emrg/shared
 *
 * Merged from all 5 sites to provide a unified type system.
 */

/**
 * Loose type for Sanity image references accepted by @sanity/image-url.
 * Can be an object with `asset._ref`, an object with `_id`, or a string.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImageSource = any;

export interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string | null;
  excerpt: string;
  mainImage: SanityImageSource | null;
  categories?: string[];
  author?: {
    name: string;
    role?: string;
    bio?: string;
    image?: SanityImageSource;
  };
  body?: unknown[];
  readingTime?: number;
  seo?: {
    metaDesc?: string;
  };
}

export interface PostTeaser {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string | null;
  mainImage: SanityImageSource | null;
  categories?: string[];
  author?: string;
  readingTime?: number;
}

export interface PostDetail extends Post {
  body: unknown[];
  relatedPosts: Array<{
    title: string;
    slug: string;
    mainImage?: SanityImageSource;
    publishedAt?: string;
  }>;
}

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  site?: string;
  canonical?: string;
  type?: string;
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
}

export interface SeoPost {
  title: string;
  description: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

// ─── Site Settings ───────────────────────────────────────────────────────────

export interface NavItem {
  title: string;
  href: string;
  isCta?: boolean;
  dataI18n?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface SiteOverride {
  siteKey: string;
  title?: string;
  description?: string;
  ogImage?: string;
  calendlyUrl?: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: string;
  favicon?: string;
  ogImage?: string;
  contactEmail: string;
  calendlyUrl?: string;
  mainNavigation: NavItem[];
  footerColumns: FooterColumn[];
  socialLinks: SocialLink[];
  footerText: string;
  copyright: string;
  sites: SiteOverride[];
}
