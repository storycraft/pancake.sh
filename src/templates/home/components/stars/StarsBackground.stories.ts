import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { StarsBackground } from '.';

export default {
  title: 'StarsBackground',
  component: StarsBackground,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StarsBackground>;

type Story = StoryObj<Meta<typeof StarsBackground>>;

export const Primary: Story = {
  args: {},
};
