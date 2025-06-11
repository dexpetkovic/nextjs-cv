import React from 'react'

import { ExperienceItem } from '@/components/experience-item'
import { content } from '@/util/content'
import { timeUtil } from '@/util/timeUtil'

export const Experiences = (): React.ReactElement => {
  return (
    <div className="mb-16">
      <p className="text-xl md:text-4xl dark:text-white light:text-black text-center mt-16 mb-16">Experience</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {content.experiences.map((e) => (
          <div key={e.company}>
            <ExperienceItem
              key={e.company}
              role={e.role}
              company={e.company}
              summary={e.summary}
              keyTakeaway={e.keyTakeaway}
              from={new Date(e.from)}
              to={new Date(e.to ?? timeUtil.now())}
              highlights={e.highlights}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
