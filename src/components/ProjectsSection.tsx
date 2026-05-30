'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Github, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { getProjects } from '../data/data';
import type { Project } from '../data/data';
import { useTranslation } from '../context/LanguageContext';
import { Button } from './Button';

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */

const modalTransition = { type: 'spring', damping: 25, stiffness: 300 } as const;

const ProjectModal = ({
  project,
  onClose,
  t
}: {
  project: Project;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}) => {
  /** Lock body scroll while the modal is mounted */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /** Close on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      <motion.div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh]"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={modalTransition}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-black transition-colors"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          {project.screenshot && (
            <div
              className={`w-full max-h-[75dvh] overflow-y-auto overflow-x-hidden custom-scrollbar ${
                project.screenshotBgClass ?? 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              <Image
                src={project.screenshot}
                alt={`${project.title} - project screenshot`}
                width={1920}
                height={1080}
                sizes="100vw"
                className="block w-full h-auto"
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              {project.github && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              )}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  {t('Projects.keyFeatures')}
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  {t('Projects.technologies')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Project Card                                                       */
/* ------------------------------------------------------------------ */

const ProjectCard = ({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) => {
  // Calculate top offset for stickiness. 
  // Base offset is 6rem (96px). Each subsequent card is offset by 2rem (32px) more.
  const stickyTop = `calc(6rem + ${index * 2}rem)`;

  return (
    <motion.div
      className="sticky w-full"
      style={{ top: stickyTop }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-auto md:h-[550px] mb-[10vh]"
        onClick={() => onSelect(project)}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10 bg-white dark:bg-slate-900">
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors duration-300">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 line-clamp-4 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl border border-slate-100 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl border border-slate-100 dark:border-slate-700">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Image / Visuals */}
        <div
          className={`relative w-full md:w-1/2 h-72 md:h-full overflow-hidden ${
            project.screenshotBgClass ?? 'bg-slate-100 dark:bg-slate-800'
          }`}
        >
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={`${project.title} - project screenshot`}
              width={1000}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              No Preview Available
            </div>
          )}
          {/* Subtle gradient overlay to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent md:bg-gradient-to-l md:from-white/10 md:dark:from-slate-900/10 md:to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export const ProjectsSection = () => {
  const { t, raw } = useTranslation();
  const projects = getProjects(raw);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t('Projects.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {t('Projects.subtitle')}
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative flex flex-col w-full pb-[5vh]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-20 md:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/HassineHelmi', '_blank')}
            className="rounded-full px-8 py-6 text-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
          >
            <Github className="mr-3 h-6 w-6" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} t={t} />
        )}
      </AnimatePresence>
    </section>
  );
};