'use client'
import React, { createContext, useEffect, useState } from 'react'
import { config } from '@/util/config'
import * as amp from '@amplitude/analytics-browser'
import { BrowserClient } from '@amplitude/analytics-types'

export type AmplitudeData = {
  trackEvent: (message: string) => void
}

export const AmplitudeContext = createContext<AmplitudeData>({} as AmplitudeData)

export const AmplitudeContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [ampInstance, setAmpInstance] = useState<BrowserClient>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Initating Amplitude...')
      setAmpInstance(amp.createInstance())
    }
  }, [])

  useEffect(() => {
    if (ampInstance) {
      ampInstance.init(config().amplitude.apiKey, { defaultTracking: true })
      console.log('Amplitude initiated.')
    }
  }, [ampInstance])

  const trackEvent = (message: string) => {
    ampInstance?.track(message)
  }

  return <AmplitudeContext.Provider value={{ trackEvent }}>{children}</AmplitudeContext.Provider>
}
