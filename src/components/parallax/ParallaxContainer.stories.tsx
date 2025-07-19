import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { ParallaxContainer, ParallaxItem } from './index.tsx';

function StorybookComponent(props: { layer: number, }) {
  return (
    <ParallaxContainer
      component="div"
      class="test"
      style={{ padding: '1rem' }}
    >
      <ParallaxItem
        layer={props.layer}
        component="p"
      >
        Hello world!
      </ParallaxItem>
    </ParallaxContainer>
  );
}

export default {
  title: 'ParallaxContainer',
  component: StorybookComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    layer: 1,
  },
} satisfies Meta<typeof StorybookComponent>;

type Story = StoryObj<Meta<typeof StorybookComponent>>;

export const Primary: Story = {
  args: {},
};
