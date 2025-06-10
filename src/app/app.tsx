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
    <main className="flex min-h-screen flex-col flex-wrap items-center justify-items-start p-4 sm:px-16 md:px-64">
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
        <Profile />
        <Video />
        <Experiences />
      </motion.div>
      <Recruiters />
      <ContactForm/>
      <Footer />
    </main>
  )
}

export default App
