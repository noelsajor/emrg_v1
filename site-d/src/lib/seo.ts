export interface SeoProps {
    title: string;
    description: string;
    image?: string;
    canonical?: string;
    type?: string;
    publishedAt?: string;
    updatedAt?: string;
    authorName?: string;
}

export function generateSchemaMarkup(props: SeoProps) {
    if (props.type === 'article') {
        return {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": props.title,
            "description": props.description,
            "image": props.image,
            "datePublished": props.publishedAt,
            "dateModified": props.updatedAt || props.publishedAt,
            "author": {
                "@type": "Person",
                "name": props.authorName || "EMRG"
            }
        };
    }

    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": props.title,
        "description": props.description,
        "url": "https://emrg.studio"
    };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item
        }))
    };
}
