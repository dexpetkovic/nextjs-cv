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
      'Professional invoicing for freelancers. Create, send, and track invoices in seconds. One-time purchase, no subscriptions.',
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
    tag: 'LLM · WhatsApp · MCP',
    title: 'brAIn',
    domain: 'github.com/dexpetkovic/brAIn',
    description:
      'WhatsApp-based AI assistant built with NestJS and Google Gemini. Handles WhatsApp webhook events and generates contextual replies, with an MCP server that lets the model store, update and retrieve memories.',
    href: 'https://github.com/dexpetkovic/brAIn',
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
      {p.cta}
    </a>
  </article>
)

export const PersonalProjects = (): React.ReactElement => {
  return (
    <section id="projects">
      <div className="proj-head">
        <div>
          <div className="eyebrow">§ 02 · Projects &amp; Services</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Things I have <em>built</em>.
          </h2>
        </div>
        <div className="selected">Selected · 2017 to 2026</div>
      </div>

      <div className="proj-grid">
        <article className="proj featured">
          <div>
            <span className="proj-num">01 · Featured</span>
            <span className="proj-tag">AI for the medical field</span>
            <h3>Delphyr</h3>
            <div className="domain">delphyr.ai</div>
            <p>
              An AI platform built specifically for the medical field. We are bringing AI into
              real clinical workflows, from hospitals to GP practices. With the product platform
              in place, I now focus on the AI layer: prompt design, guardrails, evals,
              integrations and observability.
            </p>
            <a className="visit" href="https://delphyr.ai" target="_blank" rel="noopener noreferrer">
              Visit Delphyr
            </a>
            <div className="meta-strip">
              <div>
                <div className="k">Role</div>
                <div className="v">Lead</div>
                <div className="s">AI Engineer since 07/2025</div>
              </div>
              <div>
                <div className="k">Stack</div>
                <div className="v">Py / TS</div>
                <div className="s">FastAPI · Kubernetes</div>
              </div>
              <div>
                <div className="k">Focus</div>
                <div className="v">AI layer</div>
                <div className="s">Prompts · evals · obs.</div>
              </div>
            </div>
          </div>
          <div className="built-list">
            <div className="built-head">What I built</div>
            <div>· EHR integrations across four vendors</div>
            <div>· KEK/DEK envelope encryption</div>
            <div>· Release gating on eval regressions</div>
            <div>· LangWatch observability &amp; PHI-safe tracing</div>
            <div>· Prompt design &amp; grounding for ambient clinical documentation</div>
            <div>· Nebius Kubernetes cluster &amp; ArgoCD GitOps</div>
          </div>
        </article>

        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
