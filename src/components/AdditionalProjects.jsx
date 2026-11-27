import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { additionalProjects } from '../data/projects.js';

export default function AdditionalProjects() {
  if (additionalProjects.length === 0) return null;

  return (
    <section className="px-5 pb-20 sm:px-6 md:pb-28">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Earlier Builds</span>
          <h2 className="heading-md text-ink-primary">Practice projects and <span className="text-gradient">small experiments</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-secondary">
            Smaller projects that helped me practise JavaScript, browser interactions, and working with APIs as I developed my foundations.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
