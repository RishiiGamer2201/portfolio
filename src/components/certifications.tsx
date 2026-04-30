'use client'

const certifications = [
  // NEW - Deep Learning Specialization certs
  { provider: 'Coursera', name: 'Deep Learning Specialization', detail: 'Complete 5-course specialization by Andrew Ng covering CNNs, RNNs, sequence models, and optimization', date: 'Mar 2026', link: 'https://coursera.org/verify/specialization/WQ6EOXR8U51L' },
  { provider: 'Coursera', name: 'Neural Networks and Deep Learning', detail: 'Foundations of deep learning, forward and backward propagation, vectorization', date: 'Mar 2026', link: 'https://coursera.org/verify/LM7E9K9QWVFU' },
  { provider: 'Coursera', name: 'Improving Deep Neural Networks', detail: 'Hyperparameter tuning, regularization, optimization algorithms (Adam, RMSprop)', date: 'Mar 2026', link: 'https://coursera.org/verify/M0EN8WHY9ER6' },
  { provider: 'Coursera', name: 'Structuring Machine Learning Projects', detail: 'ML strategy, error analysis, transfer learning, multi-task learning', date: 'Mar 2026', link: 'https://coursera.org/verify/JVJ3X0M9GQNI' },
  { provider: 'Coursera', name: 'Sequence Models', detail: 'RNNs, LSTMs, GRUs, attention mechanisms, and transformer networks', date: 'Mar 2026', link: 'https://coursera.org/verify/9SRE1JZ4JO74' },
  // Existing certs
  { provider: 'Coursera', name: 'Convolutional Neural Networks', detail: 'Deep learning specialization focusing on CNN architectures', date: 'Mar 2026', link: 'https://www.coursera.org/account/accomplishments/verify/X0F8Y4ZKEZI5' },
  { provider: 'Coursera', name: 'Machine Learning Specialization', detail: 'Complete specialization: Supervised Learning, Advanced Algorithms, Unsupervised Learning & Reinforcement Learning', date: 'Jan 2026', link: 'https://www.coursera.org/account/accomplishments/specialization/8JFNCYJQ96M7' },
  { provider: 'Coursera', name: 'Advanced Learning Algorithms', detail: 'Neural networks, decision trees, and ensemble methods', date: 'Jan 2026', link: 'https://www.coursera.org/account/accomplishments/verify/FSY21RPN91MZ' },
  { provider: 'Coursera', name: 'Unsupervised Learning & RL', detail: 'Clustering, anomaly detection, and reinforcement learning', date: 'Jan 2026', link: 'https://www.coursera.org/account/accomplishments/verify/25DC9VR67Q0V' },
  { provider: 'Coursera', name: 'Supervised ML: Regression & Classification', detail: "Andrew Ng's foundational course on supervised learning", date: 'Dec 2025', link: 'https://www.coursera.org/account/accomplishments/verify/BWMTN6C3R8MC' },
  { provider: 'Kaggle', name: 'Intro to Machine Learning', detail: 'Hands-on ML course with practical Kaggle datasets', date: 'Oct 2025', link: 'https://www.kaggle.com/learn/certification/rishiikumarsingh/intro-to-machine-learning' },
  { provider: 'Kaggle', name: 'Intermediate Machine Learning', detail: 'Advanced ML techniques with Kaggle competitions', date: 'Oct 2025', link: 'https://www.kaggle.com/learn/certification/rishiikumarsingh/intermediate-machine-learning' },
  { provider: 'DeepLearning.AI', name: 'AI Python for Beginners', detail: 'Python programming fundamentals for AI applications', date: 'Sep 2025', link: 'https://learn.deeplearning.ai/accomplishments/cc281cfc-46cf-44ad-a4a8-c9108d72f833?usp=sharing' },
  { provider: 'CODE IIT Madras', name: 'Data Science and AI (8 Weeks)', detail: 'Comprehensive certification course in Data Science and AI', date: 'Oct 2024', link: 'https://drive.google.com/file/d/1VwFnCool9CxFYaS2EHMN1GT0KXpJ7vlO/view' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="portfolio-section section-alt-bg">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">06.</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        {/* certs-grid: 3 cols, gap 24px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:border-[var(--border-glow)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300"
              style={{
                display: 'block', background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)', borderRadius: '16px',
                padding: '28px 24px', backdropFilter: 'var(--glass-blur)',
                position: 'relative', overflow: 'hidden'
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'var(--accent-gradient)'
              }} />
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>
                {cert.provider}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, marginBottom: '10px', lineHeight: 1.4 }}>
                {cert.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
                {cert.detail}
              </p>
              <span style={{
                fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500,
                padding: '4px 12px', background: 'rgba(123,47,247,0.1)',
                borderRadius: '20px', display: 'inline-block'
              }}>{cert.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
