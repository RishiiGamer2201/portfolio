'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, GraduationCap, Network, Activity, RotateCw, RefreshCw, BarChart3, HelpCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// Dataset Results
const fb15kResults = {
  name: 'FB15k-237',
  symmetryDesc: 'Asymmetric-heavy (film, geography, sports). Only ~10% symmetric relations.',
  metrics: [
    { name: 'MRR', transe: 0.3241, rotate: 0.3251, gap: 0.0010, paperGap: 0.044 },
    { name: 'HITS@1', transe: 0.2257, rotate: 0.2309, gap: 0.0052, paperGap: 0.0 },
    { name: 'HITS@3', transe: 0.3636, rotate: 0.3594, gap: -0.0042, paperGap: 0.0 },
    { name: 'HITS@10', transe: 0.5190, rotate: 0.5157, gap: -0.0033, paperGap: 0.0 }
  ],
  finding: 'When both models are trained under identical conditions (using self-adversarial negative sampling), the apparent gap collapses to +0.001 MRR. The original paper\'s gap was driven by training procedure, not model architecture.'
}

const wn18rrResults = {
  name: 'WN18RR',
  symmetryDesc: 'Symmetry-rich. ~40% symmetric relations (e.g., _also_see, _similar_to).',
  metrics: [
    { name: 'MRR', transe: 0.2066, rotate: 0.4797, gap: 0.2731, paperGap: 0.250 },
    { name: 'HITS@1', transe: 0.0069, rotate: 0.4379, gap: 0.4310, paperGap: 0.0 },
    { name: 'HITS@3', transe: 0.3725, rotate: 0.4957, gap: 0.1232, paperGap: 0.0 },
    { name: 'HITS@10', transe: 0.5046, rotate: 0.5584, gap: 0.0538, paperGap: 0.0 }
  ],
  finding: 'The gap holds exactly as reported (+0.273 MRR gap here). On WN18RR, the advantage is strictly architectural because TransE mathematically cannot model symmetric relations without forcing relation vectors to zero.'
}

export default function KgeReproduction() {
  const [activeTab, setActiveTab] = useState<'FB15k-237' | 'WN18RR'>('FB15k-237')
  const [selectedModel, setSelectedModel] = useState<'transe' | 'rotate'>('transe')
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null)
  const [hoveredCardSlice, setHoveredCardSlice] = useState<string | null>(null)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [simulationSampling, setSimulationSampling] = useState<'uniform' | 'adversarial'>('uniform')

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const currentDataset = activeTab === 'FB15k-237' ? fb15kResults : wn18rrResults

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative z-10 pt-36 pb-32">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] mb-20 transition-colors group font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <header className="mb-32 relative overflow-hidden shadow-[var(--shadow-card)]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: 'clamp(32px, 6vw, 64px) clamp(20px, 5vw, 48px)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[rgba(0,245,212,0.07)] to-[rgba(123,47,247,0.07)] rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded bg-[rgba(0,245,212,0.12)] text-[var(--accent-cyan)] border border-[rgba(0,245,212,0.2)]">
                Research Reproduction
              </span>
              <a 
                href="https://www.linkedin.com/posts/rishiikumarsingh_machinelearning-knowledgegraphs-research-ugcPost-7462740269952622592-cDPM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE2YVd8BCtcVjHUrOqyPWKBeY1mKwEKjwhk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded bg-[rgba(123,47,247,0.12)] text-[#b388ff] border border-[rgba(123,47,247,0.2)] hover:bg-[rgba(123,47,247,0.25)] transition-all"
              >
                <LinkedinIcon width={12} height={12} />
                Discuss on LinkedIn ↗
              </a>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
              Reproducing Landmark Knowledge Graph Embeddings: <br />
              <span className="gradient-text">TransE vs. RotatE</span>
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[850px] mb-12">
              TransE (2013) and RotatE (2019) are two of the most cited models in Knowledge Graph Embeddings (KGE). 
              The RotatE paper reported beating TransE by <strong className="text-[var(--accent-cyan)] font-semibold">+0.044 MRR</strong> on FB15k-237 
              and <strong className="text-[var(--accent-cyan)] font-semibold">+0.250 MRR</strong> on WN18RR. By training both models under rigorous identical parameters from scratch, 
              this reproduction study uncovers where the performance gap is a genuine mathematical breakthrough versus an artifact of negative training procedures.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] border-t border-[var(--glass-border)] pt-8">
              <span className="flex items-center gap-1.5"><GraduationCap size={16} /> Bordes et al. (2013)</span>
              <span className="flex items-center gap-1.5"><RotateCw size={16} /> Sun et al. (2019)</span>
              <span className="flex items-center gap-1.5"><Network size={16} /> FB15k-237 & WN18RR Benchmarks</span>
            </div>
          </div>
        </header>

        {/* SECTION 1: Key Findings / Narrative */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-28 mb-36">
          <div className="flex flex-col justify-between shadow-[var(--shadow-card)]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px)',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="p-3 rounded-xl bg-[rgba(247,47,142,0.1)] text-[var(--accent-pink)]">
                  <Activity size={22} />
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">The Illusory Gap (FB15k-237)</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-10">
                FB15k-237 contains mostly asymmetric relations (e.g., film genres, countries, sports events). 
                The original RotatE paper evaluated their model with **self-adversarial negative sampling** but used vanilla uniform sampling for the TransE baseline.
              </p>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                When evaluated under identical training conditions with identical negative sampling algorithms, 
                the gap between TransE and RotatE <strong className="text-[var(--accent-cyan)] font-semibold">collapses to a mere 0.001 MRR</strong>. 
                This demonstrates that training procedure, not model architecture, was doing most of the work on asymmetric graphs.
              </p>
            </div>
            <div className="mt-12 rounded-2xl font-medium"
              style={{
                background: 'rgba(0, 245, 212, 0.05)',
                border: '1px solid rgba(0, 245, 212, 0.1)',
                padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 24px)',
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: 'var(--accent-cyan)'
              }}
            >
              💡 Gap collapsed from +0.044 to +0.001! Training trick equalized the playing field.
            </div>
          </div>

          <div className="flex flex-col justify-between shadow-[var(--shadow-card)]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px)',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="p-3 rounded-xl bg-[rgba(123,47,247,0.1)] text-[var(--accent-purple)]">
                  <Network size={22} />
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--text-primary)]">The Architectural Gap (WN18RR)</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-10">
                WN18RR contains symmetric relations (e.g., <code className="text-xs px-1.5 py-0.5 rounded bg-[rgba(255,255,255,0.05)]">_also_see</code> or <code className="text-xs px-1.5 py-0.5 rounded bg-[rgba(255,255,255,0.05)]">_similar_to</code>). 
                Here, the performance gap holds exactly as reported, with RotatE exhibiting a <strong className="text-[var(--accent-cyan)] font-semibold">62x increase in HITS@1 score</strong>.
              </p>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                No amount of training optimization can make TransE model symmetric relations. 
                Its scoring function (<strong className="font-bold text-[var(--text-primary)]">h + r &asymp; t</strong>) dictates that if <span className="italic text-white">(h, r, t)</span> and <span className="italic text-white">(t, r, h)</span> both hold, the relation vector <strong className="italic text-white">r</strong> is forced to <strong className="text-white font-semibold">exactly zero</strong>, making it impossible for the model to distinguish direction or entities.
              </p>
            </div>
            <div className="mt-12 rounded-2xl font-medium"
              style={{
                background: 'rgba(123, 47, 247, 0.05)',
                border: '1px solid rgba(123, 47, 247, 0.1)',
                padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 24px)',
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: '#b388ff'
              }}
            >
              ⚡ 62x HITS@1 Gap! Driven entirely by mathematical constraints of graph structure.
            </div>
          </div>
        </section>

        {/* SECTION 2: Interactive Metric Dashboard */}
        <section className="mb-36 shadow-[var(--shadow-card)]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 6vw, 56px) clamp(16px, 5vw, 48px)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20 border-b border-[var(--glass-border)] pb-12">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-2">Interactive Results Dashboard</h2>
              <p className="text-sm text-[var(--text-secondary)]">Toggle datasets to view the reproduced metrics, gaps, and findings with pristine spacing.</p>
            </div>
            
            {/* Tabs */}
            <div className="flex p-1.5 bg-[rgba(0,0,0,0.25)] border border-[var(--glass-border)] rounded-2xl self-start md:self-auto">
              <button 
                onClick={() => setActiveTab('FB15k-237')}
                className={`px-5 py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all ${activeTab === 'FB15k-237' ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)] shadow-md' : 'text-[var(--text-secondary)] hover:text-white'}`}
              >
                FB15k-237 (Asymmetric)
              </button>
              <button 
                onClick={() => setActiveTab('WN18RR')}
                className={`px-5 py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all ${activeTab === 'WN18RR' ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)] shadow-md' : 'text-[var(--text-secondary)] hover:text-white'}`}
              >
                WN18RR (Symmetric)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-28 items-start">
            {/* Metrics List (2 cols on large) */}
            <div className="lg:col-span-2 space-y-14">
              <div className="rounded-[24px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--glass-border)',
                  padding: '24px 20px'
                }}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block mb-2">Dataset Profile</span>
                <span className="text-base font-semibold text-[var(--text-primary)] block mb-3">{currentDataset.name}</span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{currentDataset.symmetryDesc}</p>
              </div>

              {/* Terminal Table representation */}
              <div className="font-mono text-xs overflow-x-auto shadow-inner rounded-[24px]"
                style={{
                  background: 'rgba(5, 7, 12, 0.9)',
                  border: '1px solid var(--glass-border)',
                  padding: '24px 20px'
                }}
              >
                <div className="text-[var(--text-muted)] border-b border-[rgba(255,255,255,0.06)] pb-4 mb-6 grid grid-cols-4 gap-2 text-right">
                  <span className="text-left font-bold">Metric</span>
                  <span>TransE</span>
                  <span>RotatE</span>
                  <span className="text-[var(--accent-cyan)] font-bold">Gap</span>
                </div>
                {currentDataset.metrics.map((m) => (
                  <div key={m.name} className="py-4 px-4 grid grid-cols-4 gap-2 text-right border-b border-[rgba(255,255,255,0.03)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] rounded-lg transition-colors">
                    <span className="text-left text-[var(--text-secondary)] font-bold">{m.name}</span>
                    <span>{m.transe.toFixed(4)}</span>
                    <span>{m.rotate.toFixed(4)}</span>
                    <span className={m.gap > 0 ? 'text-[var(--accent-cyan)] font-bold' : 'text-[var(--accent-pink)] font-bold'}>
                      {m.gap >= 0 ? '+' : ''}{m.gap.toFixed(4)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px]"
                style={{
                  background: 'rgba(123, 47, 247, 0.03)',
                  border: '1px solid rgba(123, 47, 247, 0.1)',
                  padding: '24px 20px'
                }}
              >
                <span className="text-xs font-bold text-[#b388ff] block mb-2">Reproduction Insight:</span>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">{currentDataset.finding}</p>
              </div>
            </div>

            {/* Visual Bar Charts (3 cols on large) */}
            <div className="lg:col-span-3 border border-[var(--glass-border)] bg-[rgba(0,0,0,0.15)] rounded-3xl"
              style={{
                padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 32px)'
              }}
            >
              <h4 className="text-base font-semibold font-heading mb-8 flex items-center gap-1.5 text-[var(--text-primary)]">
                <BarChart3 size={18} className="text-[var(--accent-cyan)]" /> Metric Gap Visualization
              </h4>
              
              <div className="space-y-16">
                {currentDataset.metrics.map((m, idx) => {
                  const maxVal = 0.6 // Scale ceiling for visualizer
                  const transePercent = Math.min((m.transe / maxVal) * 100, 100)
                  const rotatePercent = Math.min((m.rotate / maxVal) * 100, 100)
                  
                  return (
                    <div 
                      key={m.name} 
                      className="space-y-4 relative"
                      onMouseEnter={() => setHoveredBar(idx)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <div className="flex justify-between text-xs md:text-sm font-medium">
                        <span className="font-bold text-[var(--text-primary)]">{m.name} Comparison</span>
                        <span className="text-[var(--text-muted)]">
                          TransE: <strong className="text-[var(--text-primary)] font-semibold">{m.transe.toFixed(3)}</strong> | 
                          RotatE: <strong className="text-[var(--accent-cyan)] font-semibold">{m.rotate.toFixed(3)}</strong>
                        </span>
                      </div>
                      
                      <div className="space-y-5 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]"
                        style={{
                          borderRadius: '16px',
                          padding: '20px 24px'
                        }}
                      >
                        {/* TransE Bar */}
                        <div className="h-3 w-full bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${transePercent}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-[var(--text-secondary)] opacity-70"
                          />
                        </div>
                        
                        {/* RotatE Bar */}
                        <div className="h-3 w-full bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${rotatePercent}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)]"
                          />
                        </div>
                      </div>

                      {/* Floating tooltip/metric for gaps */}
                      <AnimatePresence>
                        {hoveredBar === idx && (
                          <motion.div 
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-2 left-24 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--accent-cyan)] rounded text-[10px] text-[var(--accent-cyan)] font-mono z-20"
                          >
                            Gap: {m.gap >= 0 ? '+' : ''}{m.gap.toFixed(4)} {m.paperGap > 0 ? `(Paper: +${m.paperGap.toFixed(3)})` : ''}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              <div className="mt-16 flex justify-end gap-10 text-xs text-[var(--text-muted)] font-mono border-t border-[var(--glass-border)] pt-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[var(--text-secondary)] opacity-70 inline-block" /> TransE
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] inline-block" /> RotatE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Mathematical Symmetry Proof */}
        <section className="mb-36 shadow-[var(--shadow-card)]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 6vw, 56px) clamp(16px, 5vw, 48px)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-heading mb-3 flex items-center gap-2">
              <RotateCw className="text-[var(--accent-cyan)] animate-spin-slow" /> Why TransE Fails: Mathematical Proof
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Let's visualize how the relation scoring function mathematically behaves under symmetric relations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-28 items-center">
            {/* Explainer (3 cols) */}
            <div className="lg:col-span-3 space-y-14">
              
              {/* Toggles */}
              <div className="flex p-1.5 bg-[rgba(0,0,0,0.25)] border border-[var(--glass-border)] rounded-2xl self-start w-fit mb-6">
                <button 
                  onClick={() => setSelectedModel('transe')}
                  className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${selectedModel === 'transe' ? 'bg-[var(--accent-pink)] text-white shadow-md' : 'text-[var(--text-secondary)] hover:text-white'}`}
                >
                  TransE translation: h + r ≈ t
                </button>
                <button 
                  onClick={() => setSelectedModel('rotate')}
                  className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${selectedModel === 'rotate' ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)] shadow-md' : 'text-[var(--text-secondary)] hover:text-white'}`}
                >
                  RotatE rotation: t = h ∘ r
                </button>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold font-heading">
                  {selectedModel === 'transe' ? 'Translation Collapse (TransE)' : 'Rotational Symmetry (RotatE)'}
                </h3>

                {selectedModel === 'transe' ? (
                  <div className="space-y-4 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                    <p>
                      In TransE, relationships are modeled as translation in the vector space:{" "}
                      <strong className="text-[var(--text-primary)] font-bold">h + r &asymp; t</strong>.
                    </p>
                    <p>
                      If a relation is <span className="text-[var(--accent-pink)] font-semibold">symmetric</span> (e.g. Spouse, Also See), both <span className="italic font-semibold text-white">(h, r, t)</span> and <span className="italic font-semibold text-white">(t, r, h)</span> must hold simultaneously:
                    </p>
                    <div className="font-mono text-xs md:text-sm text-[var(--text-primary)] space-y-5 my-10"
                      style={{
                        background: 'rgba(5, 7, 12, 0.9)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '24px',
                        padding: 'clamp(20px, 4vw, 32px)'
                      }}
                    >
                      <div>1) <span className="font-bold text-white">h</span> + <span className="font-bold text-white">r</span> = <span className="font-bold text-white">t</span></div>
                      <div>2) <span className="font-bold text-white">t</span> + <span className="font-bold text-white">r</span> = <span className="font-bold text-white">h</span></div>
                      <div className="border-t border-[rgba(255,255,255,0.08)] mt-3 pt-2 text-[var(--accent-pink)] font-bold">
                        Substitute (1) into (2): (<span className="font-bold">h</span> + <span className="font-bold">r</span>) + <span className="font-bold">r</span> = <span className="font-bold">h</span> &rArr; 2<span className="font-bold">r</span> = 0 &rArr; <span className="font-bold">r</span> = 0!
                      </div>
                    </div>
                    <p>
                      Because the relation vector <span className="italic font-bold text-white">r</span> is forced to <strong className="text-white font-semibold">zero</strong>, the model collapses. 
                      It means <span className="font-bold text-white">h &asymp; t</span>, meaning any entities connected by a symmetric relation must map to the <strong className="text-white font-semibold">exact same point</strong>. 
                      TransE becomes completely blind to direction and context!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                    <p>
                      In RotatE, relationships are modeled as rotations in a complex vector space:{" "}
                      <strong className="text-[var(--text-primary)] font-bold">t = h &nbsp;&bull;&nbsp; r</strong>, where <strong className="font-semibold text-white">|r<sub>i</sub>| = 1</strong> (r<sub>i</sub> = e<sup>i&theta;<sub>i</sub></sup>).
                    </p>
                    <p>
                      If a relation is <span className="text-[var(--accent-cyan)] font-semibold">symmetric</span>, both directions must be modeled:
                    </p>
                    <div className="font-mono text-xs md:text-sm text-[var(--text-primary)] space-y-5 my-10"
                      style={{
                        background: 'rgba(5, 7, 12, 0.9)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '24px',
                        padding: 'clamp(20px, 4vw, 32px)'
                      }}
                    >
                      <div>1) <span className="font-bold text-white">t</span> = <span className="font-bold text-white">h</span> &bull; <span className="font-bold text-white">r</span></div>
                      <div>2) <span className="font-bold text-white">h</span> = <span className="font-bold text-white">t</span> &bull; <span className="font-bold text-white">r</span></div>
                      <div className="border-t border-[rgba(255,255,255,0.08)] mt-3 pt-2 text-[var(--accent-cyan)] font-bold">
                        Substitute (1) into (2): <span className="font-bold">h</span> = (<span className="font-bold">h</span> &bull; <span className="font-bold">r</span>) &bull; <span className="font-bold">r</span> &rArr; <span className="font-bold">h</span> = <span className="font-bold">h</span> &bull; <span className="font-bold">r</span><sup>2</sup> &rArr; <span className="font-bold">r</span><sup>2</sup> = <span className="font-bold">I</span>!
                      </div>
                    </div>
                    <p>
                      This dictates that <strong className="font-semibold text-white">&theta;<sub>i</sub> &in; &#123;0, &pi;&#125;</strong>. 
                      Instead of collapsing to zero, the relation vector is a reflection! 
                      It rotates the entity vector by <strong className="text-white">&pi;</strong> radians (180 degrees). 
                      It maps <span className="font-bold text-white">h</span> to <span className="font-bold text-white">t</span> on the unit circle, and <span className="font-bold text-white">t</span> back to <span className="font-bold text-white">h</span>, keeping them <strong className="text-white font-semibold">distinct and separated</strong>. 
                      Mathematical beauty preserves the graph topology perfectly!
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Visual Vector Grid (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center border border-[var(--glass-border)] bg-[rgba(0,0,0,0.2)] rounded-[24px] min-h-[480px]"
              style={{
                padding: 'clamp(20px, 4vw, 32px)'
              }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-6 block">Interactive Complex Vector Map</span>

              <div className="relative w-48 h-48 border border-[rgba(255,255,255,0.08)] rounded-full flex items-center justify-center">
                {/* Circle marker */}
                <div className="absolute w-full h-full border border-dashed border-[rgba(255,255,255,0.03)] rounded-full pointer-events-none" />
                
                {/* Grid axis */}
                <div className="absolute w-full h-px bg-[rgba(255,255,255,0.05)]" />
                <div className="absolute h-full w-px bg-[rgba(255,255,255,0.05)]" />
                
                {/* Vector Nodes */}
                {selectedModel === 'transe' ? (
                  // TransE representation: h and t are collapsed at the center, r is zero
                  <div className="relative w-full h-full">
                    {/* Head/Tail entity vector h ≈ t */}
                    <div 
                      className="absolute flex flex-col items-center animate-pulse"
                      style={{ left: '96px', top: '96px', transform: 'translate(-50%, -7px)' }}
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[var(--accent-pink)] shadow-[0_0_12px_var(--accent-pink)] z-10" />
                      <span className="text-[10px] font-mono text-[var(--accent-pink)] font-semibold mt-1.5 whitespace-nowrap">h ≈ t</span>
                    </div>
                    {/* Relation r vector (collapsed to zero) */}
                    <div 
                      className="absolute flex flex-col-reverse items-center"
                      style={{ left: '96px', top: '96px', transform: 'translate(-50%, -20px)' }}
                    >
                      <span className="w-2 h-2 rounded-full bg-white z-20 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      <span className="text-[10px] font-mono text-white mb-1.5 whitespace-nowrap">r = 0 (collapsed)</span>
                    </div>
                  </div>
                ) : (
                  // RotatE representation: h and t are opposite on the circle, r represents a rotation of pi
                  <div className="relative w-full h-full">
                    {/* Head entity h at 0 deg (Right side: X=176, Y=96) */}
                    <div 
                      className="absolute flex flex-col items-center"
                      style={{ left: '176px', top: '96px', transform: 'translate(-50%, -7px)' }}
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_var(--accent-cyan)] z-10" />
                      <span className="text-[10px] font-mono text-[var(--accent-cyan)] font-semibold mt-1.5 whitespace-nowrap">h (Entity A)</span>
                    </div>

                    {/* Tail entity t at 180 deg (Left side: X=16, Y=96) */}
                    <div 
                      className="absolute flex flex-col items-center"
                      style={{ left: '16px', top: '96px', transform: 'translate(-50%, -7px)' }}
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-[var(--accent-purple)] shadow-[0_0_12px_var(--accent-purple)] z-10" />
                      <span className="text-[10px] font-mono text-[var(--accent-purple)] font-semibold mt-1.5 whitespace-nowrap">t (Entity B)</span>
                    </div>

                    {/* Rotating arrow representing relation r */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f5d4" />
                        </marker>
                      </defs>
                      <path 
                        d="M 176 96 A 80 80 0 0 0 16 96" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="2" 
                        strokeDasharray="4"
                        markerEnd="url(#arrow)"
                      />
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7b2ff7" />
                        <stop offset="100%" stopColor="#00f5d4" />
                      </linearGradient>
                    </svg>

                    <div 
                      className="absolute text-[10px] font-mono text-[var(--accent-cyan)] bg-[var(--bg-secondary)] px-2.5 py-0.5 rounded border border-[rgba(0,245,212,0.15)] shadow-sm whitespace-nowrap"
                      style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
                    >
                      Relation r: Rotation by π
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-[11px] text-[var(--text-muted)] font-mono text-center max-w-[240px] mt-8">
                {selectedModel === 'transe' 
                  ? 'TransE collapses the distance between connected nodes to zero to satisfy the equation.' 
                  : 'RotatE maps nodes to opposing points on the complex unit circle, maintaining graph separation.'
                }
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Interactive Relation Pattern Analysis & EDA */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 mb-32">
          
          {/* Symmetry Patterns Pie */}
          <div className="flex flex-col justify-between shadow-[var(--shadow-card)]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px)',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div>
              <h3 className="text-xl font-bold font-heading mb-2 text-[var(--text-primary)]">Symmetry Patterns</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">FB15k-237 relation distribution by symmetry score.</p>
              
              <div className="flex justify-center my-12 relative">
                {/* SVG Pie Chart representing: Asymmetric (<0.2) 87.8%, Symmetric (>0.8) 10.1%, Partial (0.2-0.8) 2.1% */}
                <svg width="160" height="160" viewBox="0 0 32 32" className="transform -rotate-90">
                  {/* Asymmetric segment (87.8%): stroke-dasharray="87.8 100" */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#00f5d4" 
                    strokeWidth="4" 
                    strokeDasharray="87.8 100" 
                    strokeDashoffset="0"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredSlice('asymmetric')}
                    onMouseLeave={() => setHoveredSlice(null)}
                  />
                  {/* Symmetric segment (10.1%): stroke-dasharray="10.1 100", offset = -87.8 */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#f72f8e" 
                    strokeWidth="4" 
                    strokeDasharray="10.1 100" 
                    strokeDashoffset="-87.8"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredSlice('symmetric')}
                    onMouseLeave={() => setHoveredSlice(null)}
                  />
                  {/* Partial segment (2.1%): stroke-dasharray="2.1 100", offset = -97.9 */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#7b2ff7" 
                    strokeWidth="4" 
                    strokeDasharray="2.1 100" 
                    strokeDashoffset="-97.9"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredSlice('partial')}
                    onMouseLeave={() => setHoveredSlice(null)}
                  />
                </svg>

                {/* Floating tooltip inside chart area */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">Hover Slice</span>
                    <span className="text-xs font-mono font-bold text-white">
                      {hoveredSlice === 'asymmetric' && 'Asym: 87.8%'}
                      {hoveredSlice === 'symmetric' && 'Symm: 10.1%'}
                      {hoveredSlice === 'partial' && 'Part: 2.1%'}
                      {!hoveredSlice && 'Symmetry'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs border-t border-[var(--glass-border)] pt-6 mt-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-[var(--accent-cyan)] inline-block" /> Asymmetric (&lt;0.2)
                </span>
                <span className="font-mono font-semibold">87.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-[var(--accent-pink)] inline-block" /> Symmetric (&gt;0.8)
                </span>
                <span className="font-mono font-semibold">10.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-[var(--accent-purple)] inline-block" /> Partial (0.2-0.8)
                </span>
                <span className="font-mono font-semibold">2.1%</span>
              </div>
            </div>
          </div>

          {/* Cardinality Types Pie */}
          <div className="flex flex-col justify-between shadow-[var(--shadow-card)]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px)',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div>
              <h3 className="text-xl font-bold font-heading mb-2 text-[var(--text-primary)]">Cardinality Types</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">FB15k-237 relation mapping complexity distribution.</p>
              
              <div className="flex justify-center my-12 relative">
                {/* SVG Pie Chart representing: N-N 45.6%, N-1 36.3%, 1-N 11.0%, 1-1 7.2% */}
                <svg width="160" height="160" viewBox="0 0 32 32" className="transform -rotate-90">
                  {/* N-N (45.6%) */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#3b82f6" 
                    strokeWidth="4" 
                    strokeDasharray="45.6 100" 
                    strokeDashoffset="0"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredCardSlice('nn')}
                    onMouseLeave={() => setHoveredCardSlice(null)}
                  />
                  {/* N-1 (36.3%) */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#ef4444" 
                    strokeWidth="4" 
                    strokeDasharray="36.3 100" 
                    strokeDashoffset="-45.6"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredCardSlice('n1')}
                    onMouseLeave={() => setHoveredCardSlice(null)}
                  />
                  {/* 1-N (11.0%) */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#10b981" 
                    strokeWidth="4" 
                    strokeDasharray="11 100" 
                    strokeDashoffset="-81.9"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredCardSlice('1n')}
                    onMouseLeave={() => setHoveredCardSlice(null)}
                  />
                  {/* 1-1 (7.2%) */}
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="transparent" 
                    stroke="#8b5cf6" 
                    strokeWidth="4" 
                    strokeDasharray="7.2 100" 
                    strokeDashoffset="-92.9"
                    className="transition-all duration-300 cursor-pointer hover:stroke-[5]"
                    onMouseEnter={() => setHoveredCardSlice('11')}
                    onMouseLeave={() => setHoveredCardSlice(null)}
                  />
                </svg>

                {/* Floating tooltip */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-muted)] block">Hover Slice</span>
                    <span className="text-xs font-mono font-bold text-white">
                      {hoveredCardSlice === 'nn' && 'N-N: 45.6%'}
                      {hoveredCardSlice === 'n1' && 'N-1: 36.3%'}
                      {hoveredCardSlice === '1n' && '1-N: 11.0%'}
                      {hoveredCardSlice === '11' && '1-1: 7.2%'}
                      {!hoveredCardSlice && 'Complexity'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs border-t border-[var(--glass-border)] pt-6 mt-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block" /> N-N (Many-to-Many)
                </span>
                <span className="font-mono font-semibold">45.6%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-red-500 inline-block" /> N-1 (Many-to-One)
                </span>
                <span className="font-mono font-semibold">36.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" /> 1-N (One-to-Many)
                </span>
                <span className="font-mono font-semibold">11.0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <span className="w-2.5 h-2.5 rounded bg-violet-500 inline-block" /> 1-1 (One-to-One)
                </span>
                <span className="font-mono font-semibold">7.2%</span>
              </div>
            </div>
          </div>

          {/* Histogram distribution */}
          <div className="flex flex-col justify-between shadow-[var(--shadow-card)]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px)',
              backdropFilter: 'var(--glass-blur)'
            }}
          >
            <div>
              <h3 className="text-xl font-bold font-heading mb-2 text-[var(--text-primary)]">Symmetry Score Distribution</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-6">Scores per relation (0 = asymmetric, 1 = symmetric).</p>
              
              <div className="h-40 flex items-end justify-between gap-1 border-b border-[rgba(255,255,255,0.08)] pb-1 relative px-2 my-10">
                {/* Visual guidelines */}
                <div className="absolute bottom-0 left-[20%] top-0 w-px border-l border-dashed border-emerald-500 opacity-40" />
                <div className="absolute bottom-0 right-[20%] top-0 w-px border-r border-dashed border-red-500 opacity-40" />

                {/* Simulated Histogram bars */}
                <div className="w-[12%] h-[95%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.0 - 0.1 Score: ~200 relations" />
                <div className="w-[12%] h-[6%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.1 - 0.2 Score: ~10 relations" />
                <div className="w-[12%] h-[2%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.2 - 0.3 Score: ~3 relations" />
                <div className="w-[12%] h-[1%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.3 - 0.4 Score: ~1 relations" />
                <div className="w-[12%] h-[1%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.4 - 0.6 Score: ~1 relations" />
                <div className="w-[12%] h-[2%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.6 - 0.8 Score: ~3 relations" />
                <div className="w-[12%] h-[14%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.8 - 0.9 Score: ~18 relations" />
                <div className="w-[12%] h-[4%] bg-blue-500 rounded-t opacity-85 hover:opacity-100 hover:shadow-[0_0_10px_#3b82f6] transition-all cursor-pointer" title="0.9 - 1.0 Score: ~5 relations" />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-[10px] font-mono text-[var(--text-muted)] border-t border-[var(--glass-border)] pt-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 border-t-2 border-dashed border-emerald-500 inline-block" /> Asymmetric Threshold (&lt;0.2)
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 border-t-2 border-dashed border-red-500 inline-block" /> Symmetric Threshold (&gt;0.8)
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] mt-3 leading-normal font-sans">
                Notice the severe bimodal split: the vast majority of relations cluster at exactly 0.0 (perfectly asymmetric), while a small minority sit near 1.0. 
                TransE fails entirely on the right tail.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Deep Graph Topology Diagnostics */}
        <section className="mb-32 shadow-[var(--shadow-card)] relative overflow-hidden"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 6vw, 56px) clamp(16px, 5vw, 48px)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(123,47,247,0.02)] to-[rgba(0,245,212,0.02)] pointer-events-none" />
          
          <div className="mb-16 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2.5 rounded-lg bg-[rgba(0,245,212,0.1)] text-[var(--accent-cyan)]">
                <Network size={22} />
              </span>
              <h2 className="text-3xl font-bold font-heading text-[var(--text-primary)]">
                Deep Graph Diagnostics & Topology
              </h2>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              Rigorous dataset profile extracted from the Exploratory Data Analysis (EDA) notebook.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start relative z-10">
            {/* Left Column: Diagnostics List (3 cols) */}
            <div className="lg:col-span-3 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Degree Statistics Card */}
                <div className="rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)] hover:border-[rgba(0,245,212,0.3)] transition-all"
                  style={{
                    padding: 'clamp(20px, 4vw, 32px)'
                  }}
                >
                  <div className="text-[var(--accent-cyan)] text-xs font-bold uppercase tracking-wider mb-4">Entity Degree Stats</div>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Mean Degree:</span>
                      <span className="font-mono font-bold text-[var(--text-primary)]">37.43 edges</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Median Degree:</span>
                      <span className="font-mono font-bold text-[var(--text-primary)]">22.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Max Degree (Hub):</span>
                      <span className="font-mono font-bold text-[var(--accent-pink)]">7,614 edges</span>
                    </div>
                    <div className="flex justify-between border-t border-[rgba(255,255,255,0.05)] pt-3 mt-3">
                      <span className="text-[var(--text-muted)]">Scale-Free Fact:</span>
                      <span className="text-[var(--accent-cyan)] font-semibold">Top 1% holds 8.1% of edges</span>
                    </div>
                  </div>
                </div>

                {/* Split Verification & Leakage Card */}
                <div className="rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)] hover:border-[rgba(123,47,247,0.3)] transition-all"
                  style={{
                    padding: 'clamp(20px, 4vw, 32px)'
                  }}
                >
                  <div className="text-[var(--accent-purple)] text-xs font-bold uppercase tracking-wider mb-4">Rigorous Quality Gate</div>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Split Leakage Check:</span>
                      <span className="font-mono font-bold text-emerald-400">0.00% overlap</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Train Entities:</span>
                      <span className="font-mono font-bold text-[var(--text-primary)]">14,505</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-secondary)]">Test Cold-Start:</span>
                      <span className="font-mono font-bold text-[var(--accent-pink)]">29 entities</span>
                    </div>
                    <div className="flex justify-between border-t border-[rgba(255,255,255,0.05)] pt-3 mt-3">
                      <span className="text-[var(--text-muted)]">Cold Start Danger:</span>
                      <span className="text-[var(--text-secondary)] font-semibold">Standard KGE models fail here</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sampling Efficiency & Hub Dynamics */}
              <div className="rounded-3xl bg-[rgba(255,255,255,0.01)] border border-[var(--glass-border)]"
                style={{
                  padding: 'clamp(20px, 4vw, 32px)'
                }}
              >
                <h4 className="text-base font-semibold mb-3 text-[var(--text-primary)]">Negative Sampling Efficiency Profile</h4>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  With <strong className="text-[var(--text-primary)]">14,541 total entities</strong> in the graph, drawing <strong className="text-[var(--accent-cyan)]">N = 256</strong> negative samples yields only a <strong className="text-emerald-400">~1.76% probability</strong> of accidentally sampling a true positive. This explains why standard negative sampling remains highly efficient without expensive verification.
                </p>
                <div className="p-4 rounded-2xl bg-[rgba(0,0,0,0.25)] border border-[rgba(255,255,255,0.05)] font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-normal flex items-start gap-3">
                  <span className="text-emerald-400 font-bold block text-lg">✓</span>
                  <span>
                    <strong>Self-Adversarial Advantage:</strong> Gradients focus strictly on high-degree hubs (e.g. the 7,614 max-degree node), where uniform sampling fails to find meaningful negatives.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Relations Table (2 cols) */}
            <div className="lg:col-span-2 border border-[var(--glass-border)] bg-[rgba(0,0,0,0.15)] rounded-3xl"
              style={{
                padding: 'clamp(20px, 4vw, 32px)'
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-6">
                Key Relations to Watch (FB15k-237)
              </h4>
              
              <div className="space-y-8">
                {/* Symmetric Relations */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-pink)] block mb-3">Top Symmetric Relations (Symmetry: 1.000)</span>
                  <div className="space-y-2.5 font-mono text-xs text-[var(--text-secondary)]">
                    <div className="p-4 md:p-5 rounded-2xl bg-[rgba(247,47,142,0.03)] border border-[rgba(247,47,142,0.08)] flex justify-between gap-4">
                      <span className="truncate">/education/educational_institution/campuses</span>
                      <span className="font-bold text-white shrink-0">1-1 Map</span>
                    </div>
                    <div className="p-4 md:p-5 rounded-2xl bg-[rgba(247,47,142,0.03)] border border-[rgba(247,47,142,0.08)] flex justify-between gap-4">
                      <span className="truncate">/location/hud_county_place/place</span>
                      <span className="font-bold text-white shrink-0">1-1 Map</span>
                    </div>
                  </div>
                </div>

                {/* High Fan-out Relations */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent-cyan)] block mb-3">High Fan-out Relations (Average Tails per Head)</span>
                  <div className="space-y-2.5 font-mono text-xs text-[var(--text-secondary)]">
                    <div className="p-4 md:p-5 rounded-2xl bg-[rgba(0,245,212,0.03)] border border-[rgba(0,245,212,0.08)] flex justify-between gap-4">
                      <span className="truncate">/people/marriage/.../location_of_ceremony</span>
                      <span className="font-bold text-white shrink-0">104.3 tails</span>
                    </div>
                    <div className="p-4 md:p-5 rounded-2xl bg-[rgba(0,245,212,0.03)] border border-[rgba(0,245,212,0.08)] flex justify-between gap-4">
                      <span className="truncate">/education/educational_degree/.../institution</span>
                      <span className="font-bold text-white shrink-0">90.3 tails</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-xs text-[var(--text-muted)] leading-relaxed">
                ℹ RotatE models 1-1 symmetric maps as 180° flips, whereas TransE collapses them, verifying the mathematical divergence in practice.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Uniform vs Adversarial negative sampling simulator */}
        <section className="mb-32 shadow-[var(--shadow-card)]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--glass-border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 6vw, 56px) clamp(16px, 5vw, 48px)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-heading mb-3 flex items-center gap-2">
              <Activity className="text-[var(--accent-cyan)]" /> Training Procedure Simulator
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Simulate how training methodology influences the apparent architectural gap on asymmetric datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">
            {/* Sidebar Simulator Interface (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">Select Training Setting:</span>
              
              <button 
                onClick={() => setSimulationSampling('uniform')}
                className={`w-full p-8 rounded-2xl text-left border transition-all ${simulationSampling === 'uniform' ? 'bg-[rgba(247,47,142,0.06)] border-[var(--accent-pink)] shadow-md' : 'bg-[rgba(255,255,255,0.02)] border-[var(--glass-border)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-[var(--text-primary)]">Paper Evaluation Setup</span>
                  {simulationSampling === 'uniform' && <CheckCircle2 size={16} className="text-[var(--accent-pink)]" />}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  TransE: Vanilla Uniform Sampling <br />
                  RotatE: Self-Adversarial Negative Sampling
                </p>
              </button>

              <button 
                onClick={() => setSimulationSampling('adversarial')}
                className={`w-full p-8 rounded-2xl text-left border transition-all ${simulationSampling === 'adversarial' ? 'bg-[rgba(0,245,212,0.06)] border-[var(--accent-cyan)] shadow-md' : 'bg-[rgba(255,255,255,0.02)] border-[var(--glass-border)] hover:bg-[rgba(255,255,255,0.05)]'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-[var(--text-primary)]">Rigorous Benchmarked Setup</span>
                  {simulationSampling === 'adversarial' && <CheckCircle2 size={16} className="text-[var(--accent-cyan)]" />}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  TransE: Self-Adversarial Negative Sampling <br />
                  RotatE: Self-Adversarial Negative Sampling
                </p>
              </button>
            </div>

            {/* Simulated Chart visual (3 cols) */}
            <div className="lg:col-span-3 border border-[var(--glass-border)] bg-[rgba(0,0,0,0.15)] rounded-3xl min-h-[300px] flex flex-col justify-between shadow-[var(--shadow-card)]"
              style={{
                padding: 'clamp(20px, 4vw, 32px)'
              }}
            >
              <div>
                <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-6">
                  Simulated MRR Scores (FB15k-237)
                </span>

                <div className="space-y-8">
                  {/* TransE Bar */}
                  <div className="space-y-3.5">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span>TransE MRR</span>
                      <span className="font-mono font-bold">
                        {simulationSampling === 'uniform' ? '0.294 (Standard)' : '0.324 (+0.030 gain!)'}
                      </span>
                    </div>
                    <div className="h-5 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: simulationSampling === 'uniform' ? '70%' : '88%' }}
                        className="h-full bg-[var(--text-secondary)] opacity-70"
                        transition={{ type: 'spring', stiffness: 80 }}
                      />
                    </div>
                  </div>

                  {/* RotatE Bar */}
                  <div className="space-y-3.5">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span>RotatE MRR</span>
                      <span className="font-mono font-bold text-[var(--accent-cyan)]">0.325</span>
                    </div>
                    <div className="h-5 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: '88.5%' }}
                        className="h-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)]"
                        transition={{ type: 'spring', stiffness: 80 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--glass-border)] pt-8 mt-12 flex justify-between items-center text-xs md:text-sm">
                <span className="text-[var(--text-secondary)] font-medium">Apparent Model Gap:</span>
                <span className={`font-mono font-bold text-base ${simulationSampling === 'uniform' ? 'text-[var(--accent-pink)]' : 'text-[var(--accent-cyan)]'}`}>
                  {simulationSampling === 'uniform' ? '+0.044 (Illusory)' : '+0.001 (Collapsed!)'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Key Takeaways */}
        <footer className="border border-[var(--glass-border)] bg-[rgba(15,25,50,0.4)] rounded-3xl text-center relative overflow-hidden shadow-[var(--shadow-card)] mb-16"
          style={{
            padding: 'clamp(32px, 8vw, 80px) clamp(16px, 6vw, 64px)',
            backdropFilter: 'var(--glass-blur)'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[rgba(0,245,212,0.03)] to-[rgba(123,47,247,0.03)] pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-[var(--text-primary)]">The Key Research Lesson</h2>
          <p className="text-sm md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[850px] mx-auto mb-8">
            Benchmark numbers do not exist in isolation. The same architectural improvement can look massive on one dataset and completely invisible on another, 
            depending entirely on what relation patterns exist in the data. Evaluating hyperparameters or structural advantages without meticulous, identical training pipelines 
            creates false baseline biases.
          </p>
          
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://arxiv.org/abs/1902.10197" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[var(--glass-border)] text-sm font-semibold text-[var(--text-primary)] transition-all shadow-md"
            >
              RotatE Paper ↗
            </a>
            <a 
              href="https://proceedings.neurips.cc/paper/2013/hash/1cecc7a77928ca8133fa24680a88d2f9-Abstract.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[var(--glass-border)] text-sm font-semibold text-[var(--text-primary)] transition-all shadow-md"
            >
              TransE Paper ↗
            </a>
          </div>
        </footer>

      </div>
    </main>
  )
}
