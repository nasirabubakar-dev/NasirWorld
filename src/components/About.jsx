import { Code2, Lightbulb, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Write code that is organized, understandable, and easier to maintain and improve.',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving',
    description: 'Understand the problem first, then work toward a practical solution.',
  },
  {
    icon: Rocket,
    title: 'Learn by Building',
    description: 'Use real projects to apply new knowledge, test ideas, and improve through experience.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">About Me</span>
          <h2 className="heading-lg text-ink-primary">
            A Developer Who <span className="text-gradient">Builds to Learn</span>
          </h2>
          <div className="section-line mt-6" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal delay={100}>
            <p className="body-lg text-center">
              My journey into web development began with curiosity and a desire to understand how the
              websites I used every day actually worked. That curiosity grew into a habit of
              learning through practical projects, experimenting with different technologies, and
              turning ideas into working digital experiences.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="body-lg mt-5 text-center">
              I believe good development requires more than writing code. It takes patience, thoughtful
              problem-solving, attention to detail, and a willingness to keep improving. Through
              every project, I'm working to strengthen my skills and build websites that are useful,
              responsive, and enjoyable to use.
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
