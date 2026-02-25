import { c as createAstro, a as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, d as addAttribute, m as maybeRenderHead } from './astro/server_zuS4A2dU.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { createImageUrlBuilder } from '@sanity/image-url';
import { c as client } from './sanity_C4NpMy2V.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://emrg.studio");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "EMRG | Founder-led Ecommerce Performance Studio",
    description = "EMRG is a founder-led ecommerce performance studio. We design the brand, build the store, and engineer the growth system for DTC product brands.",
    image = "/og-image.jpg",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site)
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description" id="meta-description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description" id="og-description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet">', "", "</head> <body> ", ` <!-- Verbatim original JS from emrg-website-v1.html --> <script>
    (function() {
      'use strict';

      /* ---- STICKY NAV ---- */
      var nav = document.getElementById('nav');
      var navLinks = document.querySelectorAll('.nav-links a');
      var sections = document.querySelectorAll('section[id]');

      function onScroll() {
        if (!nav) return;
        if (window.scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }

        var current = '';
        sections.forEach(function(section) {
          if (window.scrollY >= section.offsetTop - 140) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      /* ---- MOBILE MENU ---- */
      var hamburger = document.getElementById('hamburger');
      var mobileMenu = document.getElementById('mobile-menu');
      var mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMenu(open) {
        if (!hamburger || !mobileMenu) return;
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        mobileMenu.classList.toggle('open', open);
        mobileMenu.setAttribute('aria-hidden', !open);
        document.body.style.overflow = open ? 'hidden' : '';
      }

      if (hamburger) {
        hamburger.addEventListener('click', function() {
          var isOpen = hamburger.classList.contains('open');
          toggleMenu(!isOpen);
        });
      }

      mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() { toggleMenu(false); });
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
          toggleMenu(false);
          hamburger.focus();
        }
      });

      /* ---- FAQ ACCORDION ---- */
      var faqBtns = document.querySelectorAll('.faq-btn');

      faqBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          var targetId = btn.getAttribute('aria-controls');
          var answer = document.getElementById(targetId);

          faqBtns.forEach(function(b) {
            b.setAttribute('aria-expanded', 'false');
            var id = b.getAttribute('aria-controls');
            var ans = document.getElementById(id);
            if (ans) ans.classList.remove('open');
          });

          if (!expanded) {
            btn.setAttribute('aria-expanded', 'true');
            if (answer) answer.classList.add('open');
          }
        });

        btn.addEventListener('keydown', function(e) {
          var items = Array.from(faqBtns);
          var idx = items.indexOf(btn);
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            var next = items[idx + 1] || items[0];
            next.focus();
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            var prev = items[idx - 1] || items[items.length - 1];
            prev.focus();
          }
          if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
          if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus(); }
        });
      });

      /* ---- PLATFORM TOGGLE ---- */
      var btnShopify = document.getElementById('btn-shopify');
      var btnWoo = document.getElementById('btn-woo');

      var platformData = {
        shopify: {
          pkg1: { timeline: '5\u20137 day Shopify launch', list: ['Custom Shopify theme build', 'Up to 5 pages (Home, PDP, Collection, About, Contact)', 'Pixel setup (Meta, GA4)', 'SEO foundation', 'Performance optimization', 'Welcome email flow', '2 rounds of revisions'] },
          pkg2: { timeline: 'Full build on Shopify in 10\u201314 days', list: ['Everything in Launch Sprint', 'Brand identity &amp; packaging design', 'Full pixel suite (Meta, GA4, TikTok)', 'Post-purchase email + SMS flows', 'Abandoned cart &amp; browse flows', 'CRO audit &amp; UX sprint', 'Loyalty &amp; referral setup', '30-day post-launch support'] }
        },
        woo: {
          pkg1: { timeline: '7\u201310 day WooCommerce launch', list: ['Custom WooCommerce build', 'Up to 5 pages (Home, PDP, Shop, About, Contact)', 'Pixel setup (Meta, GA4)', 'WooCommerce performance tuning', 'SEO foundation', 'Welcome email flow', '2 rounds of revisions'] },
          pkg2: { timeline: 'Full WooCommerce build in 12\u201316 days', list: ['Everything in Launch Sprint', 'Brand identity &amp; packaging design', 'Full pixel suite (Meta, GA4, TikTok)', 'Post-purchase email + SMS flows', 'Abandoned cart &amp; browse flows', 'Plugin optimization &amp; CRO sprint', 'Loyalty &amp; referral setup', '30-day post-launch support'] }
        }
      };

      var platformDataES = {
        shopify: {
          pkg1: { timeline: 'Lanzamiento en Shopify en 5\u20137 d\xEDas', list: ['Tema Shopify personalizado', 'Hasta 5 p\xE1ginas (Inicio, PDP, Colecci\xF3n, Nosotros, Contacto)', 'Configuraci\xF3n de p\xEDxeles (Meta, GA4)', 'Base de SEO', 'Optimizaci\xF3n de rendimiento', 'Flujo de email de bienvenida', '2 rondas de revisiones'] },
          pkg2: { timeline: 'Build completo en Shopify en 10\u201314 d\xEDas', list: ['Todo en Launch Sprint', 'Identidad de marca y dise\xF1o de packaging', 'Suite completa de p\xEDxeles (Meta, GA4, TikTok)', 'Flujos de email + SMS post-compra', 'Flujos de carrito abandonado', 'Auditor\xEDa CRO y sprint UX', 'Programa de lealtad y referidos', 'Soporte 30 d\xEDas post-lanzamiento'] }
        },
        woo: {
          pkg1: { timeline: 'Lanzamiento en WooCommerce en 7\u201310 d\xEDas', list: ['Build personalizado en WooCommerce', 'Hasta 5 p\xE1ginas (Inicio, PDP, Tienda, Nosotros, Contacto)', 'Configuraci\xF3n de p\xEDxeles (Meta, GA4)', 'Optimizaci\xF3n de rendimiento WooCommerce', 'Base de SEO', 'Flujo de email de bienvenida', '2 rondas de revisiones'] },
          pkg2: { timeline: 'Build completo en WooCommerce en 12\u201316 d\xEDas', list: ['Todo en Launch Sprint', 'Identidad de marca y dise\xF1o de packaging', 'Suite completa de p\xEDxeles (Meta, GA4, TikTok)', 'Flujos de email + SMS post-compra', 'Flujos de carrito abandonado', 'Optimizaci\xF3n de plugins y sprint CRO', 'Programa de lealtad y referidos', 'Soporte 30 d\xEDas post-lanzamiento'] }
        }
      };

      var currentPlatform = 'shopify';
      var svgCheck = '<span class="check" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

      function applyPlatform(platform) {
        currentPlatform = platform;
        var lang = document.documentElement.lang || 'en';
        var data = (lang === 'es') ? platformDataES[platform] : platformData[platform];

        var pkg1Timeline = document.getElementById('pkg-1-timeline');
        if (pkg1Timeline) pkg1Timeline.textContent = data.pkg1.timeline;
        var list1 = document.getElementById('pkg-1-list');
        if (list1) {
          list1.innerHTML = data.pkg1.list.map(function(item) {
            return '<li>' + svgCheck + item + '</li>';
          }).join('');
        }

        var pkg2Timeline = document.getElementById('pkg-2-timeline');
        if (pkg2Timeline) pkg2Timeline.textContent = data.pkg2.timeline;
        var list2 = document.getElementById('pkg-2-list');
        if (list2) {
          list2.innerHTML = data.pkg2.list.map(function(item) {
            return '<li>' + svgCheck + item + '</li>';
          }).join('');
        }
      }

      if (btnShopify) {
        btnShopify.addEventListener('click', function() {
          btnShopify.classList.add('active');
          btnShopify.setAttribute('aria-pressed', 'true');
          if (btnWoo) {
            btnWoo.classList.remove('active');
            btnWoo.setAttribute('aria-pressed', 'false');
          }
          applyPlatform('shopify');
        });
      }

      if (btnWoo) {
        btnWoo.addEventListener('click', function() {
          btnWoo.classList.add('active');
          btnWoo.setAttribute('aria-pressed', 'true');
          if (btnShopify) {
            btnShopify.classList.remove('active');
            btnShopify.setAttribute('aria-pressed', 'false');
          }
          applyPlatform('woo');
        });
      }

      /* ---- SCROLL REVEAL ---- */
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!reducedMotion) {
        var revealEls = document.querySelectorAll('.reveal');

        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(function(el) { observer.observe(el); });
      } else {
        document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
      }

      /* ---- SMOOTH SCROLL for anchor links ---- */
      document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
          var targetSelector = this.getAttribute('href');
          if (targetSelector === '#') return;
          var target = document.querySelector(targetSelector);
          if (target) {
            e.preventDefault();
            var top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: top, behavior: reducedMotion ? 'auto' : 'smooth' });
          }
        });
      });

      /* ============================================================
         I18N \u2014 TRANSLATION DICTIONARY + ENGINE
      ============================================================ */
      var I18N = {
        en: {
          'meta.description': 'EMRG is a founder-led ecommerce performance studio. We design the brand, build the store, and engineer the growth system for DTC product brands.',
          'og.description': 'We design the brand. We build the store. We engineer the growth system.',
          'nav.services': 'Services',
          'nav.work': 'Work',
          'nav.process': 'Process',
          'nav.packages': 'Packages',
          'nav.faq': 'FAQ',
          'nav.contact': 'Contact',
          'nav.cta': 'Book a Call',
          'hero.badge': 'Accepting Projects',
          'hero.h1.line1': 'We design the brand.',
          'hero.h1.line2': 'We build the store.',
          'hero.h1.line3.accent': 'engineer',
          'hero.h1.line3.rest': 'the',
          'hero.h1.line4': 'growth system.',
          'hero.sub': 'End-to-end ecommerce execution \u2014 from brand identity and packaging to store build, conversion engineering, and post-launch growth infrastructure. Built for DTC brands that mean business.',
          'hero.cta.primary': 'Book a 15-min Call',
          'hero.cta.secondary': 'View Work',
          'hero.chip1': '7-Day Launch',
          'hero.chip2': 'CRO-First Execution',
          'hero.chip3': 'Built for Scale',
          'trust.stat1': 'Ecommerce Builds',
          'trust.stat2': 'Day Avg. Launch',
          'trust.stat3': 'Avg. CVR Improvement',
          'trust.stat4': 'Conversion-Focused by Default',
          'trust.disclaimer': 'Results vary by business, product, and market conditions.',
          'pillars.label': 'What We Do',
          'pillars.title': 'Three pillars.<br>One cohesive system.',
          'pillars.sub': 'Every engagement covers what actually moves the needle \u2014 nothing else.',
          'pillars.p1.title': 'Brand &amp; Packaging',
          'pillars.p1.desc': 'Identity that earns attention before a single word is read.',
          'pillars.p1.item1': 'Brand identity systems',
          'pillars.p1.item2': 'Packaging design',
          'pillars.p1.item3': 'Product storytelling',
          'pillars.p1.item4': 'Visual systems &amp; guidelines',
          'pillars.p2.title': 'Ecommerce Engineering',
          'pillars.p2.desc': 'Stores built to convert \u2014 not just to exist.',
          'pillars.p2.item1': 'Shopify &amp; WooCommerce builds',
          'pillars.p2.item2': 'High-converting PDP systems',
          'pillars.p2.item3': 'Pixel &amp; analytics setup (Meta, GA4, TikTok)',
          'pillars.p2.item4': 'Performance &amp; SEO foundation',
          'pillars.p3.title': 'Growth Systems',
          'pillars.p3.desc': 'The infrastructure that compounds revenue over time.',
          'pillars.p3.item1': 'Email &amp; SMS flows',
          'pillars.p3.item2': 'Post-purchase optimization',
          'pillars.p3.item3': 'Loyalty &amp; referral systems',
          'pillars.p3.item4': 'Affiliate infrastructure',
          'pillars.p3.item5': 'CRO sprints',
          'pillars.cta': 'Start a Project',
          'work.label': 'Featured Work',
          'work.title': 'Outcomes, not outputs.',
          'work.viewAll': 'View All Work',
          'work.c1.industry': 'Skincare DTC',
          'work.c1.tag': 'Shopify Build \xB7 Brand Identity',
          'work.c1.problem': 'Entering a saturated skincare market with no digital presence. Needed a brand and store capable of converting cold traffic from day one.',
          'work.c2.industry': 'Nutrition DTC',
          'work.c2.tag': 'WooCommerce Rebuild \xB7 Growth Systems',
          'work.c2.problem': 'Existing WooCommerce store suffering from slow load times, poor mobile UX, and no post-purchase retention system in place.',
          'work.c3.industry': 'Apparel DTC',
          'work.c3.tag': 'Shopify Build \xB7 Brand \xB7 CRO',
          'work.c3.problem': 'Direct-to-consumer apparel brand pivoting from wholesale. Needed a flagship DTC store and full brand system built for conversion.',
          'work.metric.cvr': 'CVR vs industry avg',
          'work.metric.days': 'Days',
          'work.metric.launch': 'Launch timeline',
          'work.metric.aov': 'AOV lift',
          'work.metric.loadtime': 'Page load time',
          'work.metric.repeat': 'Repeat purchase rate',
          'work.metric.cvrImprov': 'CVR improvement',
          'work.metric.fullLaunch': 'Full launch',
          'work.metric.roas': 'ROAS month 1',
          'work.readCase': 'Read Case Study',
          'process.label': 'How We Work',
          'process.title': 'From zero to live \u2014 in days, not months.',
          'process.sub': 'A focused four-step process built around speed, quality, and results.',
          'process.s1.title': 'Audit &amp; Strategy',
          'process.s1.desc': 'We assess your brand, market, competitors, and conversion opportunities. Clear direction before a single pixel is designed.',
          'process.s2.title': 'Brand &amp; UX Direction',
          'process.s2.desc': 'Identity, visual language, and store architecture defined. Every decision is made with conversion logic at its core.',
          'process.s3.title': 'Build &amp; Integration',
          'process.s3.desc': 'Store built, pixels fired, flows configured, SEO foundation laid. Everything tested before it touches a customer.',
          'process.s4.title': 'Launch &amp; Optimize',
          'process.s4.desc': 'Go live with confidence. We monitor, iterate, and optimize based on real data \u2014 not assumptions.',
          'packages.label': 'Packages',
          'packages.title': 'Productized. Predictable. Proven.',
          'packages.sub': "Scoped packages so you know exactly what you're getting \u2014 and what it costs.",
          'packages.pkg1.name': 'Launch Sprint',
          'packages.pkg1.for': "For brands launching their first DTC store. Everything you need, nothing you don't.",
          'packages.pkg2.name': 'Growth Sprint',
          'packages.pkg2.for': 'For brands ready to turn their store into a revenue machine. Full stack execution.',
          'packages.pkg3.name': 'Ongoing Growth Partner',
          'packages.pkg3.for': 'For brands post-launch that want senior-level execution on a consistent basis.',
          'packages.pkg3.timeline': 'Ongoing \u2014 minimum 3 months',
          'packages.pkg3.item1': 'Monthly CRO sprints',
          'packages.pkg3.item2': 'Email &amp; SMS optimization',
          'packages.pkg3.item3': 'Growth reporting &amp; analytics',
          'packages.pkg3.item4': 'Store updates &amp; new landing pages',
          'packages.pkg3.item5': 'Affiliate &amp; referral management',
          'packages.pkg3.item6': 'Priority response &amp; support',
          'packages.pkg3.item7': 'Quarterly strategy reviews',
          'packages.cta': 'Book a Call',
          'packages.popular': 'Most Popular',
          'testi.label': 'What Founders Say',
          'testi.title': 'Trusted by builders.',
          'testi.t1.quote': 'We went from idea to live Shopify store in 6 days. The build quality and attention to conversion detail was unlike anything I had seen from other agencies. Our first week of traffic converted at nearly 4%.',
          'testi.t1.role': 'Founder, Solera Skincare',
          'testi.t2.quote': 'They rebuilt our entire WooCommerce store and set up our email flows in under two weeks. Page speed improved dramatically. Our repeat purchase rate climbed month over month from day one.',
          'testi.t2.role': 'Head of Marketing, Varka Nutrition',
          'testi.t3.quote': "EMRG doesn't feel like an agency. They work like a senior partner who actually cares about what happens after launch. The growth system they set up is still paying dividends six months later.",
          'testi.t3.role': 'Founder, Dune Apparel',
          'testi.t4.quote': 'We came with just a product and a rough brand concept. EMRG took it from there \u2014 packaging, identity, store, tracking, flows. Six days later we were live and profitable by week three.',
          'testi.t4.role': 'Founder, Lumos Wellness',
          'faq.label': 'FAQ',
          'faq.title': 'Good questions deserve straight answers.',
          'faq.sub': 'Still have something else? <a href="mailto:hello@emrg.studio" style="color:var(--accent-light);">Email us directly.</a>',
          'faq.q1': 'Can you really launch in 7 days?',
          'faq.a1': 'Yes. Our Launch Sprint is scoped specifically for a 5\u20137 day delivery cycle. This is possible because we have a proven process, defined scope, and we need your brand assets and product info ready at kickoff. Larger or more complex builds take longer \u2014 we will always be transparent about timelines upfront.',
          'faq.q2': 'What do you need from us to get started?',
          'faq.a2': 'For a store build: product information, existing brand assets (if any), copy, and Shopify/WooCommerce access. For brand work: a clear brief on your product, audience, and market positioning. We guide you through exactly what we need in our onboarding process.',
          'faq.q3': 'Do you handle packaging design?',
          'faq.a3': "Yes. Brand identity and packaging design are part of our Growth Sprint package and available as standalone engagements. We design for production-readiness \u2014 files delivered print-ready and spec'd for your manufacturer.",
          'faq.q4': 'Do you support existing stores?',
          'faq.a4': "Absolutely. We work with established brands on CRO sprints, store rebuilds, flow optimization, and growth system setup. If you have an existing store that isn't performing, we will audit it and identify exactly where revenue is being left on the table.",
          'faq.q5': 'What about SEO?',
          'faq.a5': 'Every store we build includes SEO foundation \u2014 structured data, clean URL architecture, optimized meta tags, image alt text, sitemap, and page speed optimization. Ongoing SEO content strategy is available as part of our Growth Partner retainer.',
          'faq.q6': 'What happens after launch?',
          'faq.a6': "Growth Sprint includes 30 days of post-launch support. After that, we offer ongoing Growth Partner retainers for brands that want continued optimization, testing, and execution. We don't disappear after handoff.",
          'faq.q7': 'Do you manage paid ads?',
          'faq.a7': "We handle the infrastructure that makes ads perform \u2014 pixel setup, tracking, landing pages, PDP optimization, and post-click experience. We don't run ad campaigns directly, but we ensure your store is built to convert the traffic your ads send.",
          'faq.q8': 'How do revisions work?',
          'faq.a8': 'All packages include defined revision rounds (2 for Launch Sprint, 3 for Growth Sprint). Revisions are consolidated feedback sessions \u2014 we review everything together, make changes, and move forward. Additional rounds can be added if needed.',
          'cta.label': "Let's Build",
          'cta.title': 'Ready to build something that converts?',
          'cta.sub': "Tell us where you are. We'll show you where to go.",
          'cta.email': 'Email Us',
          'cta.note': 'We reply within 24\u201348 hours.',
          'footer.tagline': 'Founder-led ecommerce performance studio. We design the brand, build the store, and engineer the growth system.',
          'footer.col.services': 'Services',
          'footer.col.company': 'Company',
          'footer.col.follow': 'Follow',
          'footer.link.ecommerce': 'Ecommerce Builds',
          'footer.link.growth': 'Growth Systems',
          'footer.link.cro': 'CRO &amp; Optimization',
          'footer.copy': '\xA9 2025 EMRG. All rights reserved.',
          'footer.privacy': 'Privacy Policy',
          'footer.terms': 'Terms of Service'
        },
        es: {
          'meta.description': 'EMRG es un estudio de rendimiento ecommerce liderado por fundadores. Dise\xF1amos la marca, construimos la tienda e ingeniamos el sistema de crecimiento para marcas DTC.',
          'og.description': 'Dise\xF1amos la marca. Construimos la tienda. Ingeniamos el sistema de crecimiento.',
          'nav.services': 'Servicios',
          'nav.work': 'Trabajo',
          'nav.process': 'Proceso',
          'nav.packages': 'Paquetes',
          'nav.faq': 'FAQ',
          'nav.contact': 'Contacto',
          'nav.cta': 'Reservar Llamada',
          'hero.badge': 'Aceptando Proyectos',
          'hero.h1.line1': 'Dise\xF1amos la marca.',
          'hero.h1.line2': 'Construimos la tienda.',
          'hero.h1.line3.accent': 'ingeniamos',
          'hero.h1.line3.rest': 'el',
          'hero.h1.line4': 'sistema de crecimiento.',
          'hero.sub': 'Ejecuci\xF3n ecommerce de extremo a extremo \u2014 desde identidad de marca y packaging hasta construcci\xF3n de tienda, ingenier\xEDa de conversi\xF3n e infraestructura de crecimiento post-lanzamiento. Para marcas DTC que van en serio.',
          'hero.cta.primary': 'Reservar 15 min',
          'hero.cta.secondary': 'Ver Trabajo',
          'hero.chip1': 'Lanzamiento en 7 D\xEDas',
          'hero.chip2': 'Ejecuci\xF3n CRO-First',
          'hero.chip3': 'Construido para Escalar',
          'trust.stat1': 'Tiendas Ecommerce',
          'trust.stat2': 'D\xEDas Promedio de Lanzamiento',
          'trust.stat3': 'Mejora Promedio de CVR',
          'trust.stat4': 'Enfocado en Conversi\xF3n por Defecto',
          'trust.disclaimer': 'Los resultados var\xEDan seg\xFAn el negocio, producto y condiciones del mercado.',
          'pillars.label': 'Lo Que Hacemos',
          'pillars.title': 'Tres pilares.<br>Un sistema cohesivo.',
          'pillars.sub': 'Cada proyecto cubre lo que realmente mueve la aguja \u2014 nada m\xE1s.',
          'pillars.p1.title': 'Marca y Packaging',
          'pillars.p1.desc': 'Identidad que gana atenci\xF3n antes de leer una sola palabra.',
          'pillars.p1.item1': 'Sistemas de identidad de marca',
          'pillars.p1.item2': 'Dise\xF1o de packaging',
          'pillars.p1.item3': 'Narrativa de producto',
          'pillars.p1.item4': 'Sistemas visuales y lineamientos',
          'pillars.p2.title': 'Ingenier\xEDa Ecommerce',
          'pillars.p2.desc': 'Tiendas construidas para convertir, no solo para existir.',
          'pillars.p2.item1': 'Builds en Shopify y WooCommerce',
          'pillars.p2.item2': 'Sistemas PDP de alta conversi\xF3n',
          'pillars.p2.item3': 'Configuraci\xF3n de p\xEDxeles y anal\xEDtica (Meta, GA4, TikTok)',
          'pillars.p2.item4': 'Rendimiento y base de SEO',
          'pillars.p3.title': 'Sistemas de Crecimiento',
          'pillars.p3.desc': 'La infraestructura que hace crecer los ingresos con el tiempo.',
          'pillars.p3.item1': 'Flujos de Email y SMS',
          'pillars.p3.item2': 'Optimizaci\xF3n post-compra',
          'pillars.p3.item3': 'Programas de lealtad y referidos',
          'pillars.p3.item4': 'Infraestructura de afiliados',
          'pillars.p3.item5': 'Sprints CRO',
          'pillars.cta': 'Iniciar Proyecto',
          'work.label': 'Trabajo Destacado',
          'work.title': 'Resultados, no entregables.',
          'work.viewAll': 'Ver Todo el Trabajo',
          'work.c1.industry': 'Skincare DTC',
          'work.c1.tag': 'Build Shopify \xB7 Identidad de Marca',
          'work.c1.problem': 'Entrando a un mercado de skincare saturado sin presencia digital. Necesitaban una marca y tienda capaz de convertir tr\xE1fico fr\xEDo desde el primer d\xEDa.',
          'work.c2.industry': 'Nutrici\xF3n DTC',
          'work.c2.tag': 'Rebuild WooCommerce \xB7 Sistemas de Crecimiento',
          'work.c2.problem': 'Tienda WooCommerce existente con tiempos de carga lentos, UX m\xF3vil deficiente y sin sistema de retenci\xF3n post-compra.',
          'work.c3.industry': 'Ropa DTC',
          'work.c3.tag': 'Build Shopify \xB7 Marca \xB7 CRO',
          'work.c3.problem': 'Marca de ropa pivotando de mayorista a DTC. Necesitaban una tienda insignia y sistema de marca completo construido para conversi\xF3n.',
          'work.metric.cvr': 'CVR vs promedio del sector',
          'work.metric.days': 'D\xEDas',
          'work.metric.launch': 'Tiempo de lanzamiento',
          'work.metric.aov': 'Aumento de AOV',
          'work.metric.loadtime': 'Tiempo de carga',
          'work.metric.repeat': 'Tasa de recompra',
          'work.metric.cvrImprov': 'Mejora de CVR',
          'work.metric.fullLaunch': 'Lanzamiento completo',
          'work.metric.roas': 'ROAS mes 1',
          'work.readCase': 'Leer Caso de \xC9xito',
          'process.label': 'C\xF3mo Trabajamos',
          'process.title': 'De cero a vivo \u2014 en d\xEDas, no meses.',
          'process.sub': 'Un proceso enfocado de cuatro pasos basado en velocidad, calidad y resultados.',
          'process.s1.title': 'Auditor\xEDa y Estrategia',
          'process.s1.desc': 'Evaluamos tu marca, mercado, competidores y oportunidades de conversi\xF3n. Direcci\xF3n clara antes de dise\xF1ar un solo p\xEDxel.',
          'process.s2.title': 'Direcci\xF3n de Marca y UX',
          'process.s2.desc': 'Identidad, lenguaje visual y arquitectura de tienda definidos. Cada decisi\xF3n se toma con l\xF3gica de conversi\xF3n en el centro.',
          'process.s3.title': 'Build e Integraci\xF3n',
          'process.s3.desc': 'Tienda construida, p\xEDxeles activados, flujos configurados, base SEO establecida. Todo probado antes de llegar a un cliente.',
          'process.s4.title': 'Lanzamiento y Optimizaci\xF3n',
          'process.s4.desc': 'Salir al mercado con confianza. Monitoreamos, iteramos y optimizamos bas\xE1ndonos en datos reales, no suposiciones.',
          'packages.label': 'Paquetes',
          'packages.title': 'Definidos. Predecibles. Probados.',
          'packages.sub': 'Paquetes delimitados para que sepas exactamente lo que obtienes y cu\xE1nto cuesta.',
          'packages.pkg1.name': 'Launch Sprint',
          'packages.pkg1.for': 'Para marcas que lanzan su primera tienda DTC. Todo lo que necesitas, nada de lo que no.',
          'packages.pkg2.name': 'Growth Sprint',
          'packages.pkg2.for': 'Para marcas listas para convertir su tienda en una m\xE1quina de ingresos. Ejecuci\xF3n completa.',
          'packages.pkg3.name': 'Growth Partner Continuo',
          'packages.pkg3.for': 'Para marcas post-lanzamiento que quieren ejecuci\xF3n de nivel senior de forma consistente.',
          'packages.pkg3.timeline': 'Continuo \u2014 m\xEDnimo 3 meses',
          'packages.pkg3.item1': 'Sprints CRO mensuales',
          'packages.pkg3.item2': 'Optimizaci\xF3n de Email y SMS',
          'packages.pkg3.item3': 'Reportes de crecimiento y anal\xEDtica',
          'packages.pkg3.item4': 'Actualizaciones de tienda y nuevas landing pages',
          'packages.pkg3.item5': 'Gesti\xF3n de afiliados y referidos',
          'packages.pkg3.item6': 'Respuesta prioritaria y soporte',
          'packages.pkg3.item7': 'Revisiones estrat\xE9gicas trimestrales',
          'packages.cta': 'Reservar Llamada',
          'packages.popular': 'M\xE1s Popular',
          'testi.label': 'Lo Que Dicen los Fundadores',
          'testi.title': 'La confianza de quienes construyen.',
          'testi.t1.quote': 'Pasamos de idea a tienda Shopify en vivo en 6 d\xEDas. La calidad del build y la atenci\xF3n al detalle de conversi\xF3n fue diferente a todo lo que hab\xEDa visto en otras agencias. Nuestra primera semana de tr\xE1fico convirti\xF3 casi al 4%.',
          'testi.t1.role': 'Fundadora, Solera Skincare',
          'testi.t2.quote': 'Reconstruyeron toda nuestra tienda WooCommerce y configuraron nuestros flujos de email en menos de dos semanas. La velocidad mejor\xF3 notablemente. Nuestra tasa de recompra creci\xF3 mes a mes desde el primer d\xEDa.',
          'testi.t2.role': 'Directora de Marketing, Varka Nutrition',
          'testi.t3.quote': 'EMRG no parece una agencia. Trabajan como un socio senior que realmente se preocupa por lo que pasa despu\xE9s del lanzamiento. El sistema de crecimiento que instalaron sigue generando resultados seis meses despu\xE9s.',
          'testi.t3.role': 'Fundador, Dune Apparel',
          'testi.t4.quote': 'Llegamos solo con un producto y un concepto de marca b\xE1sico. EMRG se encarg\xF3 del resto: packaging, identidad, tienda, tracking, flujos. Seis d\xEDas despu\xE9s est\xE1bamos en vivo y siendo rentables en la semana tres.',
          'testi.t4.role': 'Fundadora, Lumos Wellness',
          'faq.label': 'FAQ',
          'faq.title': 'Las buenas preguntas merecen respuestas directas.',
          'faq.sub': '\xBFTienes algo m\xE1s? <a href="mailto:hello@emrg.studio" style="color:var(--accent-light);">Escr\xEDbenos directamente.</a>',
          'faq.q1': '\xBFRealmente pueden lanzar en 7 d\xEDas?',
          'faq.a1': 'S\xED. Nuestro Launch Sprint est\xE1 dise\xF1ado espec\xEDficamente para un ciclo de entrega de 5 a 7 d\xEDas. Esto es posible porque tenemos un proceso probado, alcance definido y necesitamos tus activos de marca e informaci\xF3n de producto listos al inicio. Builds m\xE1s grandes o complejos toman m\xE1s tiempo \u2014 siempre seremos transparentes con los plazos.',
          'faq.q2': '\xBFQu\xE9 necesitan de nosotros para comenzar?',
          'faq.a2': 'Para un build de tienda: informaci\xF3n del producto, activos de marca existentes (si los hay), copy y acceso a Shopify/WooCommerce. Para trabajo de marca: un brief claro de tu producto, audiencia y posicionamiento. Te guiamos por exactamente lo que necesitamos en nuestro proceso de onboarding.',
          'faq.q3': '\xBFSe encargan del dise\xF1o de packaging?',
          'faq.a3': 'S\xED. La identidad de marca y el dise\xF1o de packaging son parte de nuestro paquete Growth Sprint y est\xE1n disponibles como proyectos independientes. Dise\xF1amos con listo para producci\xF3n como objetivo \u2014 archivos entregados listos para imprenta y especificados para tu fabricante.',
          'faq.q4': '\xBFApoyan tiendas existentes?',
          'faq.a4': 'Absolutamente. Trabajamos con marcas establecidas en sprints CRO, reconstrucciones de tiendas, optimizaci\xF3n de flujos y configuraci\xF3n de sistemas de crecimiento. Si tienes una tienda que no est\xE1 rindiendo, la auditamos e identificamos exactamente d\xF3nde se est\xE1 perdiendo ingresos.',
          'faq.q5': '\xBFQu\xE9 hay del SEO?',
          'faq.a5': 'Cada tienda que construimos incluye una base de SEO: datos estructurados, arquitectura limpia de URLs, meta tags optimizados, texto alternativo de im\xE1genes, sitemap y optimizaci\xF3n de velocidad de p\xE1gina. La estrategia de contenido SEO continua est\xE1 disponible en nuestro retainer de Growth Partner.',
          'faq.q6': '\xBFQu\xE9 pasa despu\xE9s del lanzamiento?',
          'faq.a6': 'Growth Sprint incluye 30 d\xEDas de soporte post-lanzamiento. Despu\xE9s de eso, ofrecemos retainers de Growth Partner para marcas que quieran optimizaci\xF3n, pruebas y ejecuci\xF3n continuas. No desaparecemos despu\xE9s de la entrega.',
          'faq.q7': '\xBFGestionan anuncios pagados?',
          'faq.a7': 'Nos encargamos de la infraestructura que hace que los anuncios rindan: configuraci\xF3n de p\xEDxeles, tracking, landing pages, optimizaci\xF3n de PDP y experiencia post-clic. No gestionamos campa\xF1as directamente, pero nos aseguramos de que tu tienda est\xE9 construida para convertir el tr\xE1fico que generan tus anuncios.',
          'faq.q8': '\xBFC\xF3mo funcionan las revisiones?',
          'faq.a8': 'Todos los paquetes incluyen rondas de revisi\xF3n definidas (2 para Launch Sprint, 3 para Growth Sprint). Las revisiones son sesiones de feedback consolidadas: revisamos todo juntos, hacemos cambios y avanzamos. Se pueden a\xF1adir rondas adicionales si es necesario.',
          'cta.label': 'Construyamos',
          'cta.title': '\xBFListo para construir algo que convierte?',
          'cta.sub': 'Dinos d\xF3nde est\xE1s. Te mostraremos hacia d\xF3nde ir.',
          'cta.email': 'Escr\xEDbenos',
          'cta.note': 'Respondemos en 24\u201348 horas.',
          'footer.tagline': 'Estudio de rendimiento ecommerce liderado por fundadores. Dise\xF1amos la marca, construimos la tienda e ingeniamos el sistema de crecimiento.',
          'footer.col.services': 'Servicios',
          'footer.col.company': 'Empresa',
          'footer.col.follow': 'S\xEDguenos',
          'footer.link.ecommerce': 'Tiendas Ecommerce',
          'footer.link.growth': 'Sistemas de Crecimiento',
          'footer.link.cro': 'CRO y Optimizaci\xF3n',
          'footer.copy': '\xA9 2025 EMRG. Todos los derechos reservados.',
          'footer.privacy': 'Pol\xEDtica de Privacidad',
          'footer.terms': 'T\xE9rminos de Servicio'
        }
      };

      /* ---- APPLY TRANSLATIONS ---- */
      function applyLang(lang) {
        var dict = I18N[lang];
        if (!dict) return;

        /* html lang attribute */
        document.documentElement.lang = lang;

        /* meta description */
        var metaDesc = document.getElementById('meta-description');
        if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);
        var ogDesc = document.getElementById('og-description');
        if (ogDesc) ogDesc.setAttribute('content', dict['og.description']);

        /* data-i18n text nodes */
        var nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach(function(el) {
          var key = el.getAttribute('data-i18n');
          var val = dict[key];
          if (val === undefined) return;

          /* Use innerHTML only when value contains HTML tags */
          if (val.indexOf('<') !== -1) {
            el.innerHTML = val;
          } else {
            el.textContent = val;
          }
        });

        /* "Most Popular" badge via CSS content attr */
        var popularLabel = dict['packages.popular'] || 'Most Popular';
        var featuredCards = document.querySelectorAll('.pkg-card');
        featuredCards.forEach(function(card) {
          card.setAttribute('data-popular-label', popularLabel);
        });

        /* Sync platform toggle lists to current platform in new language */
        applyPlatform(currentPlatform);

        /* Update lang toggle button states */
        var btnEn = document.getElementById('lang-en');
        var btnEs = document.getElementById('lang-es');
        var btnEnMob = document.getElementById('lang-en-mobile');
        var btnEsMob = document.getElementById('lang-es-mobile');

        var isEs = lang === 'es';

        if (btnEn) { btnEn.classList.toggle('active', !isEs); btnEn.setAttribute('aria-pressed', String(!isEs)); }
        if (btnEs) { btnEs.classList.toggle('active', isEs); btnEs.setAttribute('aria-pressed', String(isEs)); }
        if (btnEnMob) { btnEnMob.classList.toggle('active', !isEs); btnEnMob.setAttribute('aria-pressed', String(!isEs)); }
        if (btnEsMob) { btnEsMob.classList.toggle('active', isEs); btnEsMob.setAttribute('aria-pressed', String(isEs)); }
      }

      /* ---- DETECT & PERSIST LANGUAGE ---- */
      function detectLang() {
        var stored = null;
        try { stored = localStorage.getItem('emrg_lang'); } catch(e) {}
        if (stored === 'en' || stored === 'es') return stored;
        var browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        return browser.startsWith('es') ? 'es' : 'en';
      }

      function switchLang(lang) {
        try { localStorage.setItem('emrg_lang', lang); } catch(e) {}
        applyLang(lang);
      }

      /* ---- WIRE UP TOGGLE BUTTONS ---- */
      var langEnBtn = document.getElementById('lang-en');
      var langEsBtn = document.getElementById('lang-es');
      var langEnMobBtn = document.getElementById('lang-en-mobile');
      var langEsMobBtn = document.getElementById('lang-es-mobile');

      if (langEnBtn) langEnBtn.addEventListener('click', function() { switchLang('en'); });
      if (langEsBtn) langEsBtn.addEventListener('click', function() { switchLang('es'); });
      if (langEnMobBtn) langEnMobBtn.addEventListener('click', function() { switchLang('en'); });
      if (langEsMobBtn) langEsMobBtn.addEventListener('click', function() { switchLang('es'); });

      /* ---- INIT LANGUAGE ON LOAD ---- */
      var initialLang = detectLang();
      applyLang(initialLang);

    })();
  <\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/layouts/BaseLayout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav id="nav" role="navigation" aria-label="Main navigation"> <div class="nav-inner"> <a href="/" class="nav-logo" aria-label="EMRG home">EM<span>R</span>G</a> <ul class="nav-links" role="list"> <li><a href="#pillars" data-i18n="nav.services">Services</a></li> <li><a href="#work" data-i18n="nav.work">Work</a></li> <li><a href="#process" data-i18n="nav.process">Process</a></li> <li><a href="#packages" data-i18n="nav.packages">Packages</a></li> <li><a href="#faq" data-i18n="nav.faq">FAQ</a></li> <li><a href="#cta" data-i18n="nav.contact">Contact</a></li> </ul> <div class="nav-right"> <div class="lang-toggle" role="group" aria-label="Select language"> <button class="lang-btn active" id="lang-en" aria-pressed="true" aria-label="Switch to English">EN</button> <button class="lang-btn" id="lang-es" aria-pressed="false" aria-label="Cambiar a Español">ES</button> </div> <a href="#cta" class="btn btn-primary btn-sm" data-i18n="nav.cta">Book a Call</a> <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu"> <span></span> <span></span> <span></span> </button> </div> </div> </nav> </header> <!-- Mobile Menu --> <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation" aria-hidden="true"> <a href="#pillars" class="mobile-link" data-i18n="nav.services">Services</a> <a href="#work" class="mobile-link" data-i18n="nav.work">Work</a> <a href="#process" class="mobile-link" data-i18n="nav.process">Process</a> <a href="#packages" class="mobile-link" data-i18n="nav.packages">Packages</a> <a href="#faq" class="mobile-link" data-i18n="nav.faq">FAQ</a> <a href="#cta" class="mobile-link" data-i18n="nav.contact">Contact</a> <a href="#cta" class="btn btn-primary" data-i18n="hero.cta.primary">Book a 15-min Call</a> <div class="lang-toggle" role="group" aria-label="Select language"> <button class="lang-btn active" id="lang-en-mobile" aria-pressed="true" aria-label="Switch to English">EN</button> <button class="lang-btn" id="lang-es-mobile" aria-pressed="false" aria-label="Cambiar a Español">ES</button> </div> </nav>`;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="container"> <div class="footer-grid"> <div class="footer-brand-col"> <a href="/" class="footer-logo">EM<span>R</span>G</a> <p class="footer-tagline" data-i18n="footer.tagline">Founder-led ecommerce performance studio. We design the brand, build the store, and engineer the growth system.</p> <div class="footer-social" role="list"> <a href="#" aria-label="X (Twitter)" role="listitem"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a> <a href="#" aria-label="LinkedIn" role="listitem"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a href="#" aria-label="Instagram" role="listitem"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a> </div> </div> <div class="footer-nav-col"> <h4 data-i18n="footer.col.services">Services</h4> <ul role="list"> <li><a href="#pillars" data-i18n="footer.link.ecommerce">Ecommerce Builds</a></li> <li><a href="#pillars" data-i18n="footer.link.growth">Growth Systems</a></li> <li><a href="#pillars" data-i18n="footer.link.cro">CRO &amp; Optimization</a></li> </ul> </div> <div class="footer-nav-col"> <h4 data-i18n="footer.col.company">Company</h4> <ul role="list"> <li><a href="#work" data-i18n="nav.work">Work</a></li> <li><a href="#process" data-i18n="nav.process">Process</a></li> <li><a href="#packages" data-i18n="nav.packages">Packages</a></li> </ul> </div> <div class="footer-nav-col"> <h4 data-i18n="footer.col.follow">Follow</h4> <ul role="list"> <li><a href="#">X / Twitter</a></li> <li><a href="#">LinkedIn</a></li> <li><a href="#">Instagram</a></li> </ul> </div> </div> <div class="footer-bottom"> <div class="footer-copy" data-i18n="footer.copy">© 2025 EMRG. All rights reserved.</div> <div class="footer-legal"> <a href="#" data-i18n="footer.privacy">Privacy Policy</a> <a href="#" data-i18n="footer.terms">Terms of Service</a> </div> </div> </div> </footer>`;
}, "/Users/noelsajor/Desktop/Work/vercel/emrg/emrg-v1/src/components/Footer.astro", void 0);

const builder = createImageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export { $$Nav as $, $$Footer as a, $$BaseLayout as b, urlFor as u };
