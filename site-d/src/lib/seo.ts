import type { SiteSettings } from '@emrg/shared';

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

export function generateOrganizationJsonLd(settings?: SiteSettings) {
    const name = settings?.siteName || "EMRG";
    const logo = settings?.logo || "https://emrg.studio/logo.png";
    const email = settings?.contactEmail || "hello@emrg.studio";

    return {
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
    };
}
