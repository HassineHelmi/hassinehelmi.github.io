'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './Button';

export const ResumeSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const resumePath = '/ResumeHassineHelmiEN.pdf';

  // onLoad doesn't reliably fire for PDF iframes in Chrome/Firefox
  // because the browser's PDF viewer intercepts the load event.
  // This fallback clears the overlay after a reasonable wait.
  useEffect(() => {
    const fallback = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(fallback);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Helmi_Hassine_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            My Resume
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            View my professional experience and qualifications
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
            <Button onClick={handleDownload} size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
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
              src={resumePath}
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
                <Button onClick={handleDownload}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </noscript>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Can&apos;t view the PDF? Click below to download it directly.
            </p>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
