import { BannerSection } from './section/banner';
import { ProjectsSection } from './section/projects';
import { FooterSection } from './section/footer';
import { container } from './index.module.css';

export function PancakeApp() {
  return (
    <div class={container}>
      <BannerSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
