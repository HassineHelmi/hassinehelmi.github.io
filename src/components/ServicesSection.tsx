'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services, Service } from '../data/data';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Professional expertise to accelerate your software projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              cardClass={`lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service; index: number; cardClass?: string }> = ({ service, index, cardClass = '' }) => {
  const Icon = service.icon;
  return (
    <motion.div
      className={`group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300 hover:border-blue-300 dark:hover:border-blue-500 flex flex-col h-full ${cardClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -6, boxShadow: '0 12px 28px rgba(59,130,246,0.15)' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white leading-tight">{service.title}</h3>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
