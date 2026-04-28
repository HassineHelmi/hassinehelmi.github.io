'use client';

import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Button } from './Button';

export const ResumeSection = () => {
  const { t, language } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const RESUME_PATH = language === 'fr' ? '/ResumeHassineHelmiFR.pdf' : '/ResumeHassineHelmiEN.pdf';
  const RESUME_DOWNLOAD_NAME = language === 'fr' ? 'Helmi_Hassine_CV.pdf' : 'Helmi_Hassine_Resume.pdf';

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
            {t('Resume.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t('Resume.subtitle')}
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
              onClick={() => window.open(RESUME_PATH, '_blank')}
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {t('Resume.downloadButton')}
            </Button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative min-h-[400px] sm:min-h-[500px] md:min-h-[800px]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-950 z-20">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-slate-600 dark:text-slate-400">Loading resume...</p>
                </div>
              </div>
            )}

            <iframe
              src={RESUME_PATH}
              className="w-full h-[400px] sm:h-[500px] md:h-[800px] lg:h-[1000px]"
              title="Resume PDF Viewer"
              onLoad={() => setIsLoading(false)}
            />

            <noscript>
              <div className="p-8 text-center bg-slate-100 dark:bg-slate-800">
                <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  PDF preview is not available. Please download the resume to view it.
                </p>
                <a href={RESUME_PATH} download={RESUME_DOWNLOAD_NAME}>
                  <Button>
                    <Download className="mr-2 h-5 w-5" />
                    {t('Resume.downloadButton')}
                  </Button>
                </a>
              </div>
            </noscript>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Can&apos;t view the PDF? Click below to download it directly.
            </p>
            <a href={RESUME_PATH} download={RESUME_DOWNLOAD_NAME}>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
