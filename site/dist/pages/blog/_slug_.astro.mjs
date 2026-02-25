import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, b as renderComponent, d as addAttribute } from '../../chunks/astro/server_zuS4A2dU.mjs';
import 'piccolore';
import { u as urlFor, $ as $$Nav, a as $$Footer, b as $$BaseLayout } from '../../chunks/image_YPGgJFXm.mjs';
import 'clsx';
import { toHTML } from '@portabletext/to-html';
/* empty css                                     */
import { g as getPost, a as getPosts } from '../../chunks/sanity_C4NpMy2V.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://emrg.studio");
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { value } = Astro2.props;
  const customComponents = {
    types: {
      image: ({ value: value2 }) => {
        return `<figure class="post-image">
        <img src="${urlFor(value2).width(1200).url()}" alt="${value2.alt || ""}" loading="lazy" />
        ${value2.caption ? `<figcaption>${value2.caption}</figcaption>` : ""}
      </figure>`;
      }
    },
    block: {
      h2: ({ children }) => `<h2 class="post-h2">${children}</h2>`,
      h3: ({ children }) => `<h3 class="post-h3">${children}</h3>`,
      normal: ({ children }) => `<p class="post-p">${children}</p>`,
      blockquote: ({ children }) => `<blockquote class="post-quote">${children}</blockquote>`
    },
    list: {
      bullet: ({ children }) => `<ul class="post-ul">${children}</ul>`,
      number: ({ children }) => `<ol class="post-ol">${children}</ol>`
    }
  };
  const html = toHTML(value, { components: customComponents });
  return renderTemplate`${maybeRenderHead()}<div class="portable-text">${unescapeHTML(html)}</div> `;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/components/PortableText.astro", void 0);

function buildBlogPostingJsonLd(post) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.mainImage?.asset?.url,
    "author": {
      "@type": "Person",
      "name": post.author?.name
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt
  });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://emrg.studio");
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPost(slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const seo = {
    title: `${post.title} | EMRG Studio`,
    description: post.excerpt,
    image: post.mainImage ? urlFor(post.mainImage).width(1200).url() : void 0
  };
  const jsonLd = buildBlogPostingJsonLd(post);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seo, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-4sn4zg3r": true })} ${maybeRenderHead()}<main data-astro-cid-4sn4zg3r> <article class="post-article" data-astro-cid-4sn4zg3r> <header class="post-header" data-astro-cid-4sn4zg3r> <div class="container container-sm" data-astro-cid-4sn4zg3r> <div class="post-meta" data-astro-cid-4sn4zg3r> ${post.categories?.[0] && renderTemplate`<span class="post-category" data-astro-cid-4sn4zg3r>${post.categories[0].title}</span>`} <time${addAttribute(post.publishedAt, "datetime")} data-astro-cid-4sn4zg3r>${formattedDate}</time> </div> <h1 class="post-title" data-astro-cid-4sn4zg3r>${post.title}</h1> ${post.excerpt && renderTemplate`<p class="post-excerpt" data-astro-cid-4sn4zg3r>${post.excerpt}</p>`} ${post.author && renderTemplate`<div class="post-author" data-astro-cid-4sn4zg3r> ${post.author.image && renderTemplate`<img${addAttribute(urlFor(post.author.image).width(48).height(48).url(), "src")}${addAttribute(post.author.name, "alt")} class="author-avatar" data-astro-cid-4sn4zg3r>`} <div class="author-info" data-astro-cid-4sn4zg3r> <span class="author-name" data-astro-cid-4sn4zg3r>${post.author.name}</span> <span class="author-label" data-astro-cid-4sn4zg3r>Author</span> </div> </div>`} </div> </header> ${post.mainImage && renderTemplate`<div class="container" data-astro-cid-4sn4zg3r> <div class="post-main-image" data-astro-cid-4sn4zg3r> <img${addAttribute(urlFor(post.mainImage).width(1200).url(), "src")}${addAttribute(post.title, "alt")} data-astro-cid-4sn4zg3r> </div> </div>`} <div class="container container-sm" data-astro-cid-4sn4zg3r> <div class="post-content" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": post.body, "data-astro-cid-4sn4zg3r": true })} </div> <footer class="post-footer" data-astro-cid-4sn4zg3r> <a href="/blog" class="back-link" data-astro-cid-4sn4zg3r> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-4sn4zg3r><path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4sn4zg3r></path></svg>
Back to Articles
</a> </footer> </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} `, "head": async ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(jsonLd)) })} `;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
