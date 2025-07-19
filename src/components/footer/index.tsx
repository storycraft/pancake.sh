import { footer, text } from './index.module.css';

export function Footer(
  props: {
    name: string,
    email: string,
  },
) {
  return (
    <footer class={footer}>
      <p class={text}>Contact Detail</p>
      <span class={text}>{props.name}</span>
      <address class={text}>{props.email}</address>
    </footer>
  );
}
