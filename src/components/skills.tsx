import React from 'react'

import { content } from '@/util/content'

const Skill = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col items-center w-full">
    <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <span key={item} className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white px-3 py-1 rounded-md text-sm font-medium">
          {item.trim()}
        </span>
      ))}
    </div>
  </div>
)

export const Skills = (): React.ReactElement => {
  return (
    <div>
        <p className="text-xl md:text-4xl dark:text-white light:text-black text-center mt-16 mb-16">Skills</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
        <Skill title="Programming Languages" items={content.programmingLanguages} />
        <Skill title="Frameworks" items={content.frameworks} />
        <Skill title="Software Platforms" items={content.softwarePlatforms} />
        <Skill title="Languages" items={content.languages} />
        </div>
    </div>
  )
}