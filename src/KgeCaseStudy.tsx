import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, Network } from 'lucide-react'
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

export default function KgeCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'KGE Reproduction Study | Rishii Kumar Singh'
    window.scrollTo({ top: 0 })
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main className="case-page">
      <div className="section-frame">
        <a className="case-back" href="/#work"><ArrowLeft size={17} /> Back to portfolio</a>

        <motion.header
          className="case-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="case-label"><Network size={16} /> Research reproduction</div>
          <h1>When a benchmark gap is architecture, and when it is training.</h1>
          <p>
            A controlled reproduction of TransE and RotatE on FB15k-237 and WN18RR. Both models were trained under matched conditions to separate mathematical capability from training-procedure advantage.
          </p>
          <div className="case-actions">
            <a href="https://www.linkedin.com/posts/rishiikumarsingh_machinelearning-knowledgegraphs-research-ugcPost-7462740269952622592-cDPM" target="_blank" rel="noreferrer">
              Read the discussion <ArrowUpRight size={16} />
            </a>
            <a href="https://arxiv.org/abs/1902.10197" target="_blank" rel="noreferrer">
              RotatE paper <BookOpen size={16} />
            </a>
          </div>
        </motion.header>

        <section className="case-summary">
          <article><strong>+0.001</strong><span>FB15k-237 MRR gap after matching training</span></article>
          <article><strong>+0.273</strong><span>WN18RR MRR gap that remained</span></article>
          <article><strong>2</strong><span>models reproduced under controlled conditions</span></article>
        </section>

        <section className="case-section">
          <div className="section-kicker"><span>01</span><p>Results</p></div>
          <div className="case-datasets">
            {datasets.map((dataset, index) => (
              <motion.article
                key={dataset.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="case-dataset-head"><span>0{index + 1}</span><h2>{dataset.name}</h2></div>
                <p>{dataset.context}</p>
                <div className="case-metrics">
                  {dataset.metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
                </div>
                <div className="case-finding"><CheckCircle2 size={20} /><p>{dataset.finding}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="case-section case-method">
          <div className="section-kicker"><span>02</span><p>Method</p></div>
          <h2>Control the procedure before comparing the model.</h2>
          <div>
            <p><strong>Matched evaluation:</strong> identical filtered ranking protocol and metrics.</p>
            <p><strong>Matched training:</strong> the same negative-sampling strategy and comparable optimization conditions.</p>
            <p><strong>Relation analysis:</strong> results interpreted against the symmetry patterns each architecture can represent.</p>
            <p><strong>Reproducible reporting:</strong> claims separated into observed measurements and architectural interpretation.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
