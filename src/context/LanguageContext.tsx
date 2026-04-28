'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../common/en.json';
import fr from '../common/fr.json';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
  // For array/object raw fetching
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw: (key: string) => any;
}

const translations = { en, fr };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      setLanguageState(browserLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  const getTranslation = (path: string) => {
    const keys = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        return path;
      }
      current = current[key];
    }
    return current;
  };

  // Prevent hydration mismatch by rendering default/nothing until mounted if needed, 
  // but usually it's fine if text changes after mount.
  // Actually, we provide the default 'en' state initially.

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: getTranslation, raw: getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
