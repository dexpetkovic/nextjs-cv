'use client'

import { Title } from '@/components/title'
import { ExperienceItem } from '@/components/experience-item'
import { timeUtil } from '@/util/timeUtil'
import { motion } from 'framer-motion'
import * as amp from '@amplitude/analytics-browser'
import { AboutMe } from '@/components/about-me'
import { AmplitudeContextProvider } from '@/components/amplitude-context'
import { content } from '@/util/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Home() {
  amp.track('HomePage')
  return (
    <AmplitudeContextProvider>
      <main className="flex min-h-screen flex-col items-center justify-items-start sm:p-8 md:p-24">
        <Title title={'Dejan Petković'} subtitle={'Curriculum Vitae'} />
        {content.profile.map((content, index) => (
          <AboutMe key={index} content={content} />
        ))}
        <motion.div
          className={'flex flex-col items-start justify-between px-24'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView={{ opacity: 1 }}
        >
          <div className={'flex flex-col items-start justify-between sm:p-8 md:px-24'}>
            {content.experiences.map((e) => (
              <motion.div key={e.company} variants={itemVariants} whileInView={{ opacity: 1 }}>
                <ExperienceItem
                  key={e.company}
                  role={e.role}
                  company={e.company}
                  from={new Date(e.from)}
                  to={new Date(e.to ?? timeUtil.now())}
                  highlights={e.highlights}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </AmplitudeContextProvider>
  )
}
