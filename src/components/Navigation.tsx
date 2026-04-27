'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { MobileMenu } from './MobileMenu';
import { LanguageToggle } from './LanguageToggle';
import { scrollToSection } from '../lib/scroll';

type NavItem = { name: string; id: string };

export const Navigation = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = t.raw('navigation.items') as NavItem[];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label={t('navigation.aria.primary')}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`mx-auto transition-all duration-300 rounded-2xl px-6 py-3 flex justify-between items-center ${
              isScrolled
                ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-slate-200 dark:border-slate-800 max-w-5xl'
                : 'bg-transparent max-w-7xl'
            }`}
          >
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigate('home')}
            >
              {t('navigation.brand')}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full transition-all duration-200"
                    aria-label={t('navigation.ariaGoTo', { section: item.name })}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                aria-label={t('navigation.aria.toggleMenu')}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navItems}
        onNavigate={handleNavigate}
      />
    </>
  );
};
