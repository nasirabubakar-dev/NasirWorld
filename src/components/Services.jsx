import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { getIcon } from '../lib/icons.js';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Services & Pricing</span>
          <h2 className="heading-lg text-ink-primary">
            Web Development Services <span className="text-gradient">Built Around Your Goals</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            I build responsive websites and interactive frontend experiences designed to communicate
            clearly, work across screen sizes, and meet the needs of each project. Every project
            starts with understanding what you need and agreeing on a suitable scope.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <Reveal key={service.id} delay={i * 120}>
                <div className="card card-hover flex h-full flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-ink-primary">{service.title}</h3>

                  <div className="mb-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                      Starting at
                    </p>
                    <p className="mt-1 text-3xl font-extrabold tracking-tight text-gradient">
                      {service.price}
                    </p>
                  </div>

                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent-secondary">
                    {service.audience}
                  </p>

                  <p className="mb-5 text-sm leading-relaxed text-ink-secondary">
                    {service.problem}
                  </p>

                  <ul className="mb-6 flex-1 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-primary">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-accent-secondary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-secondary group w-full">
                    Discuss your project
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-ink-secondary">
            These are starting prices. Your final quote depends on the project scope and agreed
            features. Domain registration, paid hosting, premium tools, and third-party services
            are separate unless agreed beforehand. Backend systems and advanced integrations are
            scoped and quoted separately.
          </p>
          <p className="mt-5 text-base font-medium text-ink-primary">
            Have a different project in mind?
          </p>
          <a href="#contact" className="btn-primary group mt-4">
            Let&apos;s discuss your project
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
