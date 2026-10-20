import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/contact.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled
          ? 'border-b border-white/10 bg-base-bg/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-narrow flex h-16 items-center justify-between px-5 sm:px-6" aria-label="Main navigation">
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink-primary"
        >
          <span className="text-accent-primary">N</span>
          <span>asir</span>
          <span className="text-accent-secondary">World</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-secondary transition-colors duration-200 hover:text-ink-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-primary transition-colors hover:bg-white/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'}`}
        role="region"
        aria-label="Mobile navigation"
      >
        <div className="space-y-1 border-b border-white/10 bg-base-bg/95 px-5 py-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="block rounded-md px-3 py-3 text-sm font-medium text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-primary mt-2 w-full"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
