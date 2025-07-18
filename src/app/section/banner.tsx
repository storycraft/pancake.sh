import type { JSX } from 'solid-js/jsx-runtime';
import { banner, bannerText, square } from './banner.module.css';
import { ParallaxBlock } from '../parallax-block';
import { ExpandMore } from '@suid/icons-material';

const NAME = 'pancake.sh';

export function BannerSection() {
  let ref!: HTMLDivElement;

  function scrollDown() {
    window.scroll({
      top: ref.getBoundingClientRect().height,
      behavior: 'smooth',
    });
  }

  const containers: JSX.Element[] = [];
  const count = Math.floor(Math.random() * 12) + 16;
  let oX = 0.01;
  for (let i = 0; i < count; i++) {
    const depth = 2 + i % 4;

    oX += (1 / count) * 0.98;

    const x = oX;
    const y = 0.025 + Math.random() * 0.95;

    containers.push(
      <ParallaxBlock
        layer={depth}
        style={{
          position: 'absolute',
          left: String(x * 100) + '%',
          top: String(y * 100) + '%',
        }}
      >
        <div class={square} />
      </ParallaxBlock>,
    );
  }

  return (
    <header class={banner} ref={ref}>
      <div>{containers}</div>
      <div style={{ margin: 'auto' }}>
        <ParallaxBlock layer={0}>
          <span class={bannerText}>{NAME}</span>
        </ParallaxBlock>
      </div>
      <ParallaxBlock layer={1}>
        <div style={{ 'text-align': 'center' }}>
          <ExpandMore
            style={{
              'font-size': '3rem',
              'padding': '3rem',
            }}
            onClick={scrollDown}
          />
        </div>
      </ParallaxBlock>
    </header>
  );
}
