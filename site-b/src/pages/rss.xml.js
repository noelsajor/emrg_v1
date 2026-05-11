import rss from '@astrojs/rss';
import { getClient } from '@emrg/shared/sanity/client';
import { getPosts } from '@emrg/shared/sanity/queries';

export async function GET(context) {
    const client = getClient();
    const posts = await getPosts(client);
    return rss({
        title: 'EMRG — Ecommerce Performance Journal',
        description: 'Insights, strategies, and technical guides for scaling DTC commerce engines.',
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
