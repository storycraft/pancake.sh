import { createTheme, LinearProgress, ThemeProvider } from '@suid/material';
import { container } from './components.module.css';
import { createSignal, onCleanup, onMount, Show } from 'solid-js';
import { isServer } from 'solid-js/web';
import { pink } from '@suid/material/colors';

const loaderTheme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
  },
});

export function PageLoadingBar() {
  const [progress, setProgress] = createSignal(100);

  function beforePreparation() {
    setProgress(20);
  }

  function afterPreparation() {
    setProgress(60);
  }

  function beforeSwap() {
    setProgress(80);
  }

  function pageLoad() {
    setProgress(100);
  }

  onMount(() => {
    if (isServer) return;
    document.addEventListener('astro:before-preparation', beforePreparation);
    document.addEventListener('astro:after-preparation', afterPreparation);
    document.addEventListener('astro:before-swap', beforeSwap);
    document.addEventListener('astro:page-load', pageLoad);
  });

  onCleanup(() => {
    if (isServer) return;
    document.removeEventListener('astro:before-preparation', beforePreparation);
    document.removeEventListener('astro:after-preparation', afterPreparation);
    document.removeEventListener('astro:before-swap', beforeSwap);
    document.removeEventListener('astro:page-load', pageLoad);
  });

  return (
    <Show when={progress() !== 100}>
      <div class={container}>
        <ThemeProvider theme={loaderTheme}>
          <LinearProgress
            variant="determinate"
            value={progress()}
          />
        </ThemeProvider>
      </div>
    </Show>
  );
};
