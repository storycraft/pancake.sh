import { defineConfig, envField } from 'astro/config';
import vite from './vite.config.ts';
import solidJs from '@astrojs/solid-js';

export default defineConfig({
  vite,
  integrations: [
    solidJs(),
  ],
  env: {
    schema: {
      PAT_GITHUB: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
