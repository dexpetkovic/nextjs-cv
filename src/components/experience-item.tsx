import { format } from 'date-fns'
import React from 'react'

export type ExperienceItemProps = {
  role: string
  company: string
  companyHref?: string
  companyDescriptor?: string
  summary: string
  highlights: string[]
  from: Date
  to?: Date
}

export const ExperienceItem = ({
  role,
  company,
  companyHref,
  companyDescriptor,
  summary,
  highlights,
  from,
  to,
}: ExperienceItemProps): React.ReactElement => {
  const isCurrent = !to
  const yr = format(from, 'yyyy')
  const range = `${format(from, 'MMM yyyy')} — ${isCurrent ? 'Present' : format(to!, 'MMM yyyy')}`

  return (
    <article className="exp">
      <div className="exp-date">
        <span className="yr">{yr}</span>
        <span className="range">{range}</span>
        {isCurrent ? <span className="current">Active</span> : null}
      </div>
      <div className="exp-body">
        <h3>{role}</h3>
        <div className="co">
          {companyHref ? (
            <a href={companyHref} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
          {companyDescriptor ? <> · {companyDescriptor}</> : null}
        </div>
        {summary ? <p dangerouslySetInnerHTML={{ __html: summary }} /> : null}
        <ul>
          {highlights.map((h, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
          ))}
        </ul>
      </div>
    </article>
  )
}
