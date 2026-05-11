import { defineType, defineField } from 'sanity';

export const navItem = defineType({
    name: 'navItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'href',
            title: 'Link URL',
            type: 'string',
        }),
        defineField({
            name: 'isCta',
            title: 'Is CTA Button?',
            type: 'boolean',
        }),
        defineField({
            name: 'dataI18n',
            title: 'i18n Key',
            description: 'Optional i18n attribute key for runtime label swapping (e.g. "nav.services")',
            type: 'string',
        }),
    ],
});
