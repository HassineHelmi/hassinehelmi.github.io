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
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                Crafting digital experiences with passion and precision. 
                Specialized in building modern web applications that solve real-world problems.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-800"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>{personalInfo.location}</li>
              <li>
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personalInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center text-slate-500 dark:text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
            <span>using Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};