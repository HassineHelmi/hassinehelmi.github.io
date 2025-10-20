'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ResumeSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const resumePath = '/HelmiHassineResumeEN.pdf';

  useEffect(() => {
    // Set a timeout to hide loading after 2 seconds as fallback
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
    <section id="resume" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Resume
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
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
          {/* Download Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 relative min-h-[600px] md:min-h-[800px]">
            {/* Loading Indicator - only shows while loading */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-20">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-600 dark:text-gray-400">Loading resume...</p>
                </div>
              </div>
            )}

            {/* PDF Embed - Desktop */}
            <iframe
              src={resumePath}
              className="w-full h-[600px] md:h-[800px] lg:h-[1000px]"
              title="Resume PDF Viewer"
              onLoad={() => setIsLoading(false)}
            />

            {/* Fallback Message */}
            <noscript>
              <div className="p-8 text-center bg-gray-100 dark:bg-gray-800">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  PDF preview is not available. Please download the resume to view it.
                </p>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </button>
              </div>
            </noscript>
          </div>

          {/* Additional Download Option Below */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Can&apos;t view the PDF? Click below to download it directly.
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
