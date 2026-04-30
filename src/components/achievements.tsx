'use client'

const achievements = [
  // Existing
  {
    icon: '🏅',
    title: 'IOQM - Certificate of Merit',
    desc: 'Top 10% nationwide in the Indian Olympiad Qualifier in Mathematics (2024-25), organized by the Mathematics Teachers\' Association (India).',
    tag: 'National Level',
    featured: true,
    link: 'https://drive.google.com/file/d/1-z6ZqXkMcsqOYBGKiAw7e6T3K73ad3Sx/view',
  },
  {
    icon: '🎖️',
    title: 'NDA - 3x Qualified',
    desc: 'Successfully qualified the National Defence Academy examination conducted by UPSC three consecutive times (NDA 2 2024, NDA 1 2025, NDA 2 2025).',
    tag: 'UPSC',
    featured: false,
  },
  {
    icon: '🚀',
    title: 'India-Russia Space Dialogue 2023',
    desc: 'Participated as a Delegate in the inaugural India Russia Space Dialogue at the Russian Centre of Science and Culture, New Delhi.',
    tag: 'International',
    featured: false,
  },
  {
    icon: '🏆',
    title: 'DTU - 8.90 SGPA',
    desc: 'Achieved 8.90 SGPA in the first semester at Delhi Technological University, demonstrating strong academic performance.',
    tag: 'Academic',
    featured: true,
  },
  // NEW achievements
  {
    icon: '🧠',
    title: 'Brainwave2.0 - Qualified for Finale',
    desc: 'Qualified for the finale round in the OnDemand track at Brainwave2.0 hackathon (Jan 2026).',
    tag: 'Hackathon',
    featured: false,
  },
  {
    icon: '📊',
    title: 'CaseQuest \'26 Finalist',
    desc: 'AI-First Strategy case competition finalist by DTU Consulting Group x IEEE DTU at Invictus \'26.',
    tag: 'Case Competition',
    featured: false,
  },
  {
    icon: '🥇',
    title: 'BITS APOGEE 2026 - Green Tag 1st',
    desc: 'Won 1st Position in Green Tag at BITS Pilani APOGEE 2026 with DisasterOS - a disaster prediction platform.',
    tag: 'Competition',
    featured: true,
  },
  {
    icon: '🥉',
    title: 'BITS APOGEE 2026 - ArmorIQ Top 3',
    desc: 'Finalist (Top 3) in ArmorIQ at BITS APOGEE 2026 with an LLM policy enforcement webapp (Instinct).',
    tag: 'Hackathon',
    featured: true,
  },
  {
    icon: '🏥',
    title: 'BITS APOGEE - Curebay Hackathon',
    desc: 'Built an Android app for healthcare workers at the Curebay Hackathon, BITS APOGEE 2026. Result Awaited.',
    tag: 'Hackathon',
    featured: false,
  },
  {
    icon: '🤖',
    title: 'BITS APOGEE - Devswarm Hackathon',
    desc: 'Built a multi-agent website builder (PolyAgent CI) at the Devswarm Hackathon, BITS APOGEE 2026. Result Awaited.',
    tag: 'Hackathon',
    featured: false,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="portfolio-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">07.</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        {/* achievements-grid: 3 cols to fit more content nicely, gap 24px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {achievements.map((a) => (
            <div
              key={a.title}
              className="hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300"
              style={{
                background: a.featured ? 'rgba(0, 245, 212, 0.04)' : 'var(--bg-card)',
                border: `1px solid ${a.featured ? 'rgba(0, 245, 212, 0.25)' : 'var(--glass-border)'}`,
                borderRadius: '16px', padding: '32px 24px', textAlign: 'center',
                backdropFilter: 'var(--glass-blur)', position: 'relative',
                cursor: a.link ? 'pointer' : 'default'
              }}
              onClick={() => a.link && window.open(a.link, '_blank')}
            >
              {a.featured && (
                <span style={{ position: 'absolute', top: '12px', right: '16px', fontSize: '1rem', color: 'var(--accent-cyan)' }}>★</span>
              )}
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{a.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '12px' }}>
                {a.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                {a.desc}
              </p>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-cyan)',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                padding: '4px 14px', border: '1px solid rgba(0,245,212,0.2)',
                borderRadius: '20px', display: 'inline-block'
              }}>{a.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
