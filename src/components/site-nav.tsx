import React from 'react'

export const SiteNav = (): React.ReactElement => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <span>DEJAN&nbsp;PETKOVIĆ</span>
        </div>
        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
