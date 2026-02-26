'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '../data/data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const chipContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* 2×2 category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Card top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

                <div className="p-6">
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                      <CategoryIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill chips */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={chipContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                  >
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          variants={chipVariants}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-lg transition-colors duration-200 cursor-default"
                        >
                          <SkillIcon className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
