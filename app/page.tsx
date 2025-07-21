"use client"
import { Suspense } from "react"
import Navigation from "@/components/layout/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import EducationSection from "@/components/sections/EducationSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/layout/Footer"
import BackgroundEffects from "@/components/ui/BackgroundEffects"
import CustomCursor from "@/components/ui/CustomCursor"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import StructuredData from "@/components/seo/StructuredData"

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
        <BackgroundEffects />
        <CustomCursor />

        <Navigation />

        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <ExperienceSection />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <SkillsSection />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <EducationSection />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <ContactSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  )
}
