import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hassine Helmi - Full Stack Developer",
  description: "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Spring Boot", "Java", "JavaScript", "TypeScript", "Tunisia"],
  authors: [{ name: "Hassine Helmi" }],
  openGraph: {
    title: "Hassine Helmi - Full Stack Developer",
    description: "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassine Helmi - Full Stack Developer",
    description: "Full Stack Developer from Monastir, Tunisia. Specialized in Java, JavaScript, React, Spring Boot, and modern web technologies.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
