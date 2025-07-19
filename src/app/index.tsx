import { ProjectsSection } from './section/projects';
import { app } from './index.module.css';

export function PancakeApp() {
  return (
    <div class={app}>
      <ProjectsSection />
    </div>
  );
}
