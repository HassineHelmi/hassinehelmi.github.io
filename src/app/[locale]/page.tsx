import {
  Navigation,
  DynamicBackground,
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
  ProjectsSection,
  ResumeSection,
  ContactSection,
  Footer,
} from '../../components';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-x-clip">
      <DynamicBackground />

      <div className="relative z-10">
        <Navigation />

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
