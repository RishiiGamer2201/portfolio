'use client'

import { ExternalLink, Play } from 'lucide-react'
import { GithubIcon } from '@/components/icons/x-icon'

const projects = [
  {
    id: 'project-jarvis',
    name: 'Jarvis - Voice & Gesture Control',
    desc: 'A complete hands-free desktop control system combining voice recognition and computer vision. 99%+ gesture accuracy using MediaPipe & KNN with real-time model training and a Flask web dashboard.',
    tech: ['Python', 'MediaPipe', 'Flask', 'KNN', 'SocketIO'],
    metrics: [
      { value: '99.54%', label: 'accuracy' },
      { value: '3,261', label: 'training samples' },
      { value: '<50ms', label: 'latency' },
    ],
    links: { demo: 'https://www.youtube.com/watch?v=thcPBI7ImGQ', github: 'https://github.com/RishiiGamer2201/gesture-desktop-control' },
    gradient: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #1a1a4e 100%)',
  },
  {
    id: 'project-drone',
    name: 'Gesture-Controlled Drone System',
    desc: 'Real-time hand gesture recognition for autonomous drone control. Recognizes 10+ static gestures, dynamic motions, and two-hand coordination with AR overlays and telemetry display.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'CNN'],
    metrics: [
      { value: '92%+', label: 'accuracy' },
      { value: '25-30', label: 'FPS' },
      { value: '10+', label: 'gestures' },
    ],
    links: { demo: 'https://www.youtube.com/watch?v=5L6JxpySPoc', github: 'https://github.com/RishiiGamer2201/gesture_drone_project' },
    gradient: 'linear-gradient(135deg, #0d2137 0%, #0a2e1f 50%, #1a3a2e 100%)',
  },
  {
    id: 'project-hackathon',
    name: 'Cracking Hackathons - AI Copilot',
    desc: 'Web-based AI copilot that eliminates the "decision-making bottleneck" in hackathons by helping teams select winnable problem statements using Gemini 1.5 Pro and agentic workflows.',
    tech: ['Gemini API', 'Tailwind CSS', 'Agentic AI', 'OnDemand API'],
    metrics: [
      { value: '24-48h', label: 'window' },
      { value: 'Agentic', label: 'workflow' },
      { value: 'Auto', label: 'media gen' },
    ],
    links: { live: 'https://rishiigamer2201.github.io/Hack-PS/', github: 'https://github.com/RishiiGamer2201/Hack-PS' },
    gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1a1145 50%, #0f1a3e 100%)',
  },
  {
    id: 'project-movie',
    name: 'Movie Ticket Booking System',
    desc: 'Command-line movie ticket booking system with intuitive booking flow, data validation, and modular coding. Supports booking, modification, and cancellation of tickets.',
    tech: ['Python', 'CLI', 'Data Validation', 'Modular Design'],
    metrics: [
      { value: 'Class 12', label: 'project' },
      { value: 'Full CRUD', label: 'ops' },
      { value: 'Modular', label: 'code' },
    ],
    links: { live: 'https://drive.google.com/drive/folders/1_5UJIY0YNrbr-vUyAsUBjJCL3ua2CP8K' },
    gradient: 'linear-gradient(135deg, #3d1b1b 0%, #2a1530 50%, #1a1040 100%)',
  },
]

function CpuSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* projects-grid: exact old CSS — 2 cols, gap 30px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow),var(--shadow-card)] hover:-translate-y-1.5 transition-all duration-300"
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
                borderRadius: '20px', overflow: 'hidden',
                backdropFilter: 'var(--glass-blur)'
              }}
            >
              {/* Project Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: project.gradient }}>
                  <CpuSvg className="w-16 h-16 opacity-60 group-hover:opacity-100 group-hover:scale-[1.15] transition-all duration-300 text-[var(--accent-cyan)]" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ position: 'absolute', inset: 0, background: 'rgba(10,14,26,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all duration-300" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                        <Play size={20} />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all duration-300" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:bg-[var(--accent-cyan)] hover:text-[var(--bg-primary)] transition-all duration-300" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                        <GithubIcon width={20} height={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info — exact old CSS: padding 28px */}
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ padding: '4px 12px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 500, background: 'rgba(123,47,247,0.12)', color: '#b388ff', fontFamily: 'var(--font-heading)' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--glass-border)' }}>
                  {project.metrics.map((m) => (
                    <span key={m.label} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <strong style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{m.value}</strong> {m.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
