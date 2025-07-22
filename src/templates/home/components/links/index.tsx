import { Show } from 'solid-js';
import { container, icon } from './index.module.css';
import { FaBrandsGithub, FaBrandsTwitter, FaBrandsYoutube } from 'solid-icons/fa';

export type LinksProps = {
  github?: string,
  twitter?: string,
  youtube?: string,
};

export function Links(props: LinksProps) {
  return (
    <div class={container}>
      <Show when={props.github}>
        {name => <a class={icon} href={`https://github.com/${name()}`}><FaBrandsGithub /></a>}
      </Show>
      <Show when={props.twitter}>
        {name => <a class={icon} href={`https://x.com/${name()}`}><FaBrandsTwitter /></a>}
      </Show>
      <Show when={props.youtube}>
        {name => <a class={icon} href={`https://www.youtube.com/@${name()}`}><FaBrandsYoutube /></a>}
      </Show>
    </div>
  );
}
