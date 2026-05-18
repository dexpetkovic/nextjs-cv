import React from 'react'

type StandardProject = {
  num: string
  tag: string
  title: string
  domain: string
  description: string
  href: string
  cta: string
}

const projects: StandardProject[] = [
  {
    num: '02',
    tag: 'SaaS · Finance',
    title: 'Biller',
    domain: 'biller.elands.studio',
    description:
      'Professional invoicing for freelancers. Create, send, and track invoices in seconds — one-time purchase, no subscriptions.',
    href: 'https://biller.elands.studio/',
    cta: 'Visit Biller',
  },
  {
    num: '03',
    tag: 'Civic · Dutch market',
    title: 'Bouwen',
    domain: 'bouwen.elands.studio',
    description:
      'Renovation project communication for the Dutch market. Print a QR code for your window and let neighbours follow your renovation in real time.',
    href: 'https://bouwen.elands.studio/',
    cta: 'Visit Bouwen',
  },
  {
    num: '04',
    tag: 'Tax · Calculator',
    title: '2e-woning.nl',
    domain: '2e-woning.nl',
    description:
      'Box 3 tax calculator: easily calculate your tax for a second home and other investments. Built for the Dutch market.',
    href: 'http://2e-woning.nl',
    cta: 'Visit 2e-woning.nl',
  },
  {
    num: '05',
    tag: 'LLM · WhatsApp bot',
    title: 'brAIn',
    domain: 'github.com/dexpetkovic/brAIn-demo',
    description:
      'WhatsApp AI assistant built with NestJS and Google Gemini. Handles webhooks, stores memories, creates calendar events, and provides automated replies.',
    href: 'https://github.com/dexpetkovic/brAIn-demo',
    cta: 'View on GitHub',
  },
]

const ProjectCard = ({ p }: { p: StandardProject }) => (
  <article className="proj">
    <span className="proj-num">{p.num}</span>
    <span className="proj-tag">{p.tag}</span>
    <h3>{p.title}</h3>
    <div className="domain">{p.domain}</div>
    <p>{p.description}</p>
    <a className="visit" href={p.href} target="_blank" rel="noopener noreferrer">
      {p.cta} <span className="arrow">→</span>
    </a>
  </article>
)

export const PersonalProjects = (): React.ReactElement => {
  return (
    <section id="projects">
      <div className="proj-head">
        <div>
          <div className="eyebrow">§ 02 — Projects &amp; Services</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Things I have <em>built</em>.
          </h2>
        </div>
        <div className="selected">Selected · 2017–2026</div>
      </div>

      <div className="proj-grid">
        <article className="proj featured">
          <div>
            <span className="proj-num">01 · Featured</span>
            <span className="proj-tag">Medical AI SaaS · Built from scratch</span>
            <h3>Delphyr</h3>
            <div className="domain">delphyr.ai</div>
            <p>
              A next-generation AI platform for the medical field — secure, scalable SaaS bringing
              AI into real clinical workflows.{' '}
              <strong className="accent-strong">
                Built together with the founder, I shipped Delphyr practically from scratch as the
                founding engineer — with a tiny team of one additional engineer and one data
                scientist
              </strong>{' '}
              — owning architecture, infrastructure, backend, mobile, and the AI/ML pipeline end to
              end.
            </p>
            <a className="visit" href="https://delphyr.ai" target="_blank" rel="noopener noreferrer">
              Visit Delphyr <span className="arrow">→</span>
            </a>
            <div className="meta-strip">
              <div>
                <div className="k">Team</div>
                <div className="v">1 + 3</div>
                <div className="s">Founder + me + eng + DS</div>
              </div>
              <div>
                <div className="k">Stack</div>
                <div className="v">TS / Py</div>
                <div className="s">NestJS · React Native</div>
              </div>
              <div>
                <div className="k">Scope</div>
                <div className="v">E2E</div>
                <div className="s">Infra → model → UI</div>
              </div>
            </div>
          </div>
          <div className="built-list">
            <div className="built-head">What I built</div>
            <div>· Cloud-native architecture &amp; CI/CD</div>
            <div>· GenAI fine-tuning &amp; eval pipeline</div>
            <div>· Observability: Grafana · Tempo · ES</div>
            <div>· React / React Native frontends</div>
            <div>· NestJS / Python backends</div>
            <div>· Compliance &amp; data security model</div>
          </div>
        </article>

        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
