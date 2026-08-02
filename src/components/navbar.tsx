'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#activity', label: 'Activity' },
  { href: '#stack', label: 'Stack' },
  { href: '#education', label: 'Education' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = (window.location.pathname.replace(/\/$/, '') || '/') === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-shell">
        <a className="wordmark" href={isHome ? '#home' : '/'} aria-label="Rishii Kumar Singh, home">
          <span>RKS</span>
          <span className="wordmark-label">Rishii Kumar Singh</span>
        </a>

        <nav id="primary-navigation" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a href={isHome ? link.href : `/${link.href}`} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="nav-contact" href={isHome ? '#contact' : '/#contact'} onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
