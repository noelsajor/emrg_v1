import { defineType, defineField } from 'sanity';

export const siteOverride = defineType({
    name: 'siteOverride',
    title: 'Site Override',
    type: 'object',
    fields: [
        defineField({
            name: 'siteKey',
            title: 'Site Key',
            type: 'string',
            description: 'e.g. "site-a", "site-b"',
        }),
        defineField({
            name: 'title',
            title: 'SEO Title Override',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'SEO Description Override',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'ogImage',
            title: 'OG Image Override',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'calendlyUrl',
            title: 'Calendly URL Override',
            type: 'url',
        }),
    ],
    preview: {
        select: {
            title: 'siteKey',
        },
    },
});
