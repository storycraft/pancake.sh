import { ProjectsSection } from './section/projects';
import { FooterSection } from './section/footer';
import { app } from './index.module.css';

export function PancakeApp() {
  return (
    <div class={app}>
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
