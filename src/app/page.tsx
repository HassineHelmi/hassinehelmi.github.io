'use client';

import {
  ProgressBar,
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
  Footer
} from '../components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}