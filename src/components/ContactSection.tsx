'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { personalInfo } from '../data/data';

export const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.contact.email}`;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Message me',
      href: personalInfo.contact.whatsapp,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.contact.linkedin,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my work',
      href: personalInfo.contact.github,
      color: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Interested in Working Together?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          {/* Primary CTA Button with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleEmailClick}
              className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <Mail className="h-6 w-6 relative z-10" />
              <span className="relative z-10">Contact Me</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <Send className="h-6 w-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Methods - Horizontal Layout */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <method.icon className="h-5 w-5 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {method.label}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};