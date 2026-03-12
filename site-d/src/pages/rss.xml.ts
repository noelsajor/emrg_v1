import rss from '@astrojs/rss';
import { client } from '../lib/sanity.client';

export async function GET(context: any) {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        publishedAt
    }`);

    return rss({
        title: 'EMRG — Insights',
        description: 'Performance ecommerce insights, engineering deep dives, and growth strategy for DTC founders.',
        site: context.site,
        items: posts.map((post: any) => ({
            title: post.title || 'Untitled',
            pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
            description: post.excerpt || '',
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
