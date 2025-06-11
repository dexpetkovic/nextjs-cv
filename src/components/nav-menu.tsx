'use client'

import { ThemeSwitcher } from './theme-switcher'
import { useState } from 'react'

export const NavMenu = (): React.ReactElement => {

  const [menuOpen, setMenuOpen] = useState(false)
    
  return (
    <div className="flex items-center justify-center">
    {/* Hamburger button for mobile */}
    <button
        className="md:hidden p-2"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
        >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
    {/* Nav links */}
    <nav className={`flex flex-col md:flex-row gap-6 absolute justify-center items-center md:static top-16 right-4 bg-white dark:bg-black p-4 rounded shadow md:shadow-none md:bg-transparent md:dark:bg-transparent z-50 transition-all ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <a href="#video" className="text-base font-medium hover:underline">Elevator Pitch</a>
        <a href="#experiences" className="text-base font-medium hover:underline">Experiences</a>
        <a href="#recruiters" className="text-base font-medium hover:underline">Recruiters</a>
        <a href="#contact" className="text-base font-medium hover:underline">Contact</a>
        <ThemeSwitcher />
    </nav>
  </div>
  )
}