import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const META_DESCRIPTION =
  "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassine Helmi - Full Stack Developer",
    description: META_DESCRIPTION,
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
