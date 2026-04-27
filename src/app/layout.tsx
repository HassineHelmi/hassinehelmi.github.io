import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const metaDescription = t('meta.description');

  return {
    title: t('meta.title'),
    description: metaDescription,
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Spring Boot",
    "Java",
    "JavaScript",
    "TypeScript",
    "Tunisia",
  ],
  authors: [{ name: "Hassine Helmi" }],
  openGraph: {
    title: t('meta.title'),
    description: metaDescription,
    type: "website",
    locale: (await getLocale()) === 'fr' ? 'fr_FR' : 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: t('meta.title'),
    description: metaDescription,
  },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased w-full overflow-x-clip`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
