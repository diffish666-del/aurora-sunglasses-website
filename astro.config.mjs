import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://aurora-sunglasses.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  adapter: netlify(),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
