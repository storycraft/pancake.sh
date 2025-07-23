import { type ViteUserConfig } from 'astro';
import tsconfigPaths from 'vite-tsconfig-paths';
import suidPlugin from '@suid/vite-plugin';
import solidSvg from 'vite-solid-svg';

export default {
  plugins: [
    solidSvg(),
    tsconfigPaths(),
    suidPlugin(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase' as const,
    },
  },
} as ViteUserConfig;
