import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { faqs } from '../data/faqs.js';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-lg text-ink-primary">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Common questions potential clients ask before starting a project. If yours isn&apos;t
            here, feel free to reach out.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            const panelId = `${faq.id}-panel`;
            const btnId = `${faq.id}-button`;

            return (
              <Reveal key={faq.id} delay={Math.min(i, 5) * 60}>
                <div
                  className={`overflow-hidden rounded-[var(--radius)] border transition-colors duration-200 ${
                    isOpen
                      ? 'border-accent-primary/30 bg-base-elevated'
                      : 'border-white/10 bg-base-surface'
                  }`}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="text-sm font-semibold text-ink-primary sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-accent-secondary transition-transform duration-300 ease-smooth ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm leading-relaxed text-ink-secondary">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
