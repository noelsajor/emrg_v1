import rss from '@astrojs/rss';
import { client } from '../lib/sanity.client';

export async function GET(context: any) {
    let posts = [];
    try {
        posts = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`);
    } catch (e) {
        console.warn("Sanity fetch failed for RSS", e);
    }

    return rss({
        title: 'EMRG — Insights',
        description: 'Performance ecommerce insights, engineering deep dives, and growth strategy for DTC founders.',
        site: context.site,
        items: posts.map((post: any) => ({
            title: post.title,
            pubDate: new Date(post.publishedAt),
            description: post.excerpt,
            link: `/blog/${post.slug.current}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
