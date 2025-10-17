'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services, Service } from '../data/data';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional expertise to accelerate your software projects
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              cardClass={`h-[340px] ${index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}`}
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
      className={`group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 flex flex-col h-full ${cardClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(59,130,246,0.10)' }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">{service.title}</h3>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {getServiceBullets(service.title).map((desc, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

function getServiceBullets(title: string): string[] {
  switch (title) {
    case 'Full-Stack Web Development':
      return [
        'Build scalable APIs and microservices architecture',
        'Implement secure authentication and authorization systems',
        'Optimize database performance and data modeling',
        'Set up automated CI/CD pipelines and deployment workflows',
      ];
    case 'UI/UX Development':
      return [
        'Create responsive, accessible user interfaces',
        'Convert designs into pixel-perfect, interactive components',
        'Develop reusable design systems and component libraries',
        'Ensure cross-browser compatibility and optimal performance',
      ];
    case 'Mobile App Development':
      return [
        'Develop cross-platform mobile applications',
        'Integrate cloud services, notifications, and real-time features',
        'Optimize for native performance and smooth UX',
        'Handle app store deployment and ongoing maintenance',
      ];
    case 'Cloud & DevOps':
      return [
        'Containerize applications with Docker and Kubernetes',
        'Automate deployments using modern CI/CD tools',
        'Design scalable cloud infrastructure on AWS/GCP',
        'Monitor production systems and troubleshoot issues',
      ];
    case 'AI-Powered Solutions':
      return [
        'Build ML models for NLP and computer vision applications',
        'Integrate AI capabilities into web and mobile platforms',
        'Develop intelligent automation using Python and TensorFlow',
        'Deploy and scale machine learning solutions in the cloud',
      ];
    default:
      return ['Professional software engineering services'];
  }
}