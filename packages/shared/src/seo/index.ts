import type { SeoProps, BreadcrumbItem, SeoPost, SiteSettings } from '../types';

/**
 * Generate JSON-LD markup for a BlogPosting schema.org entity.
 */
export function generateBlogPostingJsonLd(post: SeoPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.authorName || 'EMRG',
    },
  };
}

/**
 * Generate JSON-LD markup for the Organization schema.org entity.
 *
 * Accepts optional SiteSettings to override name and provide contact info.
 * Falls back to hardcoded defaults when settings are not provided.
 */
export function generateOrganizationJsonLd(settings?: SiteSettings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings?.siteName || 'EMRG',
    url: 'https://emrg.studio',
    ...(settings && {
      ...(settings.logo && { logo: settings.logo }),
      ...(settings.contactEmail && {
        contactPoint: {
          '@type': 'ContactPoint',
          email: settings.contactEmail,
          contactType: 'customer service',
        },
      }),
    }),
  };
}

/**
 * Generate JSON-LD markup for a BreadcrumbList schema.org entity.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export interface SeoMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

/**
 * Generate SEO metadata object with Open Graph and Twitter Card properties.
 */
export function generateSeoMeta(props: SeoProps): SeoMetadata {
  return {
    title: props.title,
    description: props.description,
    ogTitle: props.title,
    ogDescription: props.description,
    ogImage: props.image,
    ogUrl: props.url || props.canonical,
    ogType: props.type || 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: props.title,
    twitterDescription: props.description,
    twitterImage: props.image,
    canonical: props.canonical,
  };
}
