import { a as createComponent, r as renderTemplate } from '../chunks/astro/server_zuS4A2dU.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import TrustStrip from '../components/TrustStrip.astro';
import Pillars from '../components/Pillars.astro';
import Work from '../components/Work.astro';
import BlogTeaser from '../components/BlogTeaser.astro';
import Process from '../components/Process.astro';
import Packages from '../components/Packages.astro';
import Testimonials from '../components/Testimonials.astro';
import Faq from '../components/Faq.astro';
import CtaSection from '../components/CtaSection.astro';
import Footer from '../components/Footer.astro'
<BaseLayout>
  <Nav />
  <main>
    <Hero />
    <TrustStrip />
    <Pillars />
    <Work />
    <BlogTeaser />
    <Process />
    <Packages />
    <Testimonials />
    <Faq />
    <CtaSection />
  </main>
  <Footer />
</BaseLayout>`;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/pages/index.astro", void 0);

const $$file = "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
