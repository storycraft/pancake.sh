import { BannerSection } from './section/banner';
import { ProjectsSection } from './section/projects';
import { FooterSection } from './section/footer';

export function PancakeApp() {
  return (
    <div>
      <BannerSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
