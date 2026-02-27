
import {
  ProgressBar,
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
  ProjectsSection,
  ResumeSection,
  ContactSection,
  Footer
} from '../components';

export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-x-clip">
      {/* Single continuous decorative background — spans the full page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[28%] right-[5%] w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[52%] left-[20%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[76%] right-[15%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      </div>
      <ProgressBar />
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
  );
}
