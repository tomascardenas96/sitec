// @ts-check
import { defineConfig } from 'astro/config';
import tailwindIntegration from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { canonicalURL } from './src/lib/seo.js';

const site = 'https://balca.com.ar';

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [
        tailwindIntegration(),
        sitemap({
            filter: (page) => !/^\/404(?:\/|\.html)?$/.test(new URL(page).pathname),
            serialize: (item) => ({
                ...item,
                url: canonicalURL(new URL(item.url), site).href,
            }),
        }),
    ]
});
