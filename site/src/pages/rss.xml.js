import rss from '@astrojs/rss';
import { getPosts } from '../lib/sanity';

export async function GET(context) {
    const posts = await getPosts();
    return rss({
        title: 'EMRG Studio | Insights',
        description: 'Senior-level ecommerce insights, growth strategies, and performance engineering for DTC brands.',
        site: context.site,
        items: posts.map((post) => ({
            title: post.title,
            pubDate: new Date(post.publishedAt),
            description: post.excerpt,
            link: `/blog/${post.slug.current}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
