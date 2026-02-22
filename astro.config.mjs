import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// TODO: Fix sitemap plugin compatibility issue
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adongwanai.github.io',
  base: '/',
  integrations: [tailwind()], // sitemap()
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener'] }]
    ]
  }
});