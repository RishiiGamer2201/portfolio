'use client'

export default function Education() {
  const timeline = [
    { date: '2025 - 2029', title: 'Delhi Technological University', subtitle: 'B.Tech - Environmental Engineering Technology', detail: 'SGPA: 8.90 (1st Semester)', active: true },
    { date: '2021 - 2025', title: 'FIITJEE', subtitle: 'JEE Preparatory Programme', detail: '', active: false },
    { date: '2013 - 2025', title: 'Navy Children School', subtitle: 'CBSE Board', detail: 'Class 12: 85.2% · Class 10: 89%', active: false },
  ]

  const scores = [
    { exam: 'JEE Main 2025', value: 'AIR 64,047', highlight: false },
    { exam: 'B.Tech Sem 1', value: '8.90 SGPA', highlight: true },
    { exam: 'BITSAT 2025', value: '191 Score', highlight: false },
    { exam: 'MET 2025', value: 'Rank 8,913', highlight: false },
    { exam: 'VITEEE 2025', value: 'Rank 33,914', highlight: false },
    { exam: 'NSAT 2025', value: '7.51 / 10', highlight: false },
    { exam: 'NDA (Qualified)', value: '3x Qualified', highlight: true },
    { exam: 'CBSE Class 12', value: '85.2%', highlight: true },
    { exam: 'CBSE Class 10', value: '89%', highlight: false },
  ]

  return (
    <section id="education" className="portfolio-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">05.</span>
          <h2 className="section-title">Education & Scores</h2>
        </div>

        {/* education-grid: exact old CSS — grid 1fr 1fr, gap 60px */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Timeline — exact old CSS: padding-left 32px, line at left 7px */}
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            {/* Vertical line */}
            <div style={{
              content: "''", position: 'absolute', left: '7px', top: '8px', bottom: '8px',
              width: '2px', background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent)'
            }} />

            {timeline.map((item, i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: i === timeline.length - 1 ? '0' : '40px' }}>
                {/* Timeline dot — exact old CSS: left -29px, top 6px, 14x14 */}
                <div style={{
                  position: 'absolute', left: '-29px', top: '6px',
                  width: '14px', height: '14px', borderRadius: '50%',
                  border: '2px solid var(--accent-cyan)', zIndex: 1,
                  background: item.active ? 'var(--accent-cyan)' : 'var(--bg-primary)',
                  boxShadow: item.active ? '0 0 12px rgba(0, 245, 212, 0.5)' : 'none'
                }} />
                <div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    {item.date}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    {item.subtitle}
                  </p>
                  {item.detail && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Scores — exact old CSS: scores-heading + 2-col grid gap 12px */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '24px', textAlign: 'center' }}>
              Examination Scores
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {scores.map((s) => (
                <div
                  key={s.exam}
                  style={{
                    background: s.highlight ? 'rgba(0, 245, 212, 0.05)' : 'var(--bg-card)',
                    border: `1px solid ${s.highlight ? 'rgba(0, 245, 212, 0.3)' : 'var(--glass-border)'}`,
                    borderRadius: '12px',
                    padding: '18px 16px',
                    textAlign: 'center',
                    backdropFilter: 'var(--glass-blur)',
                    transition: 'var(--transition)',
                    cursor: 'default'
                  }}
                  className="hover:border-[var(--border-glow)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '6px' }}>
                    {s.exam}
                  </span>
                  <span
                    className={s.highlight ? 'gradient-text' : ''}
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: s.highlight ? undefined : 'var(--text-primary)' }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
