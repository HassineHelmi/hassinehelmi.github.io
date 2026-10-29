'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { getProjects } from '../data/data';
import { SectionHeading } from './section-heading';
import { containerClass, focusClass } from './styles';

export function Work() {
  const { t } = useTranslation();
  const projects = getProjects(t);

  return (
    <section id="work" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className={containerClass}>
        <SectionHeading index="01" title={t('Projects.title')} summary={t('Projects.subtitle')} />

        <div className="mt-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid items-center gap-8 border-b border-border py-14 lg:grid-cols-12 lg:gap-16"
            >
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <p className="font-heading text-sm tracking-[0.18em] text-accent-text">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-heading text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground">
                      <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {project.technologies.join('  ·  ')}
                </p>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-foreground ${focusClass}`}
                  >
                    {t('Projects.sourceCode')}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                ) : null}
              </div>

              {project.screenshot ? (
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="aspect-[16/10] w-full border border-border bg-muted object-cover object-top"
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
