import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { ContactForm } from '.';

export default {
  title: 'ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    email: 'example@example.com',
  },
} satisfies Meta<typeof ContactForm>;

type Story = StoryObj<Meta<typeof ContactForm>>;

export const Primary: Story = {
  args: {},
};
