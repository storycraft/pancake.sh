import { footer, text } from './footer.module.css';

const NAME: string = 'storycraft';
const EMAIL: string = 'storycraft@pancake.sh';

export function FooterSection() {
  return (
    <footer class={footer}>
      <p class={text}>Contact Detail</p>
      <span class={text}>{NAME}</span>
      <address class={text}>{EMAIL}</address>
    </footer>
  );
}
