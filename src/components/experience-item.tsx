import { format } from 'date-fns'
import React from 'react'

export type ExperienceItemProps = {
  role: string
  company: string
  companyHref?: string
  summary: string
  highlights: string[]
  stack?: string[]
  from?: Date
  to?: Date
}

export const ExperienceItem = ({
  role,
  company,
  companyHref,
  summary,
  highlights,
  stack,
  from,
  to,
}: ExperienceItemProps): React.ReactElement => {
  const range = from
    ? `${format(from, 'MMM yyyy')} to ${to ? format(to, 'MMM yyyy') : 'present'}`
    : 'Ongoing'

  return (
    <article className="exp">
      <div className="exp-head">
        <h3>
          {role},{' '}
          {companyHref ? (
            <a href={companyHref} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        <span className="exp-range">{range}</span>
      </div>
      {summary ? <p dangerouslySetInnerHTML={{ __html: summary }} /> : null}
      <ul>
        {highlights.map((h, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
        ))}
      </ul>
      {stack ? <div className="exp-stack">{stack.join(' · ')}</div> : null}
    </article>
  )
}
