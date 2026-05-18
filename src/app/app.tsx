'use client'

import * as amp from '@amplitude/analytics-browser'
import React from 'react'

import { AboutMe } from '@/components/about-me'
import { CanalBand } from '@/components/canal-band'
import { ContactForm } from '@/components/contact-form'
import { Experiences } from '@/components/experiences'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { PersonalProjects } from '@/components/personal-projects'
import { Recruiters } from '@/components/recruiters'
import { SiteNav } from '@/components/site-nav'
import { Skills } from '@/components/skills'

const App = (): React.ReactElement => {
  React.useEffect(() => {
    amp.track('HomePage')
  }, [])

  return (
    <>
      <SiteNav />
      <main className="page-main">
        <Hero />
        <CanalBand />
        <AboutMe />
        <PersonalProjects />
        <Skills />
        <Experiences />
        <Recruiters />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
