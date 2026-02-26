'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        aria-label="Primary"
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
              Helmi.dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full transition-all duration-200"
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Toggle navigation menu"
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
