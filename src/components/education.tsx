import React from 'react'

type EduEntry = {
  range: string
  degree: string
  school: string
  specialization: string
}

const education: EduEntry[] = [
  {
    range: 'Sep 2009 to Feb 2011',
    degree: 'Masters Course: System Engineering and Radio Communications',
    school: 'Faculty of Electrical Engineering, University of Belgrade',
    specialization: 'Telecommunications and software engineering',
  },
  {
    range: 'Oct 2002 to Aug 2007',
    degree: 'BSc of Electrical Engineering',
    school: 'Faculty of Electrical Engineering, University of Belgrade',
    specialization: 'Telecommunications and computer science',
  },
]

const certificates = [
  { label: 'Acclaim badges', href: 'https://www.credly.com/users/dejan-petkovic/badges' },
  {
    label: 'Coursera certificates',
    href: 'https://coursera.org/share/32a42acb44082359b7c10bfea2f765ee',
  },
]

export const Education = (): React.ReactElement => {
  return (
    <section id="education" className="rail">
      <h2 className="section-title">Education</h2>

      <div>
        <div className="exp-list">
          {education.map((e) => (
            <article className="exp" key={e.degree}>
              <div className="exp-head">
                <h3>{e.degree}</h3>
                <span className="exp-range">{e.range}</span>
              </div>
              <p>{e.school}</p>
              <p>Specialization: {e.specialization}</p>
            </article>
          ))}
        </div>

        <div className="skill-group edu-certs">
          <h4>Certificates</h4>
          <div className="skill-tags">
            {certificates.map((c) => (
              <a
                key={c.href}
                className="tag"
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
