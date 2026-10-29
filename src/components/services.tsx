'use client';

import { useTranslation } from '../context/LanguageContext';
import { getServices } from '../data/data';
import { SectionHeading } from './section-heading';
import { containerClass } from './styles';

export function Services() {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
      <div className={containerClass}>
        <SectionHeading index="02" title={t('Services.title')} summary={t('Services.subtitle')} />

        <div className="mt-10 border-t border-border">
          {services.map((service, index) => (
            <article key={service.title} className="grid gap-4 border-b border-border py-10 lg:grid-cols-12 lg:gap-12">
              <p className="font-heading text-sm tracking-[0.18em] text-accent-text lg:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className="lg:col-span-5">
                <h3 className="font-heading text-2xl tracking-[-0.03em] text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-6">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm leading-relaxed text-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {service.technologies.join('  ·  ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
