import { Code2, Lightbulb, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I write maintainable, well-structured code that is easy to understand and update.',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving',
    description: 'I focus on understanding the real problem before jumping into implementation.',
  },
  {
    icon: Rocket,
    title: 'Practical Projects',
    description: 'I learn by building real projects, not just tutorials — every project teaches something.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">About Me</span>
          <h2 className="heading-lg text-ink-primary">
            A developing developer who <span className="text-gradient">builds to learn</span>
          </h2>
          <div className="section-line mt-6" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal delay={100}>
            <p className="body-lg text-center">
              My journey into web development started with curiosity — a desire to understand how
              the websites I used every day actually worked. That curiosity grew into a commitment
              to building useful digital products that are functional, responsive, and genuinely
              pleasant to use.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="body-lg mt-5 text-center">
              I learn by building. Every project I take on is an opportunity to solve a real
              problem, refine my approach, and improve the quality of what I produce. My philosophy
              is simple: build things that work, keep the code clean, and never stop improving.
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
