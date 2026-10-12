import React from 'react'

export const Hero = (): React.ReactElement => {
  return (
    <section className="hero" id="top">
      <div className="hero-head">
        <div className="hero-intro">
          <h1 className="hero-name">
            Dejan
            <br />
            <span className="it">Petković</span>
          </h1>
          <p className="hero-role">
            Lead AI Engineer at{' '}
            <a href="https://delphyr.ai" target="_blank" rel="noopener noreferrer">
              Delphyr B.V.
            </a>{' '}
            and founder of Elands AI.
          </p>
        </div>

        <img
          className="hero-portrait"
          src="/DP-profile.jpg"
          alt="Dejan Petković, smiling, in Amsterdam"
        />
      </div>

      <dl className="hero-meta">
        <div>
          <dt>Citizenship</dt>
          <dd>Dutch 🇳🇱</dd>
        </div>
        <div>
          <dt>Languages</dt>
          <dd>English, Dutch, Serbian, German</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>Python, TypeScript, GenAI</dd>
        </div>
        <div>
          <dt>Experience</dt>
          <dd>Since 2008</dd>
        </div>
      </dl>
    </section>
  )
}
