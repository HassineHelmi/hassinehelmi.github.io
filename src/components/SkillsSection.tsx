'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';

export const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const bubbleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3
      }
    }
  };

  // Get all skills from all categories, but remove category info and filter out all categories
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {allSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-bubble`}
                className="group relative"
                variants={bubbleVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center bg-white dark:bg-gray-900 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Content: Only logo and title */}
                  <div className="relative z-10 flex items-center">
                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600 dark:text-blue-400 mr-2 sm:mr-3 md:mr-4 transition-colors duration-300" />
                    <span className="text-xs sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};