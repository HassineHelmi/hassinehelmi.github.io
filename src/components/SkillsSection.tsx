'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';

export const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const bubbleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 50,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    }
  };

  // Get all skills from all categories, but remove category info and filter out all categories
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Only logo and title for each skill, no categories */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {allSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-bubble`}
                className="group relative"
                variants={bubbleVariants}
                whileHover={{ 
                  scale: 1.15,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center bg-white dark:bg-gray-900 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Content: Only logo and title */}
                  <div className="relative z-10 flex items-center">
                    <skill.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 dark:text-blue-400 mr-3 md:mr-4 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
                {/* Floating animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};