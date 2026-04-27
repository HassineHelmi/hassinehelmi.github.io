'use client';

import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

type SupportedLocale = 'en' | 'fr';

const LOCALES: SupportedLocale[] = ['en', 'fr'];
const LOCALE_STORAGE_KEY = 'preferred-locale';
const LOCALE_COOKIE_KEY = 'NEXT_LOCALE';

const isSupportedLocale = (value: string | null): value is SupportedLocale =>
  !!value && LOCALES.includes(value as SupportedLocale);

const readLocaleCookie = (): string | null => {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${LOCALE_COOKIE_KEY}=`));

  if (!cookie) {
    return null;
  }

  return cookie.split('=')[1] ?? null;
};

export const LanguageToggle = () => {
  const t = useTranslations();
  const locale = useLocale() as SupportedLocale;
  const router = useRouter();

  useEffect(() => {
    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    const localeFromCookie = readLocaleCookie();

    if (
      !isSupportedLocale(localeFromCookie) &&
      isSupportedLocale(storedLocale) &&
      storedLocale !== locale
    ) {
      document.cookie = `${LOCALE_COOKIE_KEY}=${storedLocale}; path=/; max-age=31536000; samesite=lax`;
      router.refresh();
      return;
    }

    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale, router]);

  const switchLocale = (nextLocale: SupportedLocale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${LOCALE_COOKIE_KEY}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    router.refresh();
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 p-1"
      aria-label={t('navigation.language.label')}
    >
      {LOCALES.map((item) => {
        const active = locale === item;

        return (
          <button
            key={item}
            onClick={() => switchLocale(item)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
              active
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            aria-label={
              item === 'en'
                ? t('navigation.language.english')
                : t('navigation.language.french')
            }
            aria-pressed={active}
          >
            {item === 'en'
              ? t('navigation.language.english')
              : t('navigation.language.french')}
          </button>
        );
      })}
    </div>
  );
};
