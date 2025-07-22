import { createRenderEffect, createSignal, onCleanup, type JSX } from 'solid-js';
import { Dynamic, isServer, type DynamicProps } from 'solid-js/web';
import { container } from './index.module.css';

export function ParallaxContainer<T extends keyof JSX.HTMLElementTags>(
  props: DynamicProps<T>,
) {
  return (
    <Dynamic
      {...props}
      class={`${container} ${props.class || ''}`}
    />
  );
}

export type ParallaxItemProps<T extends keyof JSX.HTMLElementTags> = {
  layer: number,
} & DynamicProps<T>;

export function ParallaxItem<T extends keyof JSX.HTMLElementTags>(props: ParallaxItemProps<T>) {
  let layerRef!: HTMLElement;
  const [position, setPosition] = createSignal<[number, number]>([0, 0]);

  if (!isServer) {
    const handler = (e: MouseEvent) => {
      if (navigator.maxTouchPoints <= 0) {
        setPosition([
          (e.clientX / window.innerWidth - 0.5) * 2,
          (e.clientY / window.innerHeight - 0.5) * 2,
        ]);
      }
    };

    window.addEventListener('mousemove', handler);

    let throttle = false;
    createRenderEffect(() => {
      const multipier = (props.layer + 1) * 0.5;
      const [px, py] = position();
      if (throttle) return;
      throttle = true;
      requestAnimationFrame(() => {
        throttle = false;
        layerRef.style.transform = `translate(${String(multipier * px)}rem,${String(multipier * py)}rem)`;
      });
    });

    onCleanup(() => {
      window.removeEventListener('mousemove', handler);
    });
  }

  return (
    <Dynamic
      ref={layerRef as never}
      {...props}
    >
      {props.children}
    </Dynamic>
  );
}
