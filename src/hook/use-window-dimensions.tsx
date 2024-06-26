'use client'

import { useState, useEffect } from 'react'

interface Dimensions {
  width: number
  height: number
}

export const useWindowDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 560, height: 315 })

  useEffect(() => {
    const updateDimensions = (): void => {
      const windowWidth = window.innerWidth
      if (windowWidth < 600) {
        setDimensions({ width: 333, height: 187 })
      } else if (windowWidth < 900) {
        setDimensions({ width: 560, height: 315 })
      } else {
        setDimensions({ width: 728, height: 409 })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return dimensions
}
