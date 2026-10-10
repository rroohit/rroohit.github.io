// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User site -> served at the domain root. No `base` needed.
  site: 'https://rroohit.github.io',
  integrations: [mdx(), sitemap()],
  redirects: {
    // Old Sayro account-deletion URL; the page now lives on sayro.in.
    '/delete-account': 'https://sayro.in/delete-account',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
