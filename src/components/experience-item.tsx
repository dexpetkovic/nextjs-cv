import React from 'react'

import { timeUtil } from '@/util/timeUtil'

export const ExperienceItem = (props: {
  role: string
  company: string
  from: Date
  to: Date
  highlights: string[]
}): React.ReactElement => {
  const { role, company, from, to, highlights } = props

  return (
    <div className={'flex flex-col items-start p-4 mb-4 md:mb-16'}>
      <div className="flex flex-row items-start mb-8">
        <p className="md:text-xl dark:text-white light:text-black mr-8">
          {timeUtil.formatToReadableDate(from)} - {timeUtil.formatToReadableDate(to)}:
        </p>
        <p className="md:text-xl dark:text-white light:text-black">
          {role} {company}
        </p>
      </div>
      <ul className="list-disc pl-8">
        {highlights.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>
    </div>
  )
}
