import React from 'react'

export const Hero = (): React.ReactElement => {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">Portfolio · 2008 to Today</div>
          <h1 className="hero-name">
            Dejan
            <br />
            <span className="it">Petković</span>
          </h1>
          <div className="hero-role">
            <span className="pill">AI engineering</span>
            <span className="pill">Fullstack · Cloud</span>
          </div>
        </div>

        <figure className="hero-portrait" aria-label="Portrait of Dejan Petković">
          <img src="/DP-profile.jpg" alt="Dejan Petković, smiling, in Amsterdam" />
          <figcaption className="badge">
            <span className="dot" />
            That&rsquo;s me. Hi.
          </figcaption>
        </figure>

        <aside className="hero-meta">
          <div className="row">
            <div className="k">Founder of</div>
            <div className="v">Elands AI</div>
          </div>
          <div className="row">
            <div className="k">Currently</div>
            <div className="v">
              Lead AI Engineer at{' '}
              <a href="https://delphyr.ai" target="_blank" rel="noopener noreferrer">
                Delphyr B.V.
              </a>
            </div>
          </div>
          <div className="row">
            <div className="k">Citizenship</div>
            <div className="v">Dutch 🇳🇱</div>
          </div>
          <div className="row">
            <div className="k">Languages</div>
            <div className="v">EN · NL · SR · DE · RU</div>
          </div>
          <div className="row">
            <div className="k">Stack</div>
            <div className="v">Python - TypeScript - GenAI</div>
          </div>
        </aside>
      </div>

      <div className="hero-bio">
        <div className="eyebrow">Intro</div>
        <p>
          I started my career as a system engineer back in 2008, and over the years built up deep
          fullstack engineering experience across React, Node.js, Python, and cloud platforms.
          That hands-on breadth is what I <em>now bring to AI engineering</em> as the founder of
          Elands AI.
        </p>
      </div>
    </section>
  )
}
