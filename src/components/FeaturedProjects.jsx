import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { featuredProjects } from '../data/projects.js';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Selected Work</span>
          <h2 className="heading-lg text-ink-primary">Projects with <span className="text-gradient">purpose and process</span></h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            A closer look at selected builds: the need each project addresses, the approach I took,
            and the features I implemented. These are demonstrations of my work, not claims of client results.
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
