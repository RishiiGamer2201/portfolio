import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  Eye,
  GitBranch,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { GithubIcon as Github, LinkedinIcon as Linkedin, XIcon } from '@/components/icons/x-icon'

const experience = [
  {
    period: 'Jun 2026 to Jul 2026',
    role: 'AI/ML Intern',
    organization: 'WESEE, Indian Navy',
    summary:
      'Improved maritime vision pipelines for satellite imagery through leakage checks, active learning, oriented object detection, segmentation, and deployment-focused model export.',
    evidence: [
      'Raised vessel detection mAP50 from 0.434 to 0.921 after finding 123 duplicate images and rebuilding the split.',
      'Completed eight reviewed active-learning rounds, reached 0.853 mIoU for coastal segmentation, and 97.1% ship-type accuracy.',
    ],
  },
  {
    period: 'Jun 2026 to Jul 2026',
    role: 'Research Intern',
    organization: 'AIMS-DTU',
    summary:
      'Selected through multiple interview rounds for supervised AI research under Prof. Dinesh K. Vishwakarma, with work progressing toward a manuscript and conference submission.',
    evidence: [
      'Built version-controlled experiment pipelines for literature review, data validation, baseline evaluation, and systematic model analysis.',
      'Documented reproducible findings and failure cases while keeping unpublished research details private until submission.',
    ],
  },
  {
    period: 'May 2026 to Aug 2026',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code',
    summary:
      'Contributed to production-oriented AI agent infrastructure across Heliox-OS, AegisAI, and Sahidawa India.',
    evidence: [
      'Placed in the top 4% among 43,587 participants with 2,507 points and 13 merged pull requests.',
      'Shipped context compression, crash recovery, WebSocket streaming, race-condition prevention, and dependency-aware parallelization.',
    ],
  },
  {
    period: 'Oct 2025 to Dec 2025',
    role: 'AI/ML Intern, Technical Development',
    organization: 'Artha Research and Intelligence Lab',
    summary:
      'Built geospatial decision-support workflows for healthcare accessibility planning in Himachal Pradesh.',
    evidence: [
      'Mapped road-network access for more than 500 healthcare facilities across 12 districts using Python and QGIS.',
      'Identified more than 30 underserved regions by combining road, population, terrain, and hazard information.',
    ],
  },
]

const projects = [
  {
    index: '01',
    name: 'PolyAgent CI',
    label: 'Multi-agent engineering infrastructure',
    description:
      'A Python orchestrator that coordinates coding agents across isolated Git worktrees, schedules dependency-aware tasks, and merges only after automated review and tests pass.',
    proof: ['4 coding agents', '14 DAG tests', 'Under 200 ms editor sync'],
    tech: ['Python', 'Git worktrees', 'DAG scheduling', 'CRDT', 'FastAPI'],
    links: [
      { label: 'View repository', href: 'https://github.com/RishiiGamer2201/polyagent-ci', icon: Github },
    ],
    tone: 'blue',
  },
  {
    index: '02',
    name: 'Sherpa',
    label: 'Published local AI developer tool',
    description:
      'A PyPI package that reads the latest terminal error and explains what failed, why it failed, and how to fix it using a fully local language model with no API key.',
    proof: ['Published on PyPI', '5 local model options', 'PowerShell, bash, zsh, fish'],
    tech: ['Python', 'llama.cpp', 'GGUF', 'Local inference', 'CLI'],
    links: [
      { label: 'View on PyPI', href: 'https://pypi.org/project/sherpa-dev/', icon: ArrowUpRight },
      { label: 'View repository', href: 'https://github.com/RishiiGamer2201/sherpa', icon: Github },
    ],
    tone: 'green',
  },
  {
    index: '03',
    name: 'Process Reward Model for Multi-Hop QA',
    label: 'Reasoning evaluation for RAG',
    description:
      'A process reward model over a HotpotQA retrieval pipeline that scores intermediate reasoning steps, filters weak retrievals, and evaluates answer quality with uncertainty-aware reporting.',
    proof: ['Step-level scoring', '5 RAGAS metrics', 'Bootstrap confidence intervals'],
    tech: ['Python', 'PyTorch', 'FAISS', 'Cross-encoder', 'RAGAS'],
    links: [
      { label: 'View repository', href: 'https://github.com/RishiiGamer2201/prm-hotpotqa', icon: Github },
    ],
    tone: 'violet',
  },
  {
    index: '04',
    name: 'Nyaya Navigator',
    label: 'Offline multilingual legal navigation',
    description:
      'A local-first legal information system that confirms facts, retrieves date-applicable official law, verifies each claim against sources, and refuses or escalates unsafe requests.',
    proof: ['6,845 law chunks', 'English, Hindi, Hinglish', 'Local inference'],
    tech: ['Python', 'FastAPI', 'React', 'EmbeddingGemma', 'OCR'],
    links: [
      { label: 'View repository', href: 'https://github.com/RishiiGamer2201/Gemma_Hack', icon: Github },
    ],
    tone: 'blue',
  },
  {
    index: '05',
    name: 'Digital Twin of Nikola Tesla',
    label: 'Grounded conversational RAG',
    description:
      'A deployed conversational twin grounded in Tesla writings, patents, and interviews, with passage retrieval, citations, persistent memory, streaming, and an interactive knowledge graph.',
    proof: ['Source citations', 'Persistent memory', 'Streamed responses'],
    tech: ['RAG', 'ChromaDB', 'Gemini', 'React', 'FastAPI'],
    links: [
      { label: 'Live demo', href: 'https://logicpalette-digital-twin-tesla.hf.space/', icon: ArrowUpRight },
      { label: 'View repository', href: 'https://github.com/RishiiGamer2201/digital-twin-tesla', icon: Github },
    ],
    tone: 'amber',
  },
  {
    index: '06',
    name: 'Jarvis',
    label: 'Voice and gesture desktop control',
    description:
      'A multimodal desktop-control system with real-time hand tracking, ten built-in gestures, user-defined gesture training, voice commands, and a live Flask dashboard.',
    proof: ['99.54% measured accuracy', '3,261 samples', 'Under 50 ms latency'],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'KNN', 'Socket.IO'],
    links: [
      { label: 'Watch demo', href: 'https://www.youtube.com/watch?v=thcPBI7ImGQ', icon: ArrowUpRight },
      { label: 'View repository', href: 'https://github.com/RishiiGamer2201/gesture-desktop-control', icon: Github },
    ],
    tone: 'violet',
  },
]

const capabilities = [
  {
    title: 'AI and ML',
    icon: BrainCircuit,
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'RAG', 'NLP', 'LLMs', 'Active learning'],
  },
  {
    title: 'Vision systems',
    icon: Eye,
    items: ['OpenCV', 'MediaPipe', 'YOLO OBB', 'Segmentation', 'ONNX', 'Classification', 'Human review'],
  },
  {
    title: 'Product engineering',
    icon: Code2,
    items: ['Python', 'TypeScript', 'React', 'FastAPI', 'Flask', 'PostgreSQL', 'WebSocket', 'Docker'],
  },
  {
    title: 'Agent infrastructure',
    icon: GitBranch,
    items: ['Agent loops', 'Git worktrees', 'DAG scheduling', 'MCP', 'Evaluation', 'Failure recovery', 'GitHub'],
  },
]

const foundations = [
  {
    type: 'Education',
    title: 'Delhi Technological University',
    detail: 'B.Tech in Environmental Engineering, 2025 to 2029',
    note: '8.90/10 SGPA after Semester 1, independent focus in AI/ML and full-stack engineering',
  },
  {
    type: 'Coursework',
    title: 'DeepLearning.AI',
    detail: 'Deep Learning Specialization and Machine Learning Specialization',
    note: 'Neural networks, CNNs, sequence models, ML strategy, classical ML, and reinforcement learning',
  },
  {
    type: 'Coursework',
    title: 'CODE, IIT Madras',
    detail: 'Data Science and Artificial Intelligence',
    note: 'Eight-week structured program covering data science and applied AI foundations',
  },
]

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ContributionResponse = {
  total: Record<string, number>
  contributions: Contribution[]
}

const profileLinks = [
  { label: 'GitHub', handle: '@RishiiGamer2201', href: 'https://github.com/RishiiGamer2201', icon: Github },
  { label: 'LinkedIn', handle: 'rishiikumarsingh', href: 'https://www.linkedin.com/in/rishiikumarsingh/', icon: Linkedin },
  { label: 'LeetCode', handle: 'CrimsonHex', href: 'https://leetcode.com/u/CrimsonHex/', icon: Code2 },
  { label: 'X', handle: '@RishiiSingh2201', href: 'https://x.com/RishiiSingh2201', icon: XIcon },
]

function GitHubActivity() {
  const [response, setResponse] = useState<ContributionResponse | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://github-contributions-api.jogruber.de/v4/RishiiGamer2201?y=last', {
      signal: controller.signal,
    })
      .then((result) => {
        if (!result.ok) throw new Error('Contribution feed unavailable')
        return result.json() as Promise<ContributionResponse>
      })
      .then((data) => setResponse(data))
      .catch((error: Error) => {
        if (error.name !== 'AbortError') setFailed(true)
      })

    return () => controller.abort()
  }, [])

  const contributionData = response?.contributions ?? []
  const leadingCells = contributionData.length
    ? new Date(`${contributionData[0].date}T00:00:00`).getDay()
    : 0
  const chartCells: Array<Contribution | null> = contributionData.length
    ? [...Array.from({ length: leadingCells }, () => null), ...contributionData]
    : Array.from({ length: 365 }, () => null)
  const weekCount = Math.ceil(chartCells.length / 7)

  const monthLabels = useMemo(() => {
    const seen = new Set<string>()
    return contributionData.flatMap((day, index) => {
      const date = new Date(`${day.date}T00:00:00`)
      const key = `${date.getFullYear()}-${date.getMonth()}`
      if (seen.has(key)) return []
      seen.add(key)
      return [{
        label: date.toLocaleDateString('en-US', { month: 'short' }),
        column: Math.floor((leadingCells + index) / 7) + 1,
      }]
    })
  }, [contributionData, leadingCells])

  const total = response
    ? response.total.lastYear ?? Object.values(response.total).reduce((sum, value) => sum + value, 0)
    : null

  return (
    <div className="activity-card">
      <div className="activity-card-head">
        <div>
          <span>Rolling 12 months</span>
          <div className="activity-total">
            <strong>{total === null ? 'Loading' : total.toLocaleString('en-IN')}</strong>
            <p>public contributions</p>
          </div>
        </div>
        <a href="https://github.com/RishiiGamer2201" target="_blank" rel="noreferrer">
          View GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      {failed ? (
        <div className="activity-fallback">
          <Github size={24} />
          <p>Live activity is temporarily unavailable.</p>
          <a href="https://github.com/RishiiGamer2201" target="_blank" rel="noreferrer">Open GitHub profile</a>
        </div>
      ) : (
        <div className="activity-chart-shell">
          <div className="activity-chart">
            <div
              className="activity-months"
              style={{ gridTemplateColumns: `repeat(${weekCount}, minmax(0, 1fr))` }}
              aria-hidden="true"
            >
              {monthLabels.map((month) => (
                <span key={`${month.label}-${month.column}`} style={{ gridColumn: `${month.column} / span 4` }}>
                  {month.label}
                </span>
              ))}
            </div>
            <div
              className={`activity-heatmap ${response ? 'is-ready' : 'is-loading'}`}
              role="img"
              aria-label={total === null ? 'Loading GitHub contribution activity' : `${total} public GitHub contributions in the last 12 months`}
            >
              {chartCells.map((day, index) => (
                <span
                  className={day ? `activity-cell level-${day.level}` : 'activity-cell level-0'}
                  key={day?.date ?? `empty-${index}`}
                  title={day ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}` : undefined}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="activity-card-foot">
        <span><i className="live-dot" /> Updated from public GitHub activity</span>
        <div className="activity-legend" aria-label="Contribution intensity legend">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => <i className={`activity-cell level-${level}`} key={level} />)}
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main id="main-content">
      <section id="home" className="hero-shell section-frame">
        <div className="hero-copy">
          <div className="eyebrow-row hero-reveal">
            <span className="status-dot" aria-hidden="true" />
            <span>AI/ML engineer and undergraduate researcher</span>
          </div>
          <h1 className="hero-title hero-reveal delay-1">
            I build AI systems that survive contact with <span>real data.</span>
          </h1>
          <p className="hero-intro hero-reveal delay-2">
            I work across computer vision, grounded language systems, AI agents, and product engineering. My focus is simple: measured outcomes, explicit failure handling, and software people can actually use.
          </p>
          <div className="hero-actions hero-reveal delay-3">
            <Button asChild className="button button-primary">
              <a href="#work">Explore selected work <ArrowDownRight size={18} /></a>
            </Button>
            <Button asChild variant="outline" className="button button-secondary">
              <a href="/resume.pdf" download>Download resume <Download size={17} /></a>
            </Button>
          </div>
          <div className="hero-links hero-reveal delay-4">
            <a href="https://github.com/RishiiGamer2201" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/rishiikumarsingh/" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <span><MapPin size={17} /> New Delhi, India</span>
          </div>
        </div>

        <motion.aside
          className="systems-panel"
          aria-label="Engineering focus map"
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="panel-head">
            <span>BUILD LOG / 2026</span>
            <span className="panel-state">ACTIVE</span>
          </div>
          <div className="system-map" aria-hidden="true">
            <span className="map-line line-a" />
            <span className="map-line line-b" />
            <span className="map-line line-c" />
            <div className="map-node node-input"><small>01</small><strong>PERCEIVE</strong><span>vision + language</span></div>
            <div className="map-node node-reason"><small>02</small><strong>REASON</strong><span>retrieve + verify</span></div>
            <div className="map-node node-ship"><small>03</small><strong>SHIP</strong><span>measure + iterate</span></div>
            <div className="map-core"><Network size={28} /><span>RKS</span></div>
          </div>
          <div className="panel-foot">
            <span>Evidence before confidence</span>
            <ShieldCheck size={18} />
          </div>
        </motion.aside>
      </section>

      <section className="proof-section section-frame" aria-label="Selected results">
        <div className="proof-heading">
          <span>Measured outcomes</span>
          <p>Selected signals from research, engineering, and open source.</p>
        </div>
        <div className="proof-grid">
          <article className="proof-card">
            <div className="proof-meta"><span>01</span><span>Vision benchmark</span></div>
            <strong>0.921</strong>
            <p>Vessel detection mAP50</p>
          </article>
          <article className="proof-card">
            <div className="proof-meta"><span>02</span><span>Program ranking</span></div>
            <strong>Top 4%</strong>
            <p>GSSoC 2026 contributor ranking</p>
          </article>
          <article className="proof-card">
            <div className="proof-meta"><span>03</span><span>Merged work</span></div>
            <strong>13</strong>
            <p>Open-source pull requests</p>
          </article>
          <article className="proof-card">
            <div className="proof-meta"><span>04</span><span>Retrieval scope</span></div>
            <strong>6,845</strong>
            <p>Official-law chunks indexed</p>
          </article>
        </div>
      </section>

      <section id="about" className="section-frame section-block about-section">
        <div className="section-kicker"><span>01</span><p>Operating principles</p></div>
        <div className="section-heading split-heading">
          <h2>Engineering with a research loop.</h2>
          <p>
            The best systems come from asking sharper questions, measuring the right failure modes, and turning the findings into a product loop. That is how I approach both research and shipping.
          </p>
        </div>
        <div className="principles-grid">
          <article>
            <span>01 / Inspect</span>
            <Eye size={26} />
            <h3>Find the hidden failure</h3>
            <p>Check the data, splits, assumptions, and confidence path before tuning the model.</p>
          </article>
          <article>
            <span>02 / Verify</span>
            <CheckCircle2 size={26} />
            <h3>Make evidence visible</h3>
            <p>Use reproducible evaluation, citations, human review, and explicit refusal instead of plausible output.</p>
          </article>
          <article>
            <span>03 / Ship</span>
            <GitBranch size={26} />
            <h3>Close the product loop</h3>
            <p>Connect models to usable interfaces, deployment constraints, monitoring, and fast iteration.</p>
          </article>
        </div>
      </section>

      <section id="experience" className="section-block section-dark">
        <div className="section-frame">
          <div className="section-kicker light"><span>02</span><p>Experience</p></div>
          <div className="section-heading split-heading light">
            <h2>Work measured by what changed.</h2>
            <p>Defense imagery, supervised research, open-source agent infrastructure, and geospatial decision support.</p>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <motion.article
                className="experience-row"
                key={`${item.organization}-${item.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <div className="experience-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="experience-title">
                  <p>{item.period}</p>
                  <h3>{item.role}</h3>
                  <span>{item.organization}</span>
                </div>
                <div className="experience-copy">
                  <p>{item.summary}</p>
                  <ul>
                    {item.evidence.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-frame section-block">
        <div className="section-kicker"><span>03</span><p>Selected work</p></div>
        <div className="section-heading split-heading">
          <h2>Systems, not screenshots.</h2>
          <p>Six projects that show how I handle orchestration, local inference, evaluation, retrieval, safety, multimodal interaction, and end-to-end product work.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article
              className={`project-card tone-${project.tone}`}
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -5, x: -5 }}
            >
              <div className="project-topline"><span>{project.index}</span><span>{project.label}</span></div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-proof">
                {project.proof.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-tech">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                    {link.label} <link.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="activity" className="section-block activity-section">
        <div className="section-frame">
          <div className="section-kicker light"><span>04</span><p>Open-source pulse</p></div>
          <div className="section-heading split-heading light">
            <h2>The work stays live.</h2>
            <p>A rolling view of public GitHub activity, plus the profiles where I build, solve, and share.</p>
          </div>
          <div className="activity-layout">
            <GitHubActivity />
            <aside className="profile-rail" aria-label="Developer profiles">
              {profileLinks.map((profile) => (
                <a href={profile.href} target="_blank" rel="noreferrer" key={profile.label}>
                  <span className="profile-icon"><profile.icon size={20} /></span>
                  <span><strong>{profile.label}</strong><small>{profile.handle}</small></span>
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section id="stack" className="section-block stack-section">
        <div className="section-frame">
          <div className="section-kicker"><span>05</span><p>Technical range</p></div>
          <div className="section-heading split-heading">
            <h2>From model behavior to product behavior.</h2>
            <p>I work across the full path: data inspection, experiments, APIs, interfaces, deployment, and agent-assisted engineering.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((group) => (
              <article key={group.title}>
                <div className="capability-head"><group.icon size={22} /><h3>{group.title}</h3></div>
                <div className="capability-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-frame section-block foundations-section">
        <div className="section-kicker"><span>06</span><p>Foundations</p></div>
        <div className="section-heading split-heading">
          <h2>Academic base and independent depth.</h2>
          <p>My degree provides the systems context. Focused AI coursework and projects provide the technical depth.</p>
        </div>
        <div className="foundations-grid">
          {foundations.map((item) => (
            <article key={item.title}>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <small>{item.note}</small>
            </article>
          ))}
        </div>
        <div className="recognition-row">
          <div><strong>Winner</strong><span>Green Tag Case Competition, BITS Pilani APOGEE 2026</span></div>
          <div><strong>Top 10%</strong><span>Indian Olympiad Qualifier in Mathematics</span></div>
          <div><strong>3 times</strong><span>UPSC NDA and NA written examination qualified</span></div>
        </div>
      </section>

      <section id="contact" className="section-dark contact-section">
        <div className="section-frame contact-grid">
          <div>
            <div className="section-kicker light"><span>07</span><p>Contact</p></div>
            <h2>Have a hard AI problem worth measuring?</h2>
          </div>
          <div className="contact-copy">
            <p>
              I am interested in AI engineering roles, research collaborations, and teams building reliable agentic or multimodal systems.
            </p>
            <a className="contact-email" href="mailto:rishiikumarsingh2201@gmail.com">
              <Mail size={20} /> rishiikumarsingh2201@gmail.com <ArrowUpRight size={20} />
            </a>
            <div className="contact-links">
              <a href="https://github.com/RishiiGamer2201" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/rishiikumarsingh/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="/resume.pdf" download><BookOpen size={17} /> Resume</a>
            </div>
          </div>
        </div>
        <footer className="site-footer section-frame">
          <div className="site-footer-inner">
            <span>Rishii Kumar Singh</span>
            <span>Built with React, TypeScript, Vite, Tailwind, Framer Motion, Lenis, Lucide, and shadcn/ui.</span>
            <span>New Delhi, India</span>
          </div>
        </footer>
      </section>
    </main>
  )
}
