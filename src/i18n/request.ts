import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const SUPPORTED_LOCALES = ['en', 'fr'] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const isSupportedLocale = (value: string): value is SupportedLocale =>
  SUPPORTED_LOCALES.includes(value as SupportedLocale);

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value;

  const locale =
    localeFromCookie && isSupportedLocale(localeFromCookie)
      ? localeFromCookie
      : 'en';

    return {
      locale,
      messages: (await import(`../messages/${locale}/common.json`)).default,
  };
});
