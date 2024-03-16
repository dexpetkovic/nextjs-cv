'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return <></>

  return (
    <button
      className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
