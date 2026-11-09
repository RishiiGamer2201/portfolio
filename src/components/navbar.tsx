import { Download } from 'lucide-react'
import { GithubIcon } from '@/components/icons/x-icon'

const sections = [
  { href: '#publications', label: 'Publications' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#open-source', label: 'Open source' },
]

export default function Navbar() {
  const isHome = (window.location.pathname.replace(/\/$/, '') || '/') === '/'

  return (
    <header className="topbar no-print">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a className="wordmark" href={isHome ? '#main-content' : '/'} aria-label="Rishii Kumar Singh, home">RKS</a>
      <nav aria-label="Sections">
        {sections.map((s) => (
          <a key={s.href} href={isHome ? s.href : `/${s.href}`}>{s.label}</a>
        ))}
      </nav>
      <div className="topbar-actions">
        <a className="btn ghost" href="https://github.com/RishiiGamer2201" target="_blank" rel="noreferrer">
          <GithubIcon size={15} aria-hidden="true" /> <span>GitHub</span>
        </a>
        <button type="button" className="btn solid" onClick={() => window.print()}>
          <Download size={15} aria-hidden="true" /> <span>Download PDF</span>
        </button>
      </div>
    </header>
  )
}
