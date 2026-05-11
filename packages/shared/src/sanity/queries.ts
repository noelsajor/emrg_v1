import groq from 'groq';
import type { SanityClient } from './client';
import type { Post, PostTeaser, PostDetail, SiteSettings } from '../types';

/**
 * Fetch ALL posts with full metadata.
 * Filters for `defined(slug.current)` and orders by `publishedAt desc`.
 * Returns slug as a string, includes reading time calculation.
 */
export async function getPosts(client: SanityClient): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      "author": author-> { name, role, bio, image },
      "categories": categories[]->title,
      "readingTime": round(length(pt::text(body)) / 5 / 200)
    }`,
  );
}

/**
 * Fetch the latest N posts (teaser fields only).
 */
export async function getLatestPosts(
  client: SanityClient,
  count = 3,
): Promise<PostTeaser[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...${count}] {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "author": author->name,
      "readingTime": round(length(pt::text(body)) / 5 / 200)
    }`,
  );
}

/**
 * Fetch a single post by slug with full detail including related posts.
 * Related posts share at least one category with the target post.
 */
export async function getPostBySlug(
  client: SanityClient,
  slug: string,
): Promise<PostDetail | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ...,
      "slug": slug.current,
      "categories": categories[]->title,
      "author": author-> { name, role, bio, image },
      "readingTime": round(length(pt::text(body)) / 5 / 200),
      "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
        title,
        "slug": slug.current,
        mainImage,
        publishedAt
      }
    }`,
    { slug },
  );
}

/**
 * Fetch a paginated slice of posts (teaser fields).
 * Uses GROQ's array slice syntax: `[$start...$end]`.
 */
export async function getPaginatedPosts(
  client: SanityClient,
  start = 0,
  end = 10,
): Promise<PostTeaser[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[$start...$end] {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "author": author->name,
      "readingTime": round(length(pt::text(body)) / 5 / 200)
    }`,
    { start, end },
  );
}

/**
 * Fetch all slugs (for getStaticPaths).
 */
export async function getAllSlugs(
  client: SanityClient,
): Promise<{ slug: string }[]> {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }`,
  );
}

// ─── Site Settings ───────────────────────────────────────────────────────────

/**
 * Fetch the single Site Settings document from Sanity.
 * Returns merged defaults so the site never breaks on missing fields.
 */
export async function getSiteSettings(
  client: SanityClient,
): Promise<SiteSettings> {
  const query = groq`*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    logo,
    favicon,
    ogImage,
    contactEmail,
    calendlyUrl,
    mainNavigation[] { title, href, isCta, dataI18n },
    footerColumns[] { title, links[] { title, href, isCta, dataI18n } },
    socialLinks[] { platform, url, label },
    footerText,
    copyright,
    sites[] { siteKey, title, description, ogImage, calendlyUrl }
  }`;

  const settings = await client.fetch<Partial<SiteSettings> | null>(query);
  return mergeWithDefaults(settings);
}

function mergeWithDefaults(
  settings: Partial<SiteSettings> | null,
): SiteSettings {
  return {
    siteName: settings?.siteName ?? 'EMRG',
    siteDescription:
      settings?.siteDescription ?? 'Founder-led ecommerce performance studio',
    contactEmail: settings?.contactEmail ?? 'hello@emrg.studio',
    copyright: settings?.copyright ?? '© 2025 EMRG. All rights reserved.',
    footerText: settings?.footerText ?? '',
    mainNavigation: settings?.mainNavigation ?? [],
    footerColumns: settings?.footerColumns ?? [],
    socialLinks: settings?.socialLinks ?? [],
    sites: settings?.sites ?? [],
    ...settings,
  };
}
