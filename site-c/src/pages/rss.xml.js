import rss from '@astrojs/rss';
import { client } from '../lib/sanity.client';
import { latestPostsQuery } from '../lib/sanity.queries';

export async function GET(context) {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        publishedAt
    }`);

    return rss({
        title: 'EMRG — Ecommerce Intelligence',
        description: 'Insights and research from the EMRG studio.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.title || 'Untitled',
            pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
            description: post.excerpt || '',
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
