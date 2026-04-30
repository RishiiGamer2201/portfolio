'use client'

import { useState } from 'react'
import { Mail, Code2, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons/x-icon'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'rishiikumarsingh2201@gmail.com', href: 'mailto:rishiikumarsingh2201@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', value: 'RishiiGamer2201', href: 'https://github.com/RishiiGamer2201' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'rishiikumarsingh', href: 'https://www.linkedin.com/in/rishiikumarsingh/' },
  { icon: Code2, label: 'LeetCode', value: 'CrimsonHex', href: 'https://leetcode.com/u/CrimsonHex/' },
  { icon: XIcon, label: 'Twitter / X', value: '@RishiiSingh2201', href: 'https://x.com/RishiiSingh2201' },
]

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f9ed0e7e-55e9-4118-a6da-8880cd399b91',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      if (res.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setFormState('idle'), 4000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 4000)
      }
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="portfolio-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">08.</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        {/* Contact intro — centered like old portfolio */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.8
          }}>
            I&apos;m always open to discussing <strong style={{ color: 'var(--accent-cyan)' }}>AI/ML projects</strong>,{' '}
            <strong style={{ color: 'var(--accent-cyan)' }}>hackathon collaborations</strong>, or{' '}
            <strong style={{ color: 'var(--accent-cyan)' }}>internship opportunities</strong>. Feel free to reach out!
          </p>

          {/* Contact cards — 5-column grid like old portfolio's 4-col but with 5 links */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px', maxWidth: '1000px', margin: '0 auto 48px'
          }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1.5 transition-all duration-300"
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
                  borderRadius: '16px', padding: '32px 20px', textAlign: 'center',
                  backdropFilter: 'var(--glass-blur)', display: 'block'
                }}
              >
                <div style={{ color: 'var(--accent-cyan)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <link.icon size={28} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>
                  {link.label}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                  {link.value}
                </p>
              </a>
            ))}
          </div>

          {/* Contact form — centered below cards */}
          <div style={{
            maxWidth: '600px', margin: '0 auto',
            background: 'var(--bg-card)', border: '1px solid var(--glass-border)',
            borderRadius: '16px', padding: '32px 28px',
            backdropFilter: 'var(--glass-blur)', textAlign: 'left'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', textAlign: 'center' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '6px', color: 'var(--text-secondary)' }}>Name</label>
                <input
                  type="text" placeholder="Your name" required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '6px', color: 'var(--text-secondary)' }}>Email</label>
                <input
                  type="email" placeholder="your@email.com" required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '6px', color: 'var(--text-secondary)' }}>Message</label>
                <textarea
                  placeholder="Your message..." required rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
                    transition: 'border-color 0.3s', resize: 'vertical', fontFamily: 'inherit'
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'submitting'}
                style={{
                  width: '100%', padding: '14px 32px', borderRadius: '8px',
                  background: 'var(--accent-gradient)', color: 'var(--bg-primary)',
                  fontWeight: 600, fontSize: '0.95rem', border: 'none', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'all 0.3s', opacity: formState === 'submitting' ? 0.6 : 1
                }}
              >
                {formState === 'submitting' && <span className="loader" style={{ width: 16, height: 16, borderWidth: 2 }} />}
                {formState === 'success' && <><CheckCircle size={16} /> Sent!</>}
                {formState === 'error' && <><AlertCircle size={16} /> Try Again</>}
                {formState === 'idle' && <><Send size={16} /> Submit</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
