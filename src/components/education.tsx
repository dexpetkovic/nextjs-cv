import React from 'react'

type EduEntry = {
  yr: string
  range: string
  degree: string
  school: string
  specialization: string
}

const education: EduEntry[] = [
  {
    yr: '2009',
    range: 'Sep 2009 to Feb 2011',
    degree: 'Masters Course: System Engineering and Radio Communications',
    school: 'Faculty of Electrical Engineering, University of Belgrade',
    specialization: 'Telecommunications and software engineering',
  },
  {
    yr: '2002',
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
    <section id="education">
      <div className="eyebrow">§ 05 · Education</div>
      <h2 className="section-title">
        Where it <em>started</em>.
      </h2>

      <div className="exp-list">
        {education.map((e) => (
          <article className="exp" key={e.yr}>
            <div className="exp-date">
              <span className="yr">{e.yr}</span>
              <span className="range">{e.range}</span>
            </div>
            <div className="exp-body">
              <h3>{e.degree}</h3>
              <div className="co">{e.school}</div>
              <p>Specialization: {e.specialization}</p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <div className="skill-group">
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
