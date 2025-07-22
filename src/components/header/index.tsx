import { subSiteContainer, homeContainer, siteContainer, siteLink, siteLinkText } from './index.module.css';

const SITES = [
  { name: '/', link: '/' },
  { name: 'About', link: '/about' },
];

export function HomeHeader() {
  return (
    <div class={homeContainer}>
      <SiteLinks />
    </div>
  );
}

export function SubSiteHeader() {
  return (
    <div class={subSiteContainer}>
      <SiteLinks />
    </div>
  );
}

function SiteLinks() {
  const sites = [];
  for (const { name, link } of SITES) {
    sites.push(
      <a class={siteLink} href={link}>
        <span class={siteLinkText}>
          {name}
        </span>
      </a>,
    );
  }

  return (
    <div class={siteContainer}>
      {sites}
    </div>
  );
}
