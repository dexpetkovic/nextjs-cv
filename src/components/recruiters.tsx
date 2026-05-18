import React from 'react'

export const Recruiters = (): React.ReactElement => {
  return (
    <section id="recruiters">
      <div className="cta">
        <div>
          <div className="eyebrow-inverse">For recruiters</div>
          <h2 style={{ marginTop: 18 }}>
            You found <em>what you were looking for</em>.
          </h2>
          <p>Download the PDF and get in touch — I respond to most thoughtful inbound within 48 hours.</p>
        </div>
        <div className="actions">
          <a
            className="btn primary"
            href="/CV_Dejan_Petkovic.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download CV (PDF)</span>
            <span className="arrow">↓</span>
          </a>
          <a className="btn" href="#contact">
            <span>Send a message</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
