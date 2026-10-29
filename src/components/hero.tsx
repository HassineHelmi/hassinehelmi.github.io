'use client';

import Image from 'next/image';
import { useTranslation } from '../context/LanguageContext';
import { contactInfo } from '../data/data';
import { containerClass, primaryActionClass, secondaryActionClass } from './styles';

const resumePath = (language: string) =>
  language === 'fr' ? '/ResumeHassineHelmiFR.pdf' : '/ResumeHassineHelmiEN.pdf';

export function Hero() {
  const { t, language } = useTranslation();

  return (
    <section id="home" className="scroll-mt-20 py-16 sm:py-24">
      <div className={containerClass}>
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {t('Hero.title')}
            </p>
            <h1 className="mt-5 font-heading text-[clamp(4.25rem,11vw,8.5rem)] leading-[0.86] tracking-[-0.055em] text-foreground">
              Helmi
              <br />
              Hassine
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t('Hero.lede')}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className={primaryActionClass}>
                {t('Hero.viewProjects')}
              </a>
              <a href={resumePath(language)} download className={secondaryActionClass}>
                {t('Hero.downloadCv')}
              </a>
            </div>
          </div>

          <figure className="max-w-sm bg-white lg:col-span-5 lg:max-w-none lg:justify-self-end">
            <Image
              src="/profilepicture.jpg"
              alt={t('Hero.portraitAlt')}
              width={1012}
              height={810}
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="aspect-[4/5] w-full border border-border object-cover object-[72%_18%]"
            />
          </figure>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{t('Hero.based')}</dt>
            <dd className="mt-2 text-sm text-foreground">{t('About.location')}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{t('Hero.focus')}</dt>
            <dd className="mt-2 text-sm text-foreground">{t('Hero.focusValue')}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{t('Hero.status')}</dt>
            <dd className="mt-2 text-sm text-foreground">{t('Hero.statusValue')}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{t('Contact.channels.email')}</dt>
            <dd className="mt-2 text-sm">
              <a
                href={`mailto:${contactInfo.email}`}
                className="cursor-pointer break-all text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
              >
                {contactInfo.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
