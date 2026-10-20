import { FolderOpen } from 'lucide-react';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import { additionalProjects } from '../data/projects.js';

export default function AdditionalProjects() {
  if (additionalProjects.length === 0) {
    return (
      <section className="px-5 pb-20 sm:px-6 md:pb-28">
        <div className="container-narrow">
          <Reveal>
            <div className="card flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[var(--radius)] bg-accent-primary/10 text-accent-primary">
                <FolderOpen size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-primary">More projects coming soon</h3>
                <p className="mt-2 text-sm text-ink-secondary">
                  I&apos;m working on additional mini-projects to add here. Check back later for more
                  examples of my work.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 pb-20 sm:px-6 md:pb-28">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">More Projects</span>
          <h2 className="heading-md text-ink-primary">
            Additional <span className="text-gradient">mini-projects</span>
          </h2>
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
