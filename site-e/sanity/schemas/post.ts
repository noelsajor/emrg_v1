export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() },
        { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } },
        { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
        { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: { type: 'category' } }] },
        { name: 'publishedAt', title: 'Published at', type: 'datetime', validation: Rule => Rule.required() },
        { name: 'updatedAt', title: 'Updated at', type: 'datetime' },
        { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: Rule => Rule.required() },
        { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
        {
            name: 'seo',
            title: 'SEO & Social',
            type: 'object',
            fields: [
                { name: 'metaTitle', title: 'Meta Title', type: 'string' },
                { name: 'metaDesc', title: 'Meta Description', type: 'text', rows: 2 },
                { name: 'shareImage', title: 'Share Image', type: 'image' }
            ]
        },
        {
            name: 'geoKeywords',
            title: 'GEO Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add specific locations (e.g., Miami, New York) to target local search.'
        }
    ],
    preview: {
        select: { title: 'title', author: 'author.name', media: 'mainImage' },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, { subtitle: author && `by ${author}` });
        }
    }
}
