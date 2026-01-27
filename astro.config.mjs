import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://adongwanai.github.io',
  base: '/',
  integrations: [tailwind()],
});