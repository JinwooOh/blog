// @ts-check

import mdx from '@astrojs/mdx';
import db from '@astrojs/db';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), db(), sitemap()],

  markdown: {
      remarkPlugins: [remarkGfm, remarkFootnotes],
      shikiConfig: {
          theme: 'github-light',
          wrap: true
      }
	},

	image: {
      // Enable image optimization
      service: {
          entrypoint: 'astro/assets/services/sharp'
      }
	},
});