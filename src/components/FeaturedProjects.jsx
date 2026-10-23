import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { featuredProjects } from '../data/projects.js';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="heading-lg text-ink-primary">
            Projects That Turn Ideas Into <span className="text-gradient">Experiences</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            These projects showcase how I approach website design, frontend development, and the
            process of turning ideas into working web experiences.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 120}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
