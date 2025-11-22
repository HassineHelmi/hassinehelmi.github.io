'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/data';
import { useCallback } from 'react';
import { Button } from './Button';

export const HeroSection = () => {
  const scrollToAbout = useCallback(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000 mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500 mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="inline-block origin-bottom-right text-lg"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              👋
            </motion.span>
            <span className="text-sm font-medium">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              onClick={() => scrollToAbout()}
              size="lg"
              className="w-full sm:w-auto"
            >
              Learn More About Me
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { href: personalInfo.contact.github, icon: Github },
              { href: personalInfo.contact.linkedin, icon: Linkedin },
              { href: `mailto:${personalInfo.contact.email}`, icon: Mail }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700"
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-slate-400 hover:text-blue-500 transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium mb-2 tracking-widest uppercase opacity-70">Scroll</span>
          <ChevronDown className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
};