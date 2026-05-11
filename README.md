# EMRG — Monorepo

5 Astro sites + Sanity CMS studio, compartiendo una capa de datos y componentes común a través de pnpm workspaces.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5.x |
| Lenguaje | TypeScript |
| CMS | Sanity (v5 Studio + v6 Client) |
| Paquete compartido | `@emrg/shared` (workspace) |
| Paquetería | pnpm workspaces |
| CI/CD | GitHub Actions |
| Error tracking | Sentry (site-a) |
| Testing | Vitest (`@emrg/shared`) |
| 3D | Three.js (site-c, site-d) |
| Estilos | Tailwind CSS (site-a), CSS Custom Props (b–e) |

## Estructura

```
emrg-v1/
├── .github/workflows/ci.yml    # CI: matrix build de los 5 sites
├── pnpm-workspace.yaml          # Workspace: site-*, studio, packages/*
├── package.json                 # Root scripts (dev, build, preview)
├── .gitignore
│
├── packages/
│   └── shared/                  # @emrg/shared — capa compartida
│       ├── src/
│       │   ├── index.ts         # Barrel export
│       │   ├── types/           # Post, SiteSettings, NavItem, etc.
│       │   ├── sanity/
│       │   │   ├── client.ts    # Cliente Sanity unificado (import.meta.env + process.env)
│       │   │   ├── queries.ts   # getPosts, getPostBySlug, getSiteSettings, etc.
│       │   │   └── image.ts     # urlFor(), buildImageSrc()
│       │   ├── seo/index.ts     # JSON-LD, breadcrumbs, meta tags
│       │   ├── utils/date.ts    # formatBlogDate()
│       │   └── components/      # 13 componentes compartidos (Hero, Nav, Footer, FAQ, etc.)
│       └── vitest.config.ts
│
├── site-a/                      # EMRG v1 — Tailwind, dark theme
│   ├── astro.config.mjs
│   ├── vercel.json
│   └── src/
│       ├── components/          # Nav.astro, Footer.astro, BlogCard.astro, PortableText.astro
│       ├── layouts/BaseLayout.astro
│       ├── pages/               # index, about, blog/, enfoque-*
│       ├── lib/                 # seo.ts (local, acepta settings param)
│       └── styles/global.css
│
├── site-b/                      # EMRG v2 — CSS props, diseño tradicional
│   ├── src/pages/               # Importa componentes de @emrg/shared
│   └── src/layouts/BaseLayout.astro
│
├── site-c/                      # EMRG v3 — Three.js, escenas inmersivas
│   ├── src/
│   │   ├── components/          # Header.astro, SceneNav.astro, CTA.astro, BlogCard.astro
│   │   ├── layouts/BaseLayout.astro
│   │   ├── pages/               # index, about, blog/, enfoque-*
│   │   └── lib/                 # seo.ts, sanity.client.ts (local)
│   └── astro.config.mjs
│
├── site-d/                      # EMRG v4 — Three.js + i18n
│   ├── src/
│   │   ├── components/          # Contact.astro, FocusAreas.astro, BlogCard.astro
│   │   ├── layouts/BaseLayout.astro  # Nav inline en script
│   │   ├── pages/               # index, about, blog/, enfoque-*
│   │   └── lib/                 # seo.ts, sanity.client.ts (local)
│   └── astro.config.mjs
│
├── site-e/                      # EMRG site-e — idéntico a site-b
│   ├── src/pages/               # Importa componentes de @emrg/shared
│   └── src/layouts/BaseLayout.astro
│
└── studio/                      # Sanity CMS Studio v5
    ├── sanity.config.ts
    ├── schemaTypes/
    │   ├── post.ts              # Blog posts
    │   ├── author.ts            # Autores
    │   ├── category.ts          # Categorías
    │   ├── siteSettings.ts      # Configuración global del sitio
    │   ├── navItem.ts           # Item de navegación (objeto)
    │   ├── socialLink.ts        # Link a red social (objeto)
    │   └── siteOverride.ts      # Override por site (objeto)
    └── vercel.json
```

## Familias de diseño

Los 5 sites comparten la misma data (Sanity) pero tienen propósitos visuales distintos:

| Site | Apodo | Diseño | Estilos | 3D | i18n |
|------|-------|--------|---------|-----|------|
| site-a | v1 | Scroll tradicional | Tailwind CSS | — | data-i18n |
| site-b | v2 | Scroll tradicional | CSS custom props | — | i18n.json |
| site-c | v3 | Escenas inmersivas | CSS custom props | Three.js | — |
| site-d | v4 | Escenas inmersivas | CSS custom props | Three.js | data-i18n |
| site-e | site-e | Scroll tradicional | CSS custom props | — | i18n.json |

site-b y site-e son **100% idénticos** en estructura y componentes (usan `@emrg/shared`).

## Cómo empezar

### Prerrequisitos

- Node.js 22+
- pnpm 10+ (`npm install -g pnpm`)
- Una cuenta de Sanity con acceso al proyecto `eu11pcrn`

### Instalación

```bash
pnpm install
```

### Desarrollo

Cada site corre independientemente:

```bash
pnpm --filter site-a dev     # http://localhost:4321
pnpm --filter site-b dev
pnpm --filter site-c dev
pnpm --filter site-d dev
pnpm --filter site-e dev
```

O desde los scripts del root:

```bash
npm run dev:site-a
npm run dev:site-b
# etc.
```

### Sanity Studio

```bash
npm run dev:studio    # http://localhost:3333
```

### Build

```bash
# Todos los sites
pnpm --filter site-a build && pnpm --filter site-b build && ...

# O desde root
npm run build:all

# Individual
npm run build:site-a
```

El output de cada build está en `site-*/dist/`.

## @emrg/shared — Paquete Compartido

### Data Layer

```typescript
import { getClient, getPosts, getPostBySlug, getSiteSettings } from '@emrg/shared'

const client = getClient()
const posts = await getPosts(client)
const settings = await getSiteSettings(client)   // Site Settings desde Sanity
```

| Función | Descripción |
|---------|-------------|
| `getClient()` | Cliente Sanity singleton. Detecta `import.meta.env.SANITY_*` o `process.env.PUBLIC_SANITY_*` automáticamente. |
| `getPosts(client)` | Todos los posts |
| `getLatestPosts(client, count)` | Últimos N posts |
| `getPostBySlug(client, slug)` | Post individual + readingTime + relacionados |
| `getPaginatedPosts(client, start, end)` | Posts paginados |
| `getAllSlugs(client)` | Todos los slugs (para getStaticPaths) |
| `getSiteSettings(client)` | Configuración global (nav, footer, SEO, social, contacto) |
| `urlFor(source)` | URL de imagen Sanity |
| `formatBlogDate(date)` | Formato "Month Day, Year" con null guard |

### Componentes Compartidos

Usados por site-b y site-e. Cada componente acepta `settings?: SiteSettings`:

```astro
---
import { Nav, Footer, CTA, Hero, FAQ } from '@emrg/shared'
import { getClient, getSiteSettings } from '@emrg/shared'

const settings = await getSiteSettings(getClient())
---

<Nav settings={settings} />
<Hero />
<FAQ />
<CTA settings={settings} />
<Footer settings={settings} />
```

| Componente | Prop `settings` |
|------------|-----------------|
| `Nav` | `mainNavigation` → links |
| `Footer` | `footerText`, `footerColumns`, `socialLinks`, `contactEmail`, `copyright` |
| `CTA` | `calendlyUrl` |

### SEO

```typescript
import { generateOrganizationJsonLd, generateBlogPostingJsonLd, generateSeoMeta } from '@emrg/shared'

// Con settings (usa siteName, contactEmail desde Sanity)
generateOrganizationJsonLd(settings)

// Sin settings (usa defaults hardcodeados — backward compatible)
generateOrganizationJsonLd()
```

## Site Settings (Sanity)

La configuración global se administra desde Sanity CMS en un único documento `siteSettings`.

### Campos disponibles

| Grupo | Campos |
|-------|--------|
| **SEO** | siteName, siteDescription, logo, favicon, ogImage |
| **Navegación** | mainNavigation[] (title, href, isCta, dataI18n) |
| **Footer** | footerColumns[] (title, links[]), footerText, copyright |
| **Social** | socialLinks[] (platform, url, label) |
| **Contacto** | contactEmail, calendlyUrl |
| **Overrides** | sites[] (siteKey, title, description, ogImage, calendlyUrl) |

### Prioridad SEO

1. Prop de página (`title`, `description` en frontmatter)
2. Site override en Sanity (match por `siteKey`: `"site-a"`, `"site-b"`, etc.)
3. Default global en Sanity (`siteName`, `siteDescription`)
4. Hardcoded fallback

### Fechas de blog

Si `publishedAt` es `null` en Sanity, se muestra **"Date TBD"** en lugar de "January 1, 1970". El fix está en `formatBlogDate()` de `@emrg/shared`.

## Variables de Entorno

### Sanity

| Variable | Ejemplo | Sitios |
|----------|---------|--------|
| `PUBLIC_SANITY_PROJECT_ID` | `eu11pcrn` | site-b, site-e |
| `PUBLIC_SANITY_DATASET` | `production` | site-b, site-e |
| `SANITY_PROJECT_ID` | `eu11pcrn` | site-a |
| `SANITY_DATASET` | `production` | site-a |

El cliente unificado en `@emrg/shared` detecta automáticamente el runtime y usa `import.meta.env.SANITY_*` (Astro 5) o `process.env.PUBLIC_SANITY_*`.

### Sentry (solo site-a)

| Variable | Descripción |
|----------|-------------|
| `SENTRY_DSN` | DSN de Sentry. Si no está definida, el plugin no se activa. |

Crea `site-a/.env`:

```
SENTRY_DSN=https://...
```

## CI/CD

GitHub Actions en `.github/workflows/ci.yml`:

- **Trigger**: push/PR a `main`
- **Matrix**: build de los 5 sites en paralelo
- **Pasos**: checkout → setup-node → npm ci → type check → build
- **Caché**: por site (`package-lock.json`)

## Scripts Útiles

```bash
# Desarrollo
pnpm --filter site-a dev

# Build individual
pnpm --filter site-a build

# Build todos
npm run build:all

# Preview del build
npm run preview:site-a

# Tests del paquete compartido
pnpm --filter @emrg/shared vitest run

# Sanity Studio
npm run dev:studio
npm run build:studio    # (se deploya aparte)
```

## Convenciones

- **Commits**: conventional commits (`feat:`, `fix:`, `refactor:`, etc.)
- **Branching**: feature branches desde `main`
- **Componentes**: Container-Presentational — estructura en el componente, estilos por props/slots
- **Imágenes**: todas con `width`, `height`, `loading` (eager para LCP, lazy para el resto), `decoding="async"`
- **Astro**: imports con `import type` para tipos, `import` para runtime

## Deploy

Cada site se deploya independientemente en Vercel. Cada uno tiene su propio `vercel.json`.

Para deployar un site:

```bash
cd site-a
vercel --prod
```

O conectá cada carpeta como un proyecto separado en Vercel apuntando a:

| Site | Root directory | Build command |
|------|---------------|---------------|
| site-a | `site-a` | `npm run build` |
| site-b | `site-b` | `npm run build` |
| site-c | `site-c` | `npm run build` |
| site-d | `site-d` | `npm run build` |
| site-e | `site-e` | `npm run build` |
| studio | `studio` | `npm run build` |
