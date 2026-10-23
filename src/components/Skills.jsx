import Reveal from './Reveal.jsx';
import { getIcon } from '../lib/icons.js';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Skills</span>
          <h2 className="heading-lg text-ink-primary">
            The Tools I Use and the <span className="text-gradient">Skills I&apos;m Building</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Here are the technologies I use in my projects, the tools that support my workflow, and
            the areas I&apos;m actively learning as I grow as a developer.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = getIcon(category.icon);
            const isLearning = category.id === 'learning';

            return (
              <Reveal
                key={category.id}
                delay={(catIndex % 3) * 100}
                className={isLearning ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <div className="card card-hover h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-ink-primary">{category.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex flex-col gap-0.5 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="text-sm font-medium text-ink-primary">{skill.name}</span>
                        <span className="text-xs text-ink-secondary">{skill.note}</span>
                      </li>
                    ))}
                  </ul>

                  {isLearning && (
                    <p className="mt-4 rounded-[var(--radius-sm)] bg-accent-secondary/10 px-3 py-2 text-xs font-medium text-accent-secondary">
                      Actively learning — not yet production expertise
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
