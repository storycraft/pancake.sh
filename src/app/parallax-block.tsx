import { onCleanup, onMount, type ParentProps } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import { isServer } from 'solid-js/web';

export function ParallaxBlock(prop: ParentProps<{ layer: number, style?: JSX.CSSProperties, }>) {
  let layerRef!: HTMLDivElement;
  const multipier = (prop.layer + 1) * 0.5;

  let lock = false;

  const handler = (e: MouseEvent) => {
    if (!lock && navigator.maxTouchPoints <= 0) {
      lock = true;
      requestAnimationFrame(() => {
        lock = false;
        const pX = (e.screenX / window.outerWidth - 0.5) * 2;
        const pY = (e.screenY / window.outerHeight - 0.5) * 2;

        layerRef.style.transform = `translate(${String(multipier * pX)}rem,${String(multipier * pY)}rem)`;
      });
    }
  };

  onMount(() => {
    if (!isServer) {
      window.addEventListener('mousemove', handler);
    }
  });

  onCleanup(() => {
    if (!isServer) {
      window.removeEventListener('mousemove', handler);
    }
  });

  return <div ref={layerRef} style={prop.style}>{prop.children}</div>;
}
