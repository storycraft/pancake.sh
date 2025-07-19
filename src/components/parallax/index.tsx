import { createRenderEffect, createSignal, onCleanup, onMount, type JSX } from 'solid-js';
import { Dynamic, isServer, type DynamicProps } from 'solid-js/web';
import { container } from './index.module.css';

export function ParallaxContainer<T extends keyof JSX.HTMLElementTags>(
  props: DynamicProps<T>,
) {
  return (
    <Dynamic
      {...props}
      class={`${props.class || ''} ${container}`}
    />
  );
}

export type ParallaxItemProps<T extends keyof JSX.HTMLElementTags> = {
  layer: number,
} & DynamicProps<T>;

export function ParallaxItem<T extends keyof JSX.HTMLElementTags>(props: ParallaxItemProps<T>) {
  let layerRef!: HTMLElement;
  const [position, setPosition] = createSignal<[number, number]>([0, 0]);

  const handler = (e: MouseEvent) => {
    if (navigator.maxTouchPoints <= 0) {
      setPosition([
        (e.screenX / window.outerWidth - 0.5) * 2,
        (e.screenY / window.outerHeight - 0.5) * 2,
      ]);
    }
  };

  onMount(() => {
    if (isServer) return;

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
  });

  onCleanup(() => {
    if (!isServer) {
      window.removeEventListener('mousemove', handler);
    }
  });

  return (
    <Dynamic
      ref={layerRef as never}
      {...props}
    >
      {props.children}
    </Dynamic>
  );
}
