'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { name: string; id: string }[];
  onNavigate: (id: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, items, onNavigate }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const
      }
    },
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 bg-white dark:bg-slate-950 z-50 md:hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-900">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              aria-label="Close menu"
            >
              <X className="h-8 w-8 text-slate-900 dark:text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-8 space-y-2">
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => onNavigate(item.id)}
                className="group flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800/50 text-left"
              >
                <span className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.name}
                </span>
                <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* Footer Socials */}
          <motion.div 
            variants={itemVariants}
            className="p-8 bg-slate-50 dark:bg-slate-900/50"
          >
            <div className="flex justify-between items-center max-w-xs mx-auto">
              {[
                { href: personalInfo.contact.github, icon: Github, label: 'GitHub' },
                { href: personalInfo.contact.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.contact.email}`, icon: Mail, label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm group-hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700">
                    <social.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
