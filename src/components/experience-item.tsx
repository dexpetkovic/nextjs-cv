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
    <div className={'bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col items-center w-full mb-4'}>
      <div className="flex flex-col items-center mb-8 w-full">
        <p className="text-xl font-bold text-center mb-2 dark:text-white light:text-black">
          {timeUtil.formatToReadableDate(from)} - {timeUtil.formatToReadableDate(to)}
        </p>
        <p className="text-xl font-semibold text-center dark:text-white light:text-black mb-2">
          {role} at {company}
        </p>
      </div>
      <p className="font-bold text-center dark:text-white light:text-black mb-2" dangerouslySetInnerHTML={{ __html: summary }} />
      <p className="font-bold text-center dark:text-white light:text-black mb-2">{keyTakeaway}</p>
      <ul className="list-disc pl-8 w-full flex flex-col items-start">
        {highlights.map((h, index) => (
          <li key={index} className="text-sm dark:text-gray-300 light:text-gray-700 mb-1">
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
