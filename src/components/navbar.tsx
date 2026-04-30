'use client'

import { useState, useEffect, useCallback } from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll-based active section detection (more reliable than IntersectionObserver)
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)

    const scrollPos = window.scrollY + 120 // offset for navbar + breathing room
    const sections = document.querySelectorAll('section[id]')
    let currentSection = ''

    sections.forEach((section) => {
      const el = section as HTMLElement
      const top = el.offsetTop
      const height = el.offsetHeight

      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = `#${el.id}`
      }
    })

    setActiveSection(currentSection)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,14,26,0.92)] backdrop-blur-2xl border-b border-[var(--glass-border)] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-[var(--accent-cyan)]">&lt;</span>RKS<span className="text-[var(--accent-cyan)]"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--accent-cyan)] after:to-[var(--accent-purple)] after:transition-all after:duration-300 ${
                  activeSection === item.href
                    ? 'text-[var(--accent-cyan)] after:w-full'
                    : 'text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[1001]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`w-[25px] h-[2px] bg-[var(--text-primary)] rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
          <span className={`w-[25px] h-[2px] bg-[var(--text-primary)] rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-[25px] h-[2px] bg-[var(--text-primary)] rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
        </button>

        {/* Mobile Nav */}
        <ul
          className={`md:hidden fixed top-0 ${
            mobileOpen ? 'right-0' : '-right-full'
          } w-[280px] h-screen bg-[rgba(10,14,26,0.97)] backdrop-blur-2xl flex flex-col pt-24 px-10 gap-6 transition-[right] duration-300 border-l border-[var(--glass-border)]`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? 'text-[var(--accent-cyan)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--accent-cyan)]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
