'use client'

import { useEffect } from 'react'
import LoadingScreen from '@/components/layout/LoadingScreen'
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/layout/ScrollProgress'
import SmoothScroll from '@/components/layout/SmoothScroll'
import CustomCursor from '@/components/layout/CustomCursor'
import Particles from '@/components/ui/Particles'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CreativeWorksSection from '@/components/sections/CreativeWorksSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      document.documentElement.style.setProperty('--scroll-progress', String(progress))
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <CustomCursor />
      <Particles />
      <div className="grain-overlay" />
      <div className="scanline-overlay" />
      <div className="crt-vignette" />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CreativeWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
