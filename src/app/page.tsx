import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons/x-icon'
import {
  certifications,
  education,
  experience,
  highlights,
  honors,
  links,
  openSource,
  profile,
  projects,
  publications,
  research,
  skills,
  updated,
} from '@/content'

function Ext({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const external = href.startsWith('http')
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}

function Section({ id, label, children }: { id?: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="block">
      <h2 className="label">{label}</h2>
      {children}
    </section>
  )
}

function LinkRow({ items }: { items: { label: string; href: string }[] }) {
  if (!items.length) return null
  return (
    <span className="link-row">
      {items.map((l) => (
        <Ext href={l.href} key={l.label}>
          {l.label}
          <ArrowUpRight size={13} aria-hidden="true" />
        </Ext>
      ))}
    </span>
  )
}

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }

function useGitHub() {
  const [repos, setRepos] = useState<number | null>(null)
  const [days, setDays] = useState<Day[] | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    const c = new AbortController()
    fetch('https://api.github.com/users/RishiiGamer2201', { signal: c.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: { public_repos: number }) => setRepos(d.public_repos))
      .catch(() => {})
    fetch('https://github-contributions-api.jogruber.de/v4/RishiiGamer2201?y=last', { signal: c.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: { total: Record<string, number>; contributions: Day[] }) => {
        setDays(d.contributions)
        setTotal(d.total.lastYear ?? Object.values(d.total).reduce((a, b) => a + b, 0))
      })
      .catch(() => {})
    return () => c.abort()
  }, [])

  return { repos, days, total }
}

function Heatmap({ days, total }: { days: Day[]; total: number | null }) {
  const cells = useMemo(() => {
    const lead = new Date(`${days[0].date}T00:00:00`).getDay()
    return [...Array.from({ length: lead }, () => null), ...days]
  }, [days])
  return (
    <figure className="heatmap no-print">
      <div
        className="heatmap-grid"
        style={{ gridTemplateColumns: `repeat(${Math.ceil(cells.length / 7)}, 1fr)` }}
        role="img"
        aria-label={`${total ?? ''} public GitHub contributions in the last 12 months`}
      >
        {cells.map((d, i) => (
          <i
            key={d?.date ?? `pad-${i}`}
            className={`lv${d?.level ?? 0}${d ? '' : ' pad'}`}
            title={d ? `${d.count} on ${d.date}` : undefined}
          />
        ))}
      </div>
      <figcaption>
        {total !== null && <span>{total.toLocaleString('en-IN')} contributions in the last 12 months</span>}
        <span className="legend" aria-hidden="true">
          Less {[0, 1, 2, 3, 4].map((l) => <i className={`lv${l}`} key={l} />)} More
        </span>
      </figcaption>
    </figure>
  )
}

function linkIcon(kind: (typeof links)[number]['kind']) {
  if (kind === 'github') return <GithubIcon size={15} />
  if (kind === 'linkedin') return <LinkedinIcon size={15} />
  if (kind === 'x') return <XIcon size={15} />
  return <ArrowUpRight size={15} />
}

export default function Home() {
  const gh = useGitHub()

  return (
    <main id="main-content" className="desk">
      <motion.article
        className="sheet"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="sheet-head">
          <div>
            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <div className="contact">
              <a href={`mailto:${profile.email}`}><Mail size={14} aria-hidden="true" />{profile.email}</a>
              <Ext href={links[0].href}><GithubIcon size={14} aria-hidden="true" />github.com/{links[0].handle}</Ext>
              <Ext href={links[1].href}><LinkedinIcon size={14} aria-hidden="true" />in/{links[1].handle}</Ext>
              <span><MapPin size={14} aria-hidden="true" />{profile.location}</span>
            </div>
          </div>
          <img className="avatar" src={profile.avatar} alt="" width={104} height={104} />
        </header>

        <ul className="highlights" aria-label="Highlights">
          {highlights.map((h) => (
            <li key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </li>
          ))}
        </ul>

        <div className="columns">
          <div className="main-col">
            <Section id="summary" label="Summary">
              <p className="summary">{profile.summary}</p>
            </Section>

            <Section id="publications" label="Publications">
              <ol className="pubs">
                {publications.map((p) => (
                  <li key={p.title}>
                    <div className="item-top">
                      <span className="pub-title">{p.title}</span>
                      <span className={`chip ${p.status === 'Accepted' ? 'ok' : 'wait'}`}>{p.status}</span>
                    </div>
                    <p className="meta">{p.authors.replace(/\.$/, '')}. <em>{p.venue}</em>.</p>
                    {p.note && <p className="note">{p.note}</p>}
                    <LinkRow items={p.links} />
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="research" label="Research and competitions">
              <div className="entries">
                {research.map((r) => (
                  <article key={r.name}>
                    <div className="item-top">
                      <h3>{r.name}</h3>
                      {r.result && <span className="result">{r.result}</span>}
                    </div>
                    <p className="meta">{r.context}</p>
                    <ul>{r.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                    <LinkRow items={r.links} />
                  </article>
                ))}
              </div>
            </Section>

            <Section id="experience" label="Experience">
              <div className="entries">
                {experience.map((e) => (
                  <article key={`${e.org}-${e.role}`}>
                    <div className="item-top">
                      <h3>{e.role}<span className="org">, {e.org}</span></h3>
                      <span className="period">{e.period}</span>
                    </div>
                    <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="projects" label="Selected projects">
              <div className="projects">
                {projects.map((p) => (
                  <article key={p.name}>
                    <div className="item-top">
                      <h3>{p.name}</h3>
                      {p.tag && <span className="result">{p.tag}</span>}
                    </div>
                    <p>{p.line}</p>
                    <p className="meta">
                      {p.tech}
                      <LinkRow items={p.links} />
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="open-source" label="Open source">
              <p className="lead">
                <Ext href={openSource.search}>{openSource.summary}</Ext>
              </p>
              <dl className="oss">
                {openSource.items.map((o) => (
                  <div key={o.repo}>
                    <dt><Ext href={o.href}>{o.repo}</Ext></dt>
                    <dd>{o.what}</dd>
                  </div>
                ))}
              </dl>
              {gh.days && gh.days.length > 0 && <Heatmap days={gh.days} total={gh.total} />}
            </Section>
          </div>

          <aside className="side-col">
            <Section label="Status">
              <p className="status"><i aria-hidden="true" />{profile.status}</p>
            </Section>

            <Section label="Skills">
              {skills.map((s) => (
                <div className="skill-group" key={s.group}>
                  <h3>{s.group}</h3>
                  <div className="chips">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
                </div>
              ))}
            </Section>

            <Section label="On GitHub">
              <dl className="stats">
                {gh.repos !== null && <div><dt>Public repositories</dt><dd>{gh.repos}</dd></div>}
                {gh.total !== null && <div><dt>Contributions (year)</dt><dd>{gh.total.toLocaleString('en-IN')}</dd></div>}
                <div><dt>Merged pull requests</dt><dd>42</dd></div>
              </dl>
            </Section>

            <Section label="Education">
              <h3 className="side-title">{education.school}</h3>
              <p className="side-text">{education.degree}</p>
              <p className="side-meta">{education.period}. {education.note}.</p>
            </Section>

            <Section label="Honors">
              <ul className="honors">
                {honors.map((h) => (
                  <li key={h.what}><span>{h.what}</span><small>{h.when}</small></li>
                ))}
              </ul>
            </Section>

            <Section label="Certifications">
              <ul className="plain">
                {certifications.map((c) => <li key={c.what}><Ext href={c.href}>{c.what}</Ext></li>)}
              </ul>
            </Section>

            <Section label="Elsewhere">
              <ul className="elsewhere">
                {links.map((l) => (
                  <li key={l.label}>
                    <Ext href={l.href}>
                      {linkIcon(l.kind)}
                      <span>{l.label}</span>
                      <small>{l.handle}</small>
                    </Ext>
                  </li>
                ))}
              </ul>
            </Section>
          </aside>
        </div>

        <footer className="sheet-foot">
          <span>Updated {updated}</span>
          <a className="text-button no-print" href="/resume.pdf" download="Rishii_Kumar_Singh_Resume.pdf">
            <Download size={14} aria-hidden="true" /> Download resume (PDF)
          </a>
        </footer>
      </motion.article>
    </main>
  )
}
