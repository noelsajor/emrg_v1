import { defineType, defineField } from 'sanity';
import { navItem } from './navItem';
import { socialLink } from './socialLink';
import { siteOverride } from './siteOverride';

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    groups: [
        { name: 'seo', title: 'SEO & Branding' },
        { name: 'navigation', title: 'Navigation' },
        { name: 'footer', title: 'Footer' },
        { name: 'social', title: 'Social & Contact' },
    ],
    fields: [
        // ─── SEO & Branding ──────────────────────────────────────────────
        defineField({
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            group: 'seo',
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 3,
            group: 'seo',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
            group: 'seo',
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            options: { hotspot: true },
            group: 'seo',
        }),
        defineField({
            name: 'ogImage',
            title: 'Default OG Image',
            type: 'image',
            options: { hotspot: true },
            group: 'seo',
        }),

        // ─── Navigation ──────────────────────────────────────────────────
        defineField({
            name: 'mainNavigation',
            title: 'Main Navigation',
            type: 'array',
            of: [{ type: navItem.name }],
            group: 'navigation',
        }),

        // ─── Footer ──────────────────────────────────────────────────────
        defineField({
            name: 'footerColumns',
            title: 'Footer Columns',
            type: 'array',
            group: 'footer',
            of: [
                {
                    type: 'object',
                    name: 'footerColumn',
                    title: 'Footer Column',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Column Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'links',
                            title: 'Links',
                            type: 'array',
                            of: [{ type: navItem.name }],
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Text',
            type: 'text',
            rows: 3,
            group: 'footer',
        }),
        defineField({
            name: 'copyright',
            title: 'Copyright Text',
            type: 'string',
            group: 'footer',
        }),

        // ─── Social & Contact ────────────────────────────────────────────
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [{ type: socialLink.name }],
            group: 'social',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
            group: 'social',
        }),
        defineField({
            name: 'calendlyUrl',
            title: 'Calendly URL',
            type: 'url',
            group: 'social',
        }),

        // ─── Site Overrides ──────────────────────────────────────────────
        defineField({
            name: 'sites',
            title: 'Site-Specific Overrides',
            type: 'array',
            of: [{ type: siteOverride.name }],
            group: 'seo',
        }),
    ],

    preview: {
        select: {
            title: 'siteName',
            subtitle: 'siteDescription',
            media: 'logo',
        },
    },
});
