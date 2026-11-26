import { useState } from 'react';
import { Mail, ArrowUpRight, Send } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { getIcon } from '../lib/icons.js';
import { contactInfo } from '../data/contact.js';

export default function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message.');
      }

      form.reset();
      setStatus({
        type: 'success',
        message: 'Thanks! Your project inquiry has been received.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-narrow">
        <Reveal className="text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="heading-lg text-ink-primary">
            Let&apos;s Talk About <span className="text-gradient">What You&apos;re Building</span>
          </h2>
          <div className="section-line mt-6" />
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Have a project in mind or a question about my work? Send me a message or reach out
            through one of the contact methods below.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl space-y-8">
            <form onSubmit={handleSubmit} className="card-elevated space-y-5">
              <div>
                <p className="text-sm font-semibold text-ink-primary">Project inquiry</p>
                <p className="mt-1 text-sm text-ink-secondary">
                  Tell me what you&apos;re looking to build.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength="100"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-[var(--radius-sm)] border border-white/10 bg-base-surface px-4 py-3 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-secondary/60 focus:border-accent-primary/50"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength="254"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-[var(--radius-sm)] border border-white/10 bg-base-surface px-4 py-3 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-secondary/60 focus:border-accent-primary/50"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                    Project type
                  </span>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full rounded-[var(--radius-sm)] border border-white/10 bg-base-surface px-4 py-3 text-sm text-ink-primary outline-none transition-colors focus:border-accent-primary/50"
                  >
                    <option value="" disabled>Select a project type</option>
                    <option value="landing-page">Landing page</option>
                    <option value="business-website">Business website</option>
                    <option value="web-app">Interactive web application</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                    Budget range
                  </span>
                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-[var(--radius-sm)] border border-white/10 bg-base-surface px-4 py-3 text-sm text-ink-primary outline-none transition-colors focus:border-accent-primary/50"
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="under-75k">Under ₦75,000</option>
                    <option value="75k-150k">₦75,000 – ₦150,000</option>
                    <option value="150k-250k">₦150,000 – ₦250,000</option>
                    <option value="250k-plus">₦250,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows="6"
                  minLength="20"
                  maxLength="5000"
                  placeholder="What are you trying to build, what problem should it solve, and are there any important requirements?"
                  className="w-full resize-y rounded-[var(--radius-sm)] border border-white/10 bg-base-surface px-4 py-3 text-sm text-ink-primary outline-none transition-colors placeholder:text-ink-secondary/60 focus:border-accent-primary/50"
                />
              </label>

              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-accent-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send size={17} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p
                  className={status.type === 'success' ? 'text-sm text-accent-secondary' : 'text-sm text-red-400'}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>

            <div className="card-elevated space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-4 rounded-[var(--radius-sm)] border border-white/10 bg-base-surface p-4 transition-all duration-200 hover:border-accent-primary/30 hover:bg-white/5"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent-primary/10 text-accent-primary">
                  <Mail size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">Email</p>
                  <p className="truncate text-sm font-semibold text-ink-primary">{contactInfo.email}</p>
                </div>
                <ArrowUpRight size={18} className="shrink-0 text-ink-secondary transition-colors group-hover:text-accent-secondary" />
              </a>

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
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">{social.label}</p>
                      <p className="truncate text-sm font-semibold text-ink-primary">
                        {social.id === 'whatsapp'
                          ? 'Start a conversation'
                          : social.url.replace(/^https?:\/\//, '')}
                      </p>
                    </div>
                    <ArrowUpRight size={18} className="shrink-0 text-ink-secondary transition-colors group-hover:text-accent-secondary" />
                  </a>
                );
              })}
            </div>

            <p className="text-center text-xs text-ink-secondary">
              When reaching out about a project, include your main goal, the features you need, and any
              important deadline. This will help me understand your requirements and respond more effectively.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
