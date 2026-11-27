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
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={'fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-5 ' + (scrolled ? 'pt-2' : 'pt-3')}>
      <nav className={'mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 sm:px-4 transition-all duration-300 ' + (scrolled ? 'border-white/10 bg-[#070b14]/80 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'border-white/[0.07] bg-[#070b14]/55 backdrop-blur-lg')} aria-label="Main navigation">
        <a href="#hero" onClick={closeMenu} className="flex items-center gap-2 px-2 text-lg font-extrabold tracking-[-0.03em] text-ink-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary text-sm text-white shadow-lg shadow-accent-primary/20">N</span>
          <span>Nasir<span className="text-accent-secondary">World</span></span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={'#' + link.id} className="rounded-lg px-3 py-2 text-xs font-semibold text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary px-4 py-2.5 text-xs">Let&apos;s Talk</a>
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-primary transition hover:bg-white/10 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div id="mobile-menu" className={open ? 'block md:hidden' : 'hidden md:hidden'} role="region" aria-label="Mobile navigation">
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#070b14]/95 p-3 shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a key={link.id} href={'#' + link.id} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink-secondary transition hover:bg-white/5 hover:text-ink-primary">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-primary mt-2 w-full">Let&apos;s Talk</a>
        </div>
      </div>
    </header>
  );
}
