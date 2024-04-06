import { motion } from 'framer-motion'
import React from 'react'

import { ExperienceItem } from '@/components/experience-item'
import { content } from '@/util/content'
import { timeUtil } from '@/util/timeUtil'

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const Experiences = (): React.ReactElement => {
  return (
    <div className={'flex flex-col items-start justify-between'}>
      {content.experiences.map((e) => (
        <motion.div key={e.company} variants={itemVariants} whileInView={{ opacity: 1 }}>
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
        </motion.div>
      ))}
    </div>
  )
}
