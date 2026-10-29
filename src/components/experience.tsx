'use client';

import { useTranslation } from '../context/LanguageContext';
import { getCertifications, getEducation, getExperiences } from '../data/data';
import { SectionHeading } from './section-heading';
import { containerClass, secondaryActionClass } from './styles';

const resumePath = (language: string) =>
  language === 'fr' ? '/ResumeHassineHelmiFR.pdf' : '/ResumeHassineHelmiEN.pdf';

export function Experience() {
  const { t, language } = useTranslation();
  const experiences = getExperiences(t);
  const education = getEducation(t);
  const certifications = getCertifications(t);

  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className={containerClass}>
        <SectionHeading index="03" title={t('Experience.title')} summary={t('Experience.subtitle')} />

        <ol className="mt-10 border-t border-border">
          {experiences.map((item) => (
            <li key={`${item.company}-${item.period}`} className="grid gap-3 border-b border-border py-8 sm:grid-cols-12 sm:gap-8">
              <p className="text-sm text-muted-foreground sm:col-span-3">{item.period}</p>
              <div className="sm:col-span-9">
                <h3 className="font-heading text-2xl tracking-[-0.03em] text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground">{item.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <p className="mt-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {item.technologies.join('  ·  ')}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="font-heading text-2xl tracking-[-0.03em]">{t('Education.title')}</h3>
            <ul className="mt-6 space-y-8">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{item.period}</p>
                  <p className="mt-2 font-heading text-xl tracking-[-0.03em]">{item.degree}</p>
                  <p className="mt-1 text-sm text-foreground">{item.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-2xl tracking-[-0.03em]">{t('Certifications.title')}</h3>
            <ul className="mt-6 space-y-8">
              {certifications.map((item) => (
                <li key={item.title}>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{item.date}</p>
                  <p className="mt-2 font-heading text-xl tracking-[-0.03em]">{item.title}</p>
                  <p className="mt-1 text-sm text-foreground">
                    {item.issuer}
                    {item.credentialId ? `  ·  ${item.credentialId}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <a href={resumePath(language)} download className={secondaryActionClass}>
            {t('Resume.downloadButton')}
          </a>
        </div>
      </div>
    </section>
  );
}
