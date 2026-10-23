import { Code2, Lightbulb, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';

const values = [
  {
    icon: Code2,
    title: 'Understand the Why',
    description: 'Look beyond getting code to work and understand how the pieces fit together.',
  },
  {
    icon: Lightbulb,
    title: 'Solve Real Problems',
    description: 'Understand the problem first, then work toward a practical, useful solution.',
  },
  {
    icon: Rocket,
    title: 'Learn by Building',
    description: 'Turn new knowledge into projects, learn from what works, and keep improving.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">About Me</span>
          <h2 className="heading-lg text-ink-primary">
            A Developer Driven by <span className="text-gradient">Curiosity and Growth</span>
          </h2>
          <div className="section-line mt-6" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal delay={100}>
            <p className="body-lg text-center">
              I'm a web developer who enjoys understanding how things work and turning ideas into
              practical digital experiences. My journey started with curiosity about the websites I
              used, and it has grown into a commitment to learning, building, and solving problems
              through code.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="body-lg mt-5 text-center">
              I believe becoming a better developer means going beyond making things work. It means
              understanding the problem, writing code that makes sense, paying attention to the user
              experience, and learning from every project. I'm continually strengthening my skills
              and applying what I learn to build better websites and more interactive applications.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={i * 100}>
                <div className="card card-hover h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink-primary">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-secondary">{value.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
