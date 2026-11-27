import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-accent-primary/10 blur-[110px]" />
        <div className="absolute bottom-[8%] right-[5%] h-80 w-80 rounded-full bg-accent-secondary/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="container-narrow w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-secondary/20 bg-accent-secondary/[0.06] px-3 py-1.5 text-[11px] font-semibold text-accent-secondary">
                <Sparkles size={13} />
                Available for selected freelance projects
              </div>
            </Reveal>
            <Reveal delay={70}>
              <span className="eyebrow">Full-Stack Developer · Problem-Solver · AI Product Builder</span>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="heading-xl text-ink-primary">
                I build digital products that <span className="text-gradient">make sense.</span>
              </h1>
            </Reveal>
            <Reveal delay={210}>
              <p className="body-lg mt-6 max-w-2xl">
                I&apos;m Nasir Abubakar. I work across frontend and backend development to turn ideas into
                responsive websites and interactive web applications — while continuously exploring useful AI-powered products.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#projects" className="btn-primary group">
                  Explore My Work
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn-secondary">Discuss a Project</a>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink-secondary">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  Open to suitable enquiries
                </span>
                <span>Based in Nigeria · Working remotely</span>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={120} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-accent-primary/15 blur-3xl" aria-hidden="true" />
                <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-2 shadow-2xl shadow-black/30">
                  <div className="relative h-72 w-72 overflow-hidden rounded-[1.55rem] bg-base-elevated sm:h-80 sm:w-80 lg:h-[25rem] lg:w-[25rem]">
                    <img src="/headshot.png" alt="Portrait of Nasir Abubakar" className="h-full w-full object-cover object-center" width="640" height="640" fetchPriority="high" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/30 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#0d1322]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-secondary">Build philosophy</p>
                  <p className="mt-1.5 text-sm font-semibold text-ink-primary">Understand · Build · Improve</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-ink-secondary transition-colors hover:text-accent-secondary md:block" aria-label="Scroll to About section">
        <ArrowDown size={20} className="motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
