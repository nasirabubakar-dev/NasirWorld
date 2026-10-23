import { contactInfo, navLinks } from '../data/contact.js';
import { getIcon } from '../lib/icons.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-6">
      <div className="container-narrow">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="flex items-center gap-1 text-lg font-bold tracking-tight text-ink-primary"
            >
              <span className="text-accent-primary">N</span>
              <span>asir</span>
              <span className="text-accent-secondary">World</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              Building responsive websites and interactive frontend experiences through practical
              problem-solving, thoughtful design, and continuous learning.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-secondary">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-secondary">
                Connect
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                  >
                    Email
                  </a>
                </li>
                {contactInfo.socials.map((social) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <li key={social.id}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                      >
                        <Icon size={14} />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-ink-secondary">
            &copy; {year} NasirWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
