'use client'

import { Zap, Brain, Eye, Wrench, Cloud, Target } from 'lucide-react'

const skillCategories = [
  {
    icon: Zap,
    title: 'Languages',
    skills: ['C++', 'C', 'Python', 'SQL', 'HTML/CSS', 'JavaScript', 'TypeScript'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'KNN / CNN / ANN', 'Gemini API', 'NLP', 'Reinforcement Learning', 'Deep Learning'],
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    skills: ['OpenCV', 'MediaPipe', 'Hand Tracking', 'Gesture Recognition', 'AR Overlays'],
  },
  {
    icon: Wrench,
    title: 'Tools & Frameworks',
    skills: ['Flask', 'QGIS', 'NumPy', 'Git / GitHub', 'Tailwind CSS', 'Bootstrap', 'Next.js', 'React'],
  },
  {
    icon: Cloud,
    title: 'Platforms & APIs',
    skills: ['AWS Cloud', 'Google Speech API', 'SocketIO', 'OnDemand API', 'Kaggle', 'Web3Forms'],
  },
  {
    icon: Target,
    title: 'Domains',
    skills: ['Robotics', 'Drone Systems', 'Geospatial Analysis', 'Climate-Tech', 'Voice Assistants'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section section-alt-bg">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        {/* skills-grid: exact old CSS — 3 cols, gap 24px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300"
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
                borderRadius: '16px', padding: '32px 28px',
                backdropFilter: 'var(--glass-blur)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <cat.icon className="text-[var(--accent-cyan)]" size={26} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600 }}>{cat.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="hover:bg-[rgba(0,245,212,0.15)] hover:border-[var(--accent-cyan)] hover:-translate-y-0.5 transition-all duration-300"
                    style={{
                      padding: '6px 14px', borderRadius: '20px',
                      fontSize: '0.82rem', fontWeight: 500,
                      background: 'rgba(0, 245, 212, 0.08)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid rgba(0, 245, 212, 0.15)',
                      cursor: 'default'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
