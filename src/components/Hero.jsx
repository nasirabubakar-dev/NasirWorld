import { ArrowRight, ArrowDown } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-primary/10 blur-3xl" />
        <div className="absolute -bottom-8 -left-24 h-80 w-80 rounded-full bg-accent-secondary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="container-narrow w-full">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-2 md:order-1">
            <Reveal>
              <span className="eyebrow">FULL-STACK DEVELOPER · PROBLEM-SOLVER · AI PRODUCT BUILDER IN PROGRESS</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heading-xl text-ink-primary">
                Building useful digital <span className="text-gradient">experiences</span> from idea to implementation.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="body-lg mt-6 max-w-xl">
                I&apos;m Nasir Abubakar. I work across frontend and backend development to turn ideas into
                responsive websites and interactive web applications. I enjoy understanding how systems fit
                together, solving practical problems, and exploring what useful AI-powered products can become.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#projects" className="btn-primary group">
                  Explore My Work
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn-secondary">Discuss a Project</a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex items-center gap-2 text-sm text-ink-secondary">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Open to suitable freelance enquiries
              </div>
            </Reveal>
          </div>
          <div className="order-1 md:order-2">
            <Reveal delay={120} className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[var(--radius-lg)] bg-gradient-to-br from-accent-primary/25 to-accent-secondary/20 blur-2xl" aria-hidden="true" />
                <div className="relative h-56 w-56 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-base-surface sm:h-72 sm:w-72 md:h-80 md:w-80">
                  <img
                    src="/headshot.png"
                    alt="Portrait of Nasir Abubakar"
                    className="h-full w-full object-cover object-center"
                    width="640"
                    height="640"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-base-elevated/95 px-4 py-3 shadow-xl backdrop-blur">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-secondary">My approach</p>
                  <p className="mt-1 text-sm font-semibold text-ink-primary">Understand · Build · Improve</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-secondary transition-colors hover:text-ink-primary md:block" aria-label="Scroll to About section">
        <ArrowDown size={22} className="motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
