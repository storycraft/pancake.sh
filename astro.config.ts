import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import solidJs from '@astrojs/solid-js';
import suidPlugin from '@suid/vite-plugin';
import solidSvg from 'vite-solid-svg';

export default defineConfig({
  vite: {
    plugins: [
      solidSvg(),
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
