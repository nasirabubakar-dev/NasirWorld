import { ArrowRight, ArrowDown } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20 sm:px-6"
    >
      {/* Background accents — subtle, no animation */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-accent-secondary/8 blur-3xl" />
      </div>

      <div className="container-narrow w-full">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <Reveal>
              <span className="eyebrow">DEVELOPER, BUILDER, LIFELONG LEARNER</span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="heading-xl text-ink-primary">
                Building digital, <br className="hidden sm:block" />
                <span className="text-gradient">experiences</span> <br className="hidden sm:block" />
                that make a difference.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="body-lg mt-6 max-w-lg">
                I&apos;m Nasir, a web developer focused on building practical, responsive websites and
                interactive web applications. I enjoy turning ideas into working digital
                experiences through thoughtful design, problem-solving, and continuous learning.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#projects" className="btn-primary group">
                  Explore My Work
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
                <a href="#contact" className="btn-secondary">
                  Let&apos;s Work Together
                </a>
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

          {/* Professional headshot */}
          <div className="order-1 md:order-2">
            <Reveal delay={120} className="flex justify-center md:justify-end">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[var(--radius-lg)] bg-gradient-to-br from-accent-primary/20 to-accent-secondary/15 blur-2xl"
                  aria-hidden="true"
                />
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
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-secondary transition-colors hover:text-ink-primary md:block"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={22} className="motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
