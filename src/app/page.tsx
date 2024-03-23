'use client'

import * as amp from '@amplitude/analytics-browser'
import { NextUIProvider } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'

import { ContactForm } from '@/components/contact-form'
import { Experiences } from '@/components/experiences'
import { Profile } from '@/components/profile'
import { Title } from '@/components/title'
import { Video } from '@/components/video'
import { AmplitudeContextProvider } from '@/context/amplitude-context'

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

const App = (): React.ReactElement => {
  amp.track('HomePage')

  return (
    <NextUIProvider>
      <AmplitudeContextProvider>
        <main className="flex min-h-screen flex-col items-center justify-items-start sm:px-8 md:px-32 lg:px:64">
          <Title title={'Dejan Petković'} subtitle={'Curriculum Vitae'} />
          <Profile />
          <Video />
          <motion.div
            className={'flex flex-col items-start justify-between'}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView={{ opacity: 1 }}
          >
            <Experiences />
          </motion.div>
          {/*<ContactForm />*/}
        </main>
      </AmplitudeContextProvider>
    </NextUIProvider>
  )
}

export default App
