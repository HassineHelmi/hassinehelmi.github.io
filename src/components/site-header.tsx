'use client';

import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from '../context/LanguageContext';
import { scrollToSection } from '../lib/scroll';
import { containerClass, focusClass } from './styles';

const NAV = [
  { id: 'work', key: 'Navigation.work' },
  { id: 'services', key: 'Navigation.services' },
  { id: 'experience', key: 'Navigation.experience' },
  { id: 'about', key: 'Navigation.about' },
  { id: 'contact', key: 'Navigation.contact' },
] as const;

export function SiteHeader() {
  const { t, language, setLanguage } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const nodes = NAV.map((item) => document.getElementById(item.id)).filter(
      (node): node is HTMLElement => node !== null,
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id, 72);
  };

  const isDark = mounted && resolvedTheme === 'dark';

  const linkClass = (id: string) =>
    `inline-flex h-11 cursor-pointer items-center text-sm transition-colors duration-200 ${focusClass} ${
      active === id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <a
        href="#main"
        className={`absolute left-4 top-3 z-50 -translate-y-24 bg-background px-4 py-2 text-sm text-foreground focus:translate-y-0 ${focusClass}`}
      >
        {t('A11y.skip')}
      </a>

      <div className={`${containerClass} flex h-16 items-center justify-between gap-4`}>
        <button
          type="button"
          onClick={() => go('home')}
          className={`cursor-pointer font-heading text-lg tracking-[-0.04em] ${focusClass}`}
        >
          Helmi
        </button>

        <nav aria-label={t('A11y.primary')} className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={linkClass(item.id)}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center">
          <div className="flex items-center" role="group" aria-label={t('A11y.language')}>
            {(['en', 'fr'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center text-xs tracking-[0.14em] transition-colors duration-200 ${focusClass} ${
                  language === code ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? t('A11y.toLight') : t('A11y.toDark')}
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center text-foreground ${focusClass}`}
          >
            {isDark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
          </button>

          <button
            type="button"
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden ${focusClass}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            <span className="sr-only">{open ? t('A11y.closeMenu') : t('A11y.openMenu')}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label={t('A11y.primary')} className="border-t border-border lg:hidden">
          <div className={`${containerClass} flex flex-col py-3`}>
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={`h-12 cursor-pointer text-left font-heading text-2xl tracking-[-0.03em] ${focusClass}`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
