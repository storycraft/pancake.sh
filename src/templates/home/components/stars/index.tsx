import type { JSX } from 'solid-js/jsx-runtime';
import { ParallaxContainer, ParallaxItem } from '@components/parallax';
import { container, star } from './index.module.css';

export function StarsBackground() {
  const stars: JSX.Element[] = [];
  const count = 16 + Math.floor(Math.random() * 8);
  let oX = 0.01;
  for (let i = 0; i < count; i++) {
    const layer = 1 + Math.floor(Math.random() * 2);

    oX += (1 / count) * 0.98;

    const x = oX;
    const y = 0.025 + Math.random() * 0.95;

    stars.push(
      <ParallaxItem
        layer={layer}
        component="div"
        style={{
          position: 'absolute',
          left: String(x * 100) + '%',
          top: String(y * 100) + '%',
        }}
      >
        <div class={star} />
      </ParallaxItem>,
    );
  }

  return (
    <ParallaxContainer component="div" class={container}>
      {stars}
    </ParallaxContainer>
  );
}
