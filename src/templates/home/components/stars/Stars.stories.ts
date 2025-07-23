import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Stars } from '.';

export default {
  title: 'Stars',
  component: Stars,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stars>;

type Story = StoryObj<Meta<typeof Stars>>;

export const Primary: Story = {
  args: {},
};
