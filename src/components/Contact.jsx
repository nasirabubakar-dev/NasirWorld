import { Mail, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { getIcon } from '../lib/icons.js';
import { contactInfo } from '../data/contact.js';

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="heading-lg text-ink-primary">
            Let&apos;s build <span className="text-gradient">something together</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Have a project in mind or a question about my services? I&apos;d love to hear from you.
            Use any of the methods below to get in touch.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="card-elevated space-y-4">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 rounded-[var(--radius-sm)] border border-white/10 bg-base-surface p-4 transition-all duration-200 hover:border-accent-primary/30 hover:bg-white/5"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                    Email
                  </p>
                  <p className="truncate text-sm font-semibold text-ink-primary">
                    {contactInfo.email}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-ink-secondary transition-colors group-hover:text-accent-secondary"
                />
              </a>

              {/* Socials */}
              {contactInfo.socials.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-[var(--radius-sm)] border border-white/10 bg-base-surface p-4 transition-all duration-200 hover:border-accent-primary/30 hover:bg-white/5"
                  >
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                        {social.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-ink-primary">
                        {social.url.replace(/^https?:\/\//, '')}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-ink-secondary transition-colors group-hover:text-accent-secondary"
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-6 text-center text-xs text-ink-secondary">
              I typically respond within a day or two. Looking forward to hearing about your
              project.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
