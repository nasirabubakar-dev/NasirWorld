import { ArrowRight, Check } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { getIcon } from '../lib/icons.js';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Services</span>
          <h2 className="heading-lg text-ink-primary">
            How I can <span className="text-gradient">help you</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Frontend web development services focused on clean, responsive, and functional results.
            Pricing is discussed after understanding your project scope.
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

                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent-secondary">
                    {service.audience}
                  </p>

                  <p className="mb-5 text-sm leading-relaxed text-ink-secondary">
                    {service.problem}
                  </p>

                  <ul className="mb-6 space-y-2.5 flex-1">
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

                  <a
                    href="#contact"
                    className="btn-secondary group w-full"
                  >
                    Enquire about this service
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
      </div>
    </section>
  );
}
