import React from 'react'

type StandardProject = {
  title: string
  domain: string
  description: string
  href: string
}

const projects: StandardProject[] = [
  {
    title: 'Biller',
    domain: 'biller.elands.studio',
    description:
      'Professional invoicing for freelancers. Create, send, and track invoices in seconds. One-time purchase, no subscriptions.',
    href: 'https://biller.elands.studio/',
  },
  {
    title: 'Bouwen',
    domain: 'bouwen.elands.studio',
    description:
      'Renovation project communication for the Dutch market. Print a QR code for your window and let neighbours follow your renovation in real time.',
    href: 'https://bouwen.elands.studio/',
  },
  {
    title: '2e-woning.nl',
    domain: '2e-woning.nl',
    description: 'Box 3 tax calculator for a second home and other investments. Built for the Dutch market.',
    href: 'https://2e-woning.nl',
  },
  {
    title: 'brAIn',
    domain: 'github.com/dexpetkovic/brAIn',
    description:
      'WhatsApp-based AI assistant built with NestJS and Google Gemini. Handles WhatsApp webhook events and generates contextual replies, with an MCP server that lets the model store, update and retrieve memories.',
    href: 'https://github.com/dexpetkovic/brAIn',
  },
]

const ProjectCard = ({ p }: { p: StandardProject }) => (
  <article className="proj">
    <h3>{p.title}</h3>
    <p>{p.description}</p>
    <a className="domain" href={p.href} target="_blank" rel="noopener noreferrer">
      {p.domain}
    </a>
  </article>
)

export const PersonalProjects = (): React.ReactElement => {
  return (
    <section id="projects" className="rail">
      <h2 className="section-title">Projects</h2>

      <div className="proj-list">
        <article className="proj featured">
          <div className="proj-kicker">AI for the medical field · delphyr.ai</div>
          <h3>Delphyr</h3>
          <p>
            An AI platform built specifically for the medical field. We are bringing AI into real
            clinical workflows, from hospitals to GP practices. With the product platform in place,
            I now focus on the AI layer: prompt design, guardrails, evals, integrations and
            observability.
          </p>
          <div className="proj-facts">
            <span>Lead AI Engineer since 07/2025</span>
            <span>Python, TypeScript, FastAPI, Kubernetes</span>
            <a href="https://delphyr.ai" target="_blank" rel="noopener noreferrer">
              Visit Delphyr
            </a>
          </div>
        </article>

        <div className="proj-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
