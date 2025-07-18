import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
};

export default config;
