export function buildOrganizationJsonLd() {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EMRG",
        "url": "https://emrg.studio",
        "logo": "https://emrg.studio/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@emrg.studio",
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
