import type { SiteSettings } from '@emrg/shared';

export function buildOrganizationJsonLd(settings?: SiteSettings) {
    const name = settings?.siteName || "EMRG";
    const logo = settings?.logo || "https://emrg.studio/logo.png";
    const email = settings?.contactEmail || "hello@emrg.studio";

    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": "https://emrg.studio",
        "logo": logo,
        "contactPoint": {
            "@type": "ContactPoint",
            "email": email,
            "contactType": "customer service"
        }
    });
}

export function buildBlogPostingJsonLd(post: any) {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.mainImage?.asset?.url,
        "author": {
            "@type": "Person",
            "name": post.author?.name
        },
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt || post.publishedAt
    });
}
