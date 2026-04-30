'use client'

import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons/x-icon'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--glass-border)] relative z-[1]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-[var(--accent-cyan)]">&lt;</span>Rishii Kumar Singh<span className="text-[var(--accent-cyan)]"> /&gt;</span>
          </p>
          <p className="text-sm text-[var(--text-muted)]">Designed & Built with dedication - 2026</p>
          <div className="flex gap-6">
            {[
              { href: 'https://github.com/RishiiGamer2201', label: 'GitHub', icon: GithubIcon },
              { href: 'https://www.linkedin.com/in/rishiikumarsingh/', label: 'LinkedIn', icon: LinkedinIcon },
              { href: 'https://x.com/RishiiSingh2201', label: 'Twitter', icon: XIcon },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-2"
              >
                <link.icon width={16} height={16} /> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
