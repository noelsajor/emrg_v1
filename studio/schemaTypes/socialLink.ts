import { defineType, defineField } from 'sanity';

export const socialLink = defineType({
    name: 'socialLink',
    title: 'Social Link',
    type: 'object',
    fields: [
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'string',
            description: 'e.g. "Twitter", "LinkedIn", "Instagram"',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'Optional display label override',
        }),
    ],
});
