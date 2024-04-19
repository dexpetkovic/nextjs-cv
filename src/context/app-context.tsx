import React, { useCallback, useContext, useEffect, useState } from 'react'

import { logger } from '@/util/logger'

interface AppData {
  isLoading: boolean
  setInitDone: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = React.createContext<AppData>({} as AppData)

export const useAppContext: () => AppData = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('App Context must be used within App Context Provider')
  return context
}

export const AppContextProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [initDone, setInitDone] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const init = useCallback(async () => {
    if (!initDone) return
    try {
      setIsLoading(true)
    } finally {
      setIsLoading(false)
    }
  }, [initDone])

  useEffect(() => {
    init().catch((err) => logger.error(err))
  }, [init])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setInitDone,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
