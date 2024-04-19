'use client'

import * as amp from '@amplitude/analytics-browser'
import { NextUIProvider } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Script from 'next/script'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { PurchaseProduct } from '@/components/billing/purchase-product'
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

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

const App = (): React.ReactElement => {
  amp.track('HomePage')

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <AmplitudeContextProvider>
          <main className="flex min-h-screen flex-col flex-wrap items-center justify-items-start p-4 sm:px-16 md:px-64">
            <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="lazyOnload"></Script>
            <Title title={'Dejan Petković'} subtitle={'Engineer, Developer, proud father'} />
            <PurchaseProduct />
            <motion.div
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
            {/*<ContactForm />*/}
          </main>
        </AmplitudeContextProvider>
      </QueryClientProvider>
    </NextUIProvider>
  )
}

export default App
