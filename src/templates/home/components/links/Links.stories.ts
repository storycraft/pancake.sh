import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Links } from '.';

export default {
  title: 'Links',
  component: Links,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    github: '#',
    twitter: '#',
    youtube: '#',
  },
} satisfies Meta<typeof Links>;

type Story = StoryObj<Meta<typeof Links>>;

export const Primary: Story = {};
