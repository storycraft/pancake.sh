import { container, icon } from './index.module.css';
import { FaBrandsGithub, FaBrandsTwitter, FaBrandsYoutube } from 'solid-icons/fa';

export type LinksProps = {
  github: string,
  twitter: string,
  youtube: string,
};

export function Links(props: LinksProps) {
  return (
    <div class={container}>
      <a class={icon} href={props.github}><FaBrandsGithub size={28} /></a>
      <a class={icon} href={props.twitter}><FaBrandsTwitter size={28} /></a>
      <a class={icon} href={props.youtube}><FaBrandsYoutube size={28} /></a>
    </div>
  );
}
