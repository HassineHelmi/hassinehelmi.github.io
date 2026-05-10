import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { JsonLd } from "../components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const META_DESCRIPTION =
  "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.";

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hassinehelmi.github.io'),
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
    "Hire Developer",
    "Freelance"
  ],
  authors: [{ name: "Hassine Helmi", url: "https://hassinehelmi.github.io" }],
  creator: "Hassine Helmi",
  publisher: "Hassine Helmi",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Hassine Helmi - Full Stack Developer",
    description: META_DESCRIPTION,
    url: "/",
    siteName: "Hassine Helmi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassine Helmi - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassine Helmi - Full Stack Developer",
    description: META_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased w-full overflow-x-clip`}
        suppressHydrationWarning
      >
        <JsonLd />
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
