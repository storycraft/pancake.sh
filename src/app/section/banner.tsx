import type { JSX } from 'solid-js/jsx-runtime';
import { banner, bannerText, square, header, starContainer } from './banner.module.css';
import { ExpandMore } from '@suid/icons-material';
import { ParallaxContainer, ParallaxItem } from '../../components/parallax';

const NAME = 'pancake.sh';

export function BannerSection() {
  let ref!: HTMLDivElement;

  function scrollDown() {
    window.scroll({
      top: ref.getBoundingClientRect().height,
      behavior: 'smooth',
    });
  }

  const stars: JSX.Element[] = [];
  const count = 20;
  let oX = 0.01;
  for (let i = 0; i < count; i++) {
    const depth = 2 + i % 4;

    oX += (1 / count) * 0.98;

    const x = oX;
    const y = 0.025 + Math.random() * 0.95;

    stars.push(
      <ParallaxItem
        layer={depth}
        component="div"
        style={{
          position: 'absolute',
          left: String(x * 100) + '%',
          top: String(y * 100) + '%',
        }}
      >
        <div class={square} />
      </ParallaxItem>,
    );
  }

  return (
    <header ref={ref} class={header}>
      <ParallaxContainer component="div" class={starContainer}>
        {stars}
      </ParallaxContainer>
      <ParallaxContainer component="div" class={banner}>
        <ParallaxItem layer={0} component="p" class={bannerText}>
          {NAME}
        </ParallaxItem>
        <ParallaxItem layer={1} component="div" style={{ 'text-align': 'center' }}>
          <ExpandMore
            style={{
              width: '48px',
              height: '48px',
              fill: 'white',
              padding: '3rem',
            }}
            onClick={scrollDown}
          />
        </ParallaxItem>
      </ParallaxContainer>
    </header>
  );
}
