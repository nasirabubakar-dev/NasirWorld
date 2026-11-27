import { Code2, Lightbulb, Rocket } from 'lucide-react';
import Reveal from './Reveal.jsx';

const values = [
  { icon: Code2, title: 'Think in Systems', description: 'Understand how interfaces, APIs, application logic, and data work together.' },
  { icon: Lightbulb, title: 'Solve Useful Problems', description: 'Start with the real need, then choose a practical solution instead of adding complexity.' },
  { icon: Rocket, title: 'Learn by Building', description: 'Turn new knowledge into working projects, review what can improve, and keep iterating.' },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">About Me</span>
          <h2 className="heading-lg text-ink-primary">A developer focused on <span className="text-gradient">how things work</span></h2>
          <div className="section-line mt-6" />
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal delay={100}>
            <p className="body-lg text-center">
              I&apos;m Nasir Abubakar, a full-stack developer and problem-solver in progress. My work spans
              frontend interfaces and backend fundamentals, with a focus on connecting the pieces into useful,
              understandable web applications.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="body-lg mt-5 text-center">
              I care about more than making a page look right or getting code to run. I want to understand
              the problem, make thoughtful technical choices, and build experiences that are clear for the
              people using them. Alongside web development, I&apos;m exploring AI product development and
              creative browser-based tools through hands-on projects.
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
