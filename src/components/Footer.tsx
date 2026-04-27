'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { scrollToSection } from '../lib/scroll';

const FOOTER_NAV_IDS = ['home', 'about', 'projects', 'contact'] as const;

export const Footer = () => {
  const t = useTranslations();
  const personalInfo = t.raw('personalInfo') as {
    name: string;
    location: string;
  };
  const links = t.raw('links') as {
    github: string;
    linkedin: string;
    email: string;
  };
  const footerNav = t.raw('footer.navItems') as string[];

  const socialLinks = [
    { icon: Github, href: links.github, label: 'GitHub' },
    { icon: Linkedin, href: links.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${links.email}`, label: 'Email' },
  ] as const;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
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
                {t('footer.about')}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-800"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">{t('footer.navigationTitle')}</h4>
            <ul className="space-y-3">
              {footerNav.map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(FOOTER_NAV_IDS[index] ?? 'home')}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">{t('footer.contactTitle')}</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>{personalInfo.location}</li>
              <li>
                <a href={`mailto:${links.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {links.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            {t('footer.rights', { year: currentYear, name: personalInfo.name })}
          </p>
          <div className="flex items-center text-slate-500 dark:text-slate-500 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
            <span>{t('footer.andLotsOf')}</span>
            <Coffee className="h-4 w-4 text-yellow-500 mx-1 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};