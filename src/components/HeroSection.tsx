'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/data';
import { useCallback } from 'react';

export const HeroSection = () => {
  const scrollToAbout = useCallback(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-gray-800 pt-16 sm:pt-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <span className="text-lg font-medium">👋</span>
            <span className="text-lg font-medium">Hello, I&apos;m</span>
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {personalInfo.title}
          </motion.h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-16 w-full">
            <button
              onClick={() => scrollToAbout()}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="w-12 h-12 bg-gray-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 group-hover:text-blue-400 transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
};