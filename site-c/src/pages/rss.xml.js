import rss from '@astrojs/rss';
import { client } from '../lib/sanity.client';
import { latestPostsQuery } from '../lib/sanity.queries';

export async function GET(context) {
    // const posts = await client.fetch(latestPostsQuery);

    // Mock posts for demonstration
    const posts = [
        {
            title: "The Future of DTC Architecture",
            slug: "future-dtc-architecture",
            excerpt: "How headless systems are changing the conversion landscape for growing brands.",
            publishedAt: "2025-02-24",
        }
    ];

    return rss({
        title: 'EMRG — Ecommerce Intelligence',
        description: 'Insights and research from the EMRG studio.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.title,
            pubDate: new Date(post.publishedAt),
            description: post.excerpt,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
