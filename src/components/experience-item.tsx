import { timeUtil } from '@/util/timeUtil'
import React from 'react'

export const ExperienceItem = (props: {
  role: string
  company: string
  from: Date
  to: Date
  highlights: string[]
}): React.ReactElement => {
  const { role, company, from, to, highlights } = props

  return (
    <div className={'flex flex-col items-start p-4'}>
      <div className="flex flex-row items-center">
        <p className="text-xl dark:text-white light:text-black space-x-2">
          {timeUtil.formatToReadableDate(from)} - {timeUtil.formatToReadableDate(to)}
        </p>
        <p className="text-xl dark:text-white light:text-black">
          {role} {company}
        </p>
      </div>
      <ul className="list-disc">
        {highlights.map((h) => (
          <li key={h.substring(0, 10)}>{h}</li>
        ))}
      </ul>
    </div>
  )
}
