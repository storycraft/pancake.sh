import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import solidJs from '@astrojs/solid-js';
import suidPlugin from '@suid/vite-plugin';

export default defineConfig({
  vite: {
    plugins: [
      tsconfigPaths(),
      suidPlugin(),
    ],
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
  },
  integrations: [
    solidJs(),
  ],
});
