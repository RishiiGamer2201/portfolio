'use client'

import { Briefcase, Users } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section section-alt-bg">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">04.</span>
          <h2 className="section-title">Internships & Experience</h2>
        </div>

        {/* experience-grid: exact old CSS — max-width 800px, gap 24px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
          {/* Artha Labs */}
          <div
            className="hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
              borderRadius: '16px', padding: '32px 28px',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <Briefcase className="text-[var(--accent-cyan)]" size={32} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2px' }}>
                  Ex-Intern @ Artha Labs
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>Intern - 2025</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              Developed geospatial accessibility models using Python & QGIS for HP Healthcare, identifying
              underserved healthcare regions and driving data-backed policy planning.
            </p>
            <span style={{
              fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-cyan)',
              textTransform: 'uppercase', letterSpacing: '1.5px',
              padding: '4px 14px', border: '1px solid rgba(0,245,212,0.2)',
              borderRadius: '20px', display: 'inline-block'
            }}>Professional</span>
          </div>

          {/* AIMS-DTU */}
          <div
            className="hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
              borderRadius: '16px', padding: '32px 28px',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <Users className="text-[var(--accent-cyan)]" size={32} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2px' }}>
                  AIMS-DTU
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>Active Member - Research</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
              Active contributor to AI/ML projects, research initiatives, hackathon builds, and open-source development at DTU&apos;s top
              technical society.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '16px' }}>
              &quot;Knowledge transfer, Revolutionising research, Conquering Hackathons&quot;
            </p>
            <span style={{
              fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-cyan)',
              textTransform: 'uppercase', letterSpacing: '1.5px',
              padding: '4px 14px', border: '1px solid rgba(0,245,212,0.2)',
              borderRadius: '20px', display: 'inline-block'
            }}>Society</span>
          </div>
        </div>
      </div>
    </section>
  )
}
