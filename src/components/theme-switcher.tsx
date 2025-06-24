'use client'
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return <></>

  return (
    <div className="flex flex-row justify-center items-center text-base">
      <p className="mr-2 text-black">Theme:</p> 
      <button
        className={`p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}
