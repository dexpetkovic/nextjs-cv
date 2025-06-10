import React from 'react'

import { timeUtil } from '@/util/timeUtil'

export const ExperienceItem = (props: {
  role: string
  company: string
  summary: string
  keyTakeaway: string
  from: Date
  to: Date
  highlights: string[]
}): React.ReactElement => {
  const { role, company, summary, keyTakeaway, from, to, highlights } = props

  return (
    <div className={'flex flex-col items-start mb-4 md:mb-16 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md'}>
      <div className="flex flex-row flex-wrap items-start mb-8">
        <p className="md:text-xl font-bold dark:text-white light:text-black mr-2">
          {timeUtil.formatToReadableDate(from)} - {timeUtil.formatToReadableDate(to)}:
        </p>
        <p className="md:text-xl font-semibold dark:text-white light:text-black">
          {role} at {company}
        </p>
      </div>
      <p className="md:text-l font-bold dark:text-white light:text-black mb-2" dangerouslySetInnerHTML={{ __html: summary }} />
      <p className="md:text-l font-bold dark:text-white light:text-black mb-2">{keyTakeaway}</p>{' '}
      <ul className="list-disc pl-8">
        {highlights.map((h, index) => (
          <li key={index} className="md:text-sm dark:text-gray-300 light:text-gray-700">
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
