'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Certifications from '@/components/certifications'
import Achievements from '@/components/achievements'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const ParticleBackground = dynamic(() => import('@/components/particles'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}
