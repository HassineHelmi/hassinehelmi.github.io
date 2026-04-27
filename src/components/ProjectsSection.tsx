'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getProjects } from '../data/data';
import type { Project } from '../data/data';
import { useTranslations } from 'next-intl';
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
                alt={project.title}
                width={1920}
                height={1080}
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
                  {t('keyFeatures')}
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
                  {t('technologies')}
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
}) => (
  <motion.div
    className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] max-w-[380px] h-full snap-start"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    onClick={() => onSelect(project)}
  >
    <div
      className={`relative h-48 overflow-hidden ${
        project.screenshotBgClass ?? 'bg-slate-100 dark:bg-slate-800'
      }`}
    >
      {project.screenshot ? (
        <Image
          src={project.screenshot}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-slate-400">
          No Preview Available
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-medium text-sm">View Details</span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} GitHub repository`}
          >
            <Github className="h-5 w-5" />
          </a>
        )}
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export const ProjectsSection = () => {
  const t = useTranslations('Projects');
  const projects = getProjects(t);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      const el = scrollerRef.current;
      if (!el) return;
      el.scrollBy({
        left: direction === 'left' ? -el.clientWidth * 0.85 : el.clientWidth * 0.85,
        behavior: 'smooth',
      });
    },
    [],
  );

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState]);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Scroll controls */}
        <div className="flex justify-end gap-3 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll projects left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll projects right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Horizontal card scroller */}
        <div
          ref={scrollerRef}
          onScroll={updateScrollState}
          className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory custom-scrollbar"
        >
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/HassineHelmi', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
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