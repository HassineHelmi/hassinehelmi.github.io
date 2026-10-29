'use client';

import { useTranslation } from '../context/LanguageContext';
import { getSkillCategories } from '../data/data';
import { SectionHeading } from './section-heading';
import { containerClass } from './styles';

export function About() {
  const { t } = useTranslation();
  const categories = getSkillCategories(t);

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className={containerClass}>
        <SectionHeading index="04" title={t('About.title')} summary={t('About.subtitle')} />
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground">{t('About.bio')}</p>

        <div className="mt-16 border-t border-border pt-10">
          <h3 className="font-heading text-2xl tracking-[-0.03em]">{t('Skills.title')}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t('Skills.subtitle')}</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.title}>
                <h4 className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{category.title}</h4>
                <ul className="mt-4 space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="font-heading text-lg tracking-[-0.03em] text-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
