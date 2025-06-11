'use client'

import * as amp from '@amplitude/analytics-browser'
import { motion } from 'framer-motion'
import Script from 'next/script'
import React from 'react'

import { ContactForm } from '@/components/contact-form'
import { Experiences } from '@/components/experiences'
import { Footer } from '@/components/footer'
import { Profile } from '@/components/profile'
import { Recruiters } from '@/components/recruiters'
import { Skills } from '@/components/skills'
import { Title } from '@/components/title'
import { Video } from '@/components/video'

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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:w-3/4 mx-auto">
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="lazyOnload"></Script>
      <Title title={'Hello, I am Dejan!'} subtitle={'I am an Engineer, Allround Developer and proud father'} />
      <motion.div
        id="experiences"
        className={'flex flex-col justify-between'}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView={{ opacity: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <Profile />
          <Video />
        </div>
        <Skills />
        <Experiences />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full justify-items-center">
        <Recruiters />
        <ContactForm/>
      </div>
      <Footer />
    </main>
  )
}

export default App
