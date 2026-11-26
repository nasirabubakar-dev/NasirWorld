import { ArrowUpRight, Box, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';

const currentWork = [
  {
    id: '3d-studio',
    icon: Box,
    status: 'Active project',
    title: 'NASIRWORLD 3D Studio',
    description:
      'A browser-based 3D production workspace built with Three.js. I’m developing a repeatable workflow for character scenes, environments, camera work, lighting, animation, and episode production.',
    focus: ['Three.js', '3D scene construction', 'Character animation', 'Production workflow'],
    href: 'https://nasirworld-3d-studio.vercel.app/',
    linkLabel: 'Explore the studio',
  },
  {
    id: 'ai-products',
    icon: Sparkles,
    status: 'In progress',
    title: 'AI Product Development',
    description:
      'Exploring how AI can support learning, creative workflows, and useful digital tools. I’m building the underlying skills and testing ideas before sharing more about individual products.',
    focus: ['Applied AI', 'Product thinking', 'Workflow experiments'],
  },
];

export default function BuildingNow() {
  return (
    <section id="building" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Beyond Client Projects</span>
          <h2 className="heading-lg text-ink-primary">What I&apos;m <span className="text-gradient">Building Now</span></h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            I also build and explore ideas of my own. These projects help me learn by creating complete
            experiences, testing workflows, and solving new technical challenges.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {currentWork.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={index * 100}>
                <article className="card card-hover flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                      <Icon size={24} />
                    </div>
                    <span className="tag">{item.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink-primary">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.focus.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  {item.href && (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6 w-full">
                      {item.linkLabel}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
