'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { contactInfo } from '../data/data';
import { containerClass, focusOnPrimaryClass } from './styles';

export function Contact() {
  const { t } = useTranslation();

  const channels = [
    { label: t('Contact.channels.phone'), href: `tel:${contactInfo.phone.replace(/\s/g, '')}`, value: contactInfo.phone },
    { label: t('Contact.channels.whatsapp'), href: contactInfo.whatsapp, value: t('Contact.channels.whatsapp'), external: true },
    { label: t('Contact.channels.linkedin'), href: contactInfo.linkedin, value: 'LinkedIn', external: true },
    { label: t('Contact.channels.github'), href: contactInfo.github, value: 'GitHub', external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-primary text-on-primary">
      <div className={`${containerClass} py-20 sm:py-28`}>
        <p className="font-heading text-sm tracking-[0.18em]">05</p>
        <h2 className="mt-3 max-w-4xl font-heading text-4xl tracking-[-0.045em] sm:text-6xl">
          {t('Contact.title')}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed">{t('Contact.subtitle')}</p>

        <a
          href={`mailto:${contactInfo.email}`}
          className={`mt-10 inline-flex cursor-pointer font-heading text-2xl tracking-[-0.04em] underline decoration-accent decoration-2 underline-offset-[10px] transition-colors duration-200 hover:decoration-on-primary sm:text-4xl ${focusOnPrimaryClass}`}
        >
          {contactInfo.email}
        </a>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <li key={channel.label}>
              <p className="text-xs tracking-[0.16em] uppercase opacity-70">{channel.label}</p>
              <a
                href={channel.href}
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`mt-2 inline-flex h-11 cursor-pointer items-center gap-1.5 text-sm ${focusOnPrimaryClass}`}
              >
                {channel.value}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
