// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gabrielboampong.xyz',
  redirects: {
    '/projects': '/work',
    '/education': '/experience#education',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});