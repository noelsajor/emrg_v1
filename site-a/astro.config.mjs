import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

export default defineConfig({
    site: 'https://emrg.studio',
    integrations: [
        tailwind(),
        sitemap(),
        ...(process.env.SENTRY_DSN
            ? [sentry({
                dsn: process.env.SENTRY_DSN,
                sourceMapsUploadOptions: { enabled: false },
            })]
            : []),
    ],
    output: 'static',
});
