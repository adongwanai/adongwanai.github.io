import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
// TODO: Fix sitemap plugin compatibility issue
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adongwanai.github.io',
  base: '/',
  integrations: [tailwind()], // sitemap()
});