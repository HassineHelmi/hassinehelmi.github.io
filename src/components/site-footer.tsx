'use client';

import { useTranslation } from '../context/LanguageContext';
import { contactInfo } from '../data/data';
import { containerClass, focusClass } from './styles';

const links = [
  { label: 'Email', href: `mailto:${contactInfo.email}` },
  { label: 'GitHub', href: contactInfo.github },
  { label: 'LinkedIn', href: contactInfo.linkedin },
];

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className={`${containerClass} flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between`}>
        <p className="text-sm text-muted-foreground">{t('Footer.rights')}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`inline-flex h-11 cursor-pointer items-center text-sm text-foreground ${focusClass}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
