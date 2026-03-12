import rss from '@astrojs/rss';
import { getAllPosts } from '../../lib/sanity.queries';

export async function GET(context: any) {
    const posts = await getAllPosts();
    return rss({
        title: 'EMRG — Ecommerce Performance Journal',
        description: 'Insights, strategies, and technical guides for scaling DTC commerce engines.',
        site: context.site,
        items: posts.map((post: any) => ({
            title: post.title,
            pubDate: post.publishedAt,
            description: post.excerpt,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
