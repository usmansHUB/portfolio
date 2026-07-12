import { portfolioData } from '../data/portfolioData';
import PageTransition from '../components/PageTransition';
import { ImageRevealList } from '@/components/ui/image-reveal-list';

const Projects = () => {
  const { projects } = portfolioData;

  const projectItems = projects.map((project, idx) => ({
    id: project.id,
    title: project.title,
    subtitle: project.status
      ? `${project.modules.join(' • ').toUpperCase()} — ${project.status}`
      : project.modules.join(' • ').toUpperCase(),
    image: project.image,
    number: `0${idx + 1}`.slice(-2),
    href: project.link || '#',
  }));

  return (
    <PageTransition>
      <div className="relative px-6 pb-24 pt-24 md:px-12 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <h1 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-6xl">Projects</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              MERN stack projects — from React frontends to Express APIs and MongoDB data layers.
            </p>
          </div>

          <div className="mx-auto max-w-4xl pt-4">
            <ImageRevealList items={projectItems} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

