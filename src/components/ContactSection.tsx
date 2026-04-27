'use client';

import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from './Button';

export const ContactSection = () => {
  const t = useTranslations();
  const links = t.raw('links') as {
    email: string;
    phone: string;
    whatsapp: string;
    linkedin: string;
    github: string;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t('contact.methods.email.label'),
      value: links.email,
      href: `mailto:${links.email}`,
      color: 'bg-blue-500',
    },
    {
      icon: Phone,
      label: t('contact.methods.phone.label'),
      value: links.phone,
      href: `tel:${links.phone}`,
      color: 'bg-green-500',
    },
    {
      icon: MessageSquare,
      label: t('contact.methods.whatsapp.label'),
      value: t('contact.methods.whatsapp.value'),
      href: links.whatsapp,
      color: 'bg-emerald-500',
    },
    {
      icon: Linkedin,
      label: t('contact.methods.linkedin.label'),
      value: t('contact.methods.linkedin.value'),
      href: links.linkedin,
      color: 'bg-blue-700',
    },
    {
      icon: Github,
      label: t('contact.methods.github.label'),
      value: t('contact.methods.github.value'),
      href: links.github,
      color: 'bg-slate-800',
    },
  ] as const;

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t('contact.badge')}
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => { window.location.href = `mailto:${links.email}`; }}
              size="lg"
              className="group text-lg px-8 py-4 rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('contact.sayHello')}
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