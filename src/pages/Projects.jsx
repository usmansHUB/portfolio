import { portfolioData } from '../data/portfolioData';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <PageTransition>
      <div className="relative px-6 pb-24 pt-24 md:px-12 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">(02) Work</p>
            <h1 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-6xl">Projects</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              MERN stack projects — from React frontends to Express APIs and MongoDB data layers.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
