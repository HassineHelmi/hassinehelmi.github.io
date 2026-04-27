'use client';

import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from './Button';

export const ResumeSection = () => {
  const t = useTranslations();
  const locale = useLocale();
  const normalizedLocale = locale === 'fr' ? 'fr' : 'en';
  const resumeSuffix = normalizedLocale.toUpperCase();
  const resumePath = `/ResumeHassineHelmi${resumeSuffix}.pdf`;

  const [isLoading, setIsLoading] = useState(true);

  /**
   * PDF `onLoad` doesn't reliably fire in Chrome/Firefox because the
   * built-in PDF viewer intercepts the event. Use a timeout fallback.
   */
  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="resume" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('resume.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t('resume.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <Button
              onClick={() => window.open(resumePath, '_blank')}
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {t('resume.downloadResume')}
            </Button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative min-h-[400px] sm:min-h-[500px] md:min-h-[800px]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-950 z-20">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-slate-600 dark:text-slate-400">{t('resume.loading')}</p>
                </div>
              </div>
            )}

            <iframe
              src={resumePath}
              className="w-full h-[400px] sm:h-[500px] md:h-[800px] lg:h-[1000px]"
              title={t('resume.viewerTitle')}
              onLoad={() => setIsLoading(false)}
            />

            <noscript>
              <div className="p-8 text-center bg-slate-100 dark:bg-slate-800">
                <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t('resume.noPreview')}
                </p>
                <a href={resumePath} download={t('resume.downloadName')}>
                  <Button>
                    <Download className="mr-2 h-5 w-5" />
                    {t('resume.downloadResume')}
                  </Button>
                </a>
              </div>
            </noscript>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {t('resume.cantView')}
            </p>
            <a href={resumePath} download={t('resume.downloadName')}>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                {t('resume.downloadPdf')}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
