'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.contact.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-2 sm:mb-4">
              {personalInfo.title}
            </p>
            <p className="text-gray-400 text-sm">
              Building digital experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2" role="navigation" aria-label="Footer">
              {['About', 'Skills', 'Services', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                  aria-label={`Go to ${item}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Let&apos;s Connect</h4>
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              {personalInfo.location}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-2 md:mb-0">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">
            Built with Next.js & TailwindCSS
          </div>
        </motion.div>
      </div>
    </footer>
  );
};