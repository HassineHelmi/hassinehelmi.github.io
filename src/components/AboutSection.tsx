'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '../data/data';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know more about my background and passion for technology
          </p>
        </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            className="mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Professional Photo */}
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-full">
              <motion.div
                className="relative w-80 h-80 mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Rounded square container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/profilepicture.jpg"
                    alt="Helmi Hassine - Full Stack Software Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating background elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{personalInfo.location}</span>
            </div>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 sm:pt-6">
              <motion.div
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200 dark:border-blue-700"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  3+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </div>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl border border-purple-200 dark:border-purple-700"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Projects Completed
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};