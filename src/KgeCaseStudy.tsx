import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const datasets = [
  {
    name: 'FB15k-237',
    context: 'Mostly asymmetric relations across film, geography, and sports.',
    metrics: [
      ['TransE MRR', '0.3241'],
      ['RotatE MRR', '0.3251'],
      ['Measured gap', '+0.0010'],
    ],
    finding:
      'Under identical self-adversarial negative sampling, the reported MRR gap nearly disappeared. The training procedure explained more of the difference than the architecture.',
  },
  {
    name: 'WN18RR',
    context: 'A relation set with substantially more symmetric structure.',
    metrics: [
      ['TransE MRR', '0.2066'],
      ['RotatE MRR', '0.4797'],
      ['Measured gap', '+0.2731'],
    ],
    finding:
      'The large gap remained under matched training conditions, supporting a genuine architectural advantage for RotatE on symmetric relations.',
  },
]

const method = [
  ['Matched evaluation', 'identical filtered ranking protocol and metrics.'],
  ['Matched training', 'the same negative-sampling strategy and comparable optimization conditions.'],
  ['Relation analysis', 'results interpreted against the symmetry patterns each architecture can represent.'],
  ['Reproducible reporting', 'claims separated into observed measurements and architectural interpretation.'],
]

export default function KgeCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'KGE Reproduction Study | Rishii Kumar Singh'
    window.scrollTo({ top: 0 })
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main id="main-content" className="desk">
      <motion.article
        className="sheet case"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="back no-print" href="/#research"><ArrowLeft size={15} aria-hidden="true" /> Back to portfolio</a>

        <header className="sheet-head">
          <div>
            <p className="label">Research reproduction</p>
            <h1>When a benchmark gap is architecture, and when it is training.</h1>
            <p className="summary">
              A controlled reproduction of TransE and RotatE on FB15k-237 and WN18RR. Both models were trained under matched conditions to separate mathematical capability from training-procedure advantage.
            </p>
            <span className="link-row">
              <a href="https://www.linkedin.com/posts/rishiikumarsingh_machinelearning-knowledgegraphs-research-ugcPost-7462740269952622592-cDPM" target="_blank" rel="noreferrer">
                Read the discussion <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a href="https://arxiv.org/abs/1902.10197" target="_blank" rel="noreferrer">
                RotatE paper <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </span>
          </div>
        </header>

        <ul className="highlights three" aria-label="Key results">
          <li><strong>+0.001</strong><span>FB15k-237 MRR gap after matching training</span></li>
          <li><strong>+0.273</strong><span>WN18RR MRR gap that remained</span></li>
          <li><strong>2</strong><span>models reproduced under controlled conditions</span></li>
        </ul>

        <section className="block">
          <h2 className="label">Results</h2>
          <div className="entries">
            {datasets.map((d) => (
              <article key={d.name}>
                <div className="item-top"><h3>{d.name}</h3></div>
                <p className="meta">{d.context}</p>
                <dl className="stats inline">
                  {d.metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                </dl>
                <p>{d.finding}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="block">
          <h2 className="label">Method</h2>
          <ul className="plain method">
            {method.map(([k, v]) => <li key={k}><strong>{k}:</strong> {v}</li>)}
          </ul>
        </section>
      </motion.article>
    </main>
  )
}
