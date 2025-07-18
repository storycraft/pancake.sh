import { container, header, listItem, listItemTitle } from './projects.module.css';

export function ProjectsSection() {
  return (
    <div class={container}>
      <h1 class={header}>Projects</h1>
      <div>
        <ListItem name="NodeKakao" desc="(Typescript) Loco protocol compatible library" link="https://github.com/storycraft/node-kakao" />
        <ListItem name="storyboard" desc="(Rust) Flexible GPU accelerated 2D rendering engine powered by wgpu, rust" link="https://github.com/storycraft/storyboard" />
        <ListItem name="tablet-driver" desc="(Rust) Low latency Tablet(CTL-472) userland driver made with Rust" link="https://github.com/storycraft/tablet-driver" />
        <ListItem name="web-wallpaper" desc="(C#) Live desktop wallpaper renderer using Cef" link="https://github.com/storycraft/web-wallpaper" />
        <ListItem name="advanced-calculator" desc="(Typescript) Predictive parser and interpreter from scratch" link="https://github.com/storycraft/advanced-calculator" />
        <ListItem name="..." desc="" link="https://github.com/storycraft" />
      </div>
    </div>
  );
}

function ListItem(prop: { name: string, desc: string, link?: string, }) {
  return (
    <a class={listItem} href={prop.link}>
      <h2 class={listItemTitle}>{prop.name}</h2>
      <p>{prop.desc}</p>
    </a>
  );
}
