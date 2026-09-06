import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dedeadend.github.io',
  integrations: [sitemap()],
  output: 'static'
});
