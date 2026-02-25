import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_zuS4A2dU.mjs';
import 'piccolore';
import { u as urlFor, b as $$BaseLayout, $ as $$Nav, a as $$Footer } from '../chunks/image_YPGgJFXm.mjs';
import 'clsx';
/* empty css                                 */
import { a as getPosts } from '../chunks/sanity_C4NpMy2V.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://emrg.studio");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post } = Astro2.props;
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class="blog-card reveal" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="blog-card-link" data-astro-cid-e3grugc2> ${post.mainImage && renderTemplate`<div class="blog-card-image" data-astro-cid-e3grugc2> <img${addAttribute(urlFor(post.mainImage).width(600).height(400).url(), "src")}${addAttribute(post.title, "alt")} loading="lazy" data-astro-cid-e3grugc2> </div>`} <div class="blog-card-content" data-astro-cid-e3grugc2> <div class="blog-card-meta" data-astro-cid-e3grugc2> ${post.categories?.[0] && renderTemplate`<span class="blog-card-category" data-astro-cid-e3grugc2>${post.categories[0].title}</span>`} <span class="blog-card-date" data-astro-cid-e3grugc2>${formattedDate}</span> </div> <h3 class="blog-card-title" data-astro-cid-e3grugc2>${post.title}</h3> ${post.excerpt && renderTemplate`<p class="blog-card-excerpt" data-astro-cid-e3grugc2>${post.excerpt}</p>`} <div class="blog-card-footer" data-astro-cid-e3grugc2> <span class="read-more" data-astro-cid-e3grugc2>
Read Article
<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-e3grugc2><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-e3grugc2></path></svg> </span> </div> </div> </a> </article> `;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/components/BlogCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPosts();
  const seo = {
    title: "Insights | EMRG Studio Performance Journal",
    description: "Senior-level ecommerce insights, growth strategies, and performance engineering for DTC brands."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seo, "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main data-astro-cid-5tznm7mj> <section class="blog-hero" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="section-label" data-astro-cid-5tznm7mj>Journal</div> <h1 class="section-title" data-astro-cid-5tznm7mj>The Performance Journal</h1> <p class="section-sub" data-astro-cid-5tznm7mj>Senior-level ecommerce insights, growth strategies, and performance engineering for DTC brands.</p> </div> </section> <section class="blog-list" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="blog-grid" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post, "data-astro-cid-5tznm7mj": true })}`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/pages/blog/index.astro", void 0);

const $$file = "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
