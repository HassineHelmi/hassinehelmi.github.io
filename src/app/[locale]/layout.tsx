import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "../providers/theme-provider";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const META_DESCRIPTION =
  "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: "Hassine Helmi - Full Stack Developer",
    description: META_DESCRIPTION,
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
      title: "Hassine Helmi - Full Stack Developer",
      description: META_DESCRIPTION,
      type: "website",
      locale: resolvedParams.locale === 'fr' ? 'fr_FR' : 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: "Hassine Helmi - Full Stack Developer",
      description: META_DESCRIPTION,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased w-full overflow-x-clip`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
