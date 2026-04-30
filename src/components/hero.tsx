'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/x-icon"

const phrases = [
  'AI/ML Learner',
  'Hackathon Builder',
  'Computer Vision Enthusiast',
  'B.Tech @ DTU',
  'Climate-Tech Advocate',
  'Gesture Systems Engineer',
  'Deep Learning Practitioner'
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let delay: number

    if (!isDeleting && charIndex === current.length) {
      delay = 2000
      const timeout = setTimeout(() => setIsDeleting(true), delay)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      delay = 500
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }, delay)
      return () => clearTimeout(timeout)
    }

    delay = isDeleting ? 40 : 70
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(current.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else {
        setTypedText(current.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen relative z-[1]">
      <Card className="w-full min-h-screen bg-black/[0.96] border-0 rounded-none relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="flex flex-col lg:flex-row h-full min-h-screen">
          {/* Left content - vertically centered */}
          <div className="flex-1 relative z-10 flex flex-col justify-center px-6 py-20 lg:px-0" style={{ paddingLeft: 'max(48px, 8vw)', paddingRight: '24px' }}>
            <div className="max-w-[600px]">
              <p className="text-[1.1rem] text-[var(--accent-cyan)] font-medium tracking-[2px] uppercase mb-3 opacity-0 animate-[fadeInUp_0.6s_ease_0.2s_forwards]">
                Hi, I&apos;m
              </p>

              <h1
                className="font-bold gradient-text mb-4 opacity-0 animate-[fadeInUp_0.6s_ease_0.4s_forwards]"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.8rem, 7vw, 5rem)', lineHeight: 1.1 }}
              >
                Rishii Kumar Singh
              </h1>

              <div className="flex items-center mb-6 min-h-[36px] opacity-0 animate-[fadeInUp_0.6s_ease_0.6s_forwards]">
                <span className="text-[var(--accent-cyan)] text-[1.2rem] font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>&gt;&nbsp;</span>
                <span className="text-[1.2rem] font-medium text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-heading)' }}>{typedText}</span>
                <span className="text-[var(--accent-cyan)] animate-[blink_1s_infinite] font-light ml-0.5">|</span>
              </div>

              <p className="text-[1.05rem] text-[var(--text-secondary)] leading-[1.8] mb-9 opacity-0 animate-[fadeInUp_0.6s_ease_0.8s_forwards]">
                B.Tech student at <strong className="text-[var(--text-primary)]">Delhi Technological University</strong> - Building AI-powered systems for
                real-world impact - Computer Vision - Machine Learning - Climate-Tech
              </p>

              <div className="flex gap-4 mb-10 opacity-0 animate-[fadeInUp_0.6s_ease_1s_forwards] flex-wrap">
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, '#projects')}
                  className="px-12 py-5 rounded-xl font-semibold text-[0.95rem] bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] text-[var(--bg-primary)] border-none hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,245,212,0.3)] transition-all duration-300 inline-flex items-center gap-2"
                >
                  {"\u00A0\u00A0View My Work\u00A0\u00A0"}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="px-12 py-5 rounded-xl font-semibold text-[0.95rem] bg-transparent text-[var(--accent-cyan)] border-2 border-[var(--accent-cyan)] hover:bg-[rgba(0,245,212,0.1)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,245,212,0.15)] transition-all duration-300 inline-flex items-center gap-2"
                >
                  {"\u00A0\u00A0Get in Touch\u00A0\u00A0"}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-5 opacity-0 animate-[fadeInUp_0.6s_ease_1.2s_forwards]">
                {[
                  { href: 'https://github.com/RishiiGamer2201', icon: GithubIcon, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/rishiikumarsingh/', icon: LinkedinIcon, label: 'LinkedIn' },
                  { href: 'https://leetcode.com/u/CrimsonHex/', icon: Code2, label: 'LeetCode' },
                  { href: 'https://x.com/RishiiSingh2201', icon: XIcon, label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,245,212,0.2)] transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Spline Robot (follows cursor) */}
          <div className="flex-1 relative hidden lg:block">
            <SplineScene
              scene="https://prod.spline.design/1QYCMRdVEbsem14T/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 w-full opacity-0 animate-[fadeInUp_0.6s_ease_1.5s_forwards]" style={{ textAlign: 'center' }}>
          <div style={{ width: '26px', height: '40px', border: '2px solid var(--text-muted)', borderRadius: '13px', margin: '0 auto', position: 'relative' }}>
            <div style={{ width: '4px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '2px', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', animation: 'scroll-wheel 2s infinite' }} />
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll Down</p>
        </div>
      </Card>
    </section>
  )
}
