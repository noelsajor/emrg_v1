import rss from '@astrojs/rss';
import { a as getPosts } from '../chunks/sanity_C4NpMy2V.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
