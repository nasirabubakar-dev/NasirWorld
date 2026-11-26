import Reveal from './Reveal.jsx';
import { getIcon } from '../lib/icons.js';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Skills & Technologies</span>
          <h2 className="heading-lg text-ink-primary">The stack I use and <span className="text-gradient">continue to build</span></h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            A practical view of the tools I work with, the backend and data concepts I’m strengthening,
            and the creative technologies I’m exploring. I keep learning status visible rather than
            presenting every tool as an advanced skill.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const Icon = getIcon(category.icon);
            return (
              <Reveal key={category.id} delay={(catIndex % 2) * 100}>
                <div className="card card-hover h-full">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-semibold text-ink-primary">{category.title}</h3>
                    </div>
                    <span className="tag shrink-0">{category.status}</span>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex flex-col gap-0.5 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                        <span className="text-sm font-medium text-ink-primary">{skill.name}</span>
                        <span className="text-xs leading-relaxed text-ink-secondary">{skill.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
