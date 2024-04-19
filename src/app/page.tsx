'use client'

import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from '@/app/app'
import { AmplitudeContextProvider } from '@/context/amplitude-context'
import { AppContextProvider } from '@/context/app-context'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

const AppWrapper = (): React.ReactElement => {
  return (
    <NextUIProvider>
      <AppContextProvider>
        <QueryClientProvider client={queryClient}>
          <AmplitudeContextProvider>
            <App />
          </AmplitudeContextProvider>
        </QueryClientProvider>
      </AppContextProvider>
    </NextUIProvider>
  )
}

export default AppWrapper
