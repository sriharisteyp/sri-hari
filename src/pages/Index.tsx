
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SideSocialLinks from '@/components/SideSocialLinks';
import SideEmail from '@/components/SideEmail';

const Index = () => {
  return (
    <div className="bg-portfolio-navy min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <SideSocialLinks />
      <SideEmail />
      <Footer />
    </div>
  );
};

export default Index;
