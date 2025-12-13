'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/data';
import { useCallback } from 'react';
import { Button } from './Button';

import { ParallaxElement } from './ParallaxElement';

export const ContactSection = () => {
  const handleEmailClick = useCallback(() => {
    window.location.href = `mailto:${personalInfo.contact.email}`;
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone}`,
      color: 'bg-green-500'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Message me',
      href: personalInfo.contact.whatsapp,
      color: 'bg-emerald-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect',
      href: personalInfo.contact.linkedin,
      color: 'bg-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Follow',
      href: personalInfo.contact.github,
      color: 'bg-slate-800'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxElement speed={0.2} className="absolute top-1/4 -left-20">
          <div className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
        </ParallaxElement>
        <ParallaxElement speed={-0.1} className="absolute bottom-1/4 -right-20">
          <div className="w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
        </ParallaxElement>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ✨ Let&apos;s Create Something Amazing
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Ready to start your next project?
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently available for freelance work and open to new opportunities. 
            If you have a project that needs some creative touch, I&apos;d love to hear about it.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={handleEmailClick}
              size="lg"
              className="group text-lg px-8 py-4 rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                {method.label}
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {method.value}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};