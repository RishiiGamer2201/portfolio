'use client'

const stats = [
  { number: '8.90', suffix: '', label: 'SGPA at DTU' },
  { number: '99', suffix: '%+', label: 'Gesture Accuracy' },
  { number: '14', suffix: '+', label: 'Certifications' },
  { number: '6', suffix: '+', label: 'Hackathons' },
]

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* about-grid: responsive columns, gap 40px to 60px */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-[60px] items-start">
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1.02rem' }}>
              I&apos;m a B.Tech student at <strong style={{ color: 'var(--accent-cyan)' }}>Delhi Technological University</strong> specializing
              in Environmental Engineering, with a deep passion for <strong style={{ color: 'var(--accent-cyan)' }}>AI/ML</strong>,{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>Computer Vision</strong>, and <strong style={{ color: 'var(--accent-cyan)' }}>Robotics</strong>.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1.02rem' }}>
              I love building systems that bridge the gap between cutting-edge technology and real-world challenges. From engineering a
              gesture-controlled drone system with <strong style={{ color: 'var(--accent-cyan)' }}>92%+ accuracy</strong> to developing Jarvis - an AI-powered
              desktop control system with <strong style={{ color: 'var(--accent-cyan)' }}>99%+ gesture recognition</strong> - I&apos;m driven by the thrill of turning
              complex ideas into working solutions.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1.02rem' }}>
              During my internship at <strong style={{ color: 'var(--accent-cyan)' }}>Artha Labs</strong>, I developed geospatial accessibility
              models using Python & QGIS for HP Healthcare, identifying underserved healthcare regions and driving data-backed policy planning.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
              I&apos;m an active contributor at <strong style={{ color: 'var(--accent-cyan)' }}>AIMS-DTU</strong>, regularly participating in
              hackathons where I thrive under pressure to ship innovative solutions. I&apos;m seeking roles in AI/ML, Robotics, or Climate-Tech
              where I can deploy Computer Vision and Real-Time Systems for measurable &quot;Tech-for-Good&quot; impact.
            </p>
          </div>

          {/* Stats cards — responsive 2-col grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
                  borderRadius: '16px', padding: '28px 20px', textAlign: 'center',
                  backdropFilter: 'var(--glass-blur)'
                }}
              >
                <span className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 700 }}>
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600 }}>
                    {stat.suffix}
                  </span>
                )}
                <span style={{ display: 'block', marginTop: '8px', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
