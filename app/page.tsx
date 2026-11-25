import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AmbientDepthBackground from "@/components/layout/AmbientDepthBackground";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import StructuredData from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="relative min-h-screen bg-[#111318] text-[#F5F5F6] flex flex-col">
        <AmbientDepthBackground />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#F5F5F6] focus:text-[#111318] focus:text-sm focus:font-medium focus:rounded-md"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" className="relative z-10 flex-1">
          <HeroSection />
          <WorkSection />
          <ExperienceSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
