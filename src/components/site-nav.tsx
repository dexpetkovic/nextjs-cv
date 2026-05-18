import React from 'react'

export const SiteNav = (): React.ReactElement => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <span className="nav-dot" aria-hidden="true" />
          <span>DEJAN&nbsp;PETKOVIĆ</span>
          <span style={{ color: 'var(--ink-3)' }}>/ END-TO-END PRODUCT &amp; AI ENGINEER</span>
        </div>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
