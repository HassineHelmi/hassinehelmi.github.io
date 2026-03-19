
import { Navigation } from 'lucide-react';
import {
  FadeInSection,
  DynamicBackground,
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
      <DynamicBackground />
      <div className="relative z-10">
        <Navigation />
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <AboutSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <SkillsSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <ServicesSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <ProjectsSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <ResumeSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <ContactSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <Footer />
        </FadeInSection>
      </div>
    </div>
  );
}
