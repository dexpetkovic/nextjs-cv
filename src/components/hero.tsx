import React from 'react'

export const Hero = (): React.ReactElement => {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Portfolio · 2008 → Today</div>
          <h1 className="hero-name">
            Dejan
            <br />
            <span className="it">Petković</span>
          </h1>
          <div className="hero-role">
            <span className="pill">
              <span className="dot" />
              Open to new projects
            </span>
            <span className="pill">End-to-end product</span>
            <span className="pill">AI · Fullstack · Cloud</span>
          </div>
        </div>
        <aside className="hero-meta">
          <div className="row">
            <div className="k">Founder of</div>
            <div className="v">Elands AI</div>
          </div>
          <div className="row">
            <div className="k">Currently</div>
            <div className="v">
              Founding AI Eng. at{' '}
              <a href="https://delphyr.ai" target="_blank" rel="noopener noreferrer">
                Delphyr.AI
              </a>
            </div>
          </div>
          <div className="row">
            <div className="k">Based in</div>
            <div className="v">Amsterdam, NL 🇳🇱</div>
          </div>
          <div className="row">
            <div className="k">Languages</div>
            <div className="v">EN · NL · SR · DE</div>
          </div>
          <div className="row">
            <div className="k">Stack</div>
            <div className="v">Next.js · FastAPI · LangWatch</div>
          </div>
        </aside>
      </div>

      <div className="hero-bio">
        <div className="eyebrow">Intro</div>
        <p>
          I take products <em>from zero to live</em> — architecture, infrastructure, backend,
          frontend, mobile, and the AI/ML pipeline. Seventeen years of engineering across the full
          stack means I can own the entire solution, not just one layer of it.
        </p>
      </div>
    </section>
  )
}
