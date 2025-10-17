'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { projects } from '../data/data';
import { useState } from 'react';
import type { Project } from '../data/data';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => openModal(project)}
            >
                {/* Real Project Screenshot */}
                <div className="h-36 sm:h-48 flex items-center justify-center relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={project.title + ' screenshot'}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover object-center rounded-t-2xl"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-gray-400 opacity-30">
                      No screenshot
                    </div>
                  )}
                </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-xs sm:text-base text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        {/* Modal for project details with animation and blurry background */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full mx-2 sm:mx-4 p-4 sm:p-8 relative flex flex-col items-center overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.8, opacity: 0, y: 80 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 80 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.2 }}
              >
                <button
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 dark:hover:text-white text-3xl font-bold"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  &times;
                </button>
                {selectedProject.screenshot && (
                  <div className="w-full mb-6 flex justify-center items-center">
                    <Image
                      src={selectedProject.screenshot}
                      alt={selectedProject.title + ' screenshot'}
                      width={800}
                      height={600}
                      className="w-full max-h-[60vh] object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                )}
                <h3 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                  {selectedProject.description}
                </p>
                <button
                  className="mt-2 px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors w-full max-w-xs"
                  onClick={closeModal}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>

        <motion.div
          className="text-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/HassineHelmi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};