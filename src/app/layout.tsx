import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { NavMenu } from '@/components/nav-menu'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dejan Petković CV',
  description: 'Just a short intro about me',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Dejan Petković CV" />
        <meta property="og:description" content="Just a short intro about me" />
        {/* <meta property="og:image" content="https://dejan.petkovic.nl/preview-image.png" /> */}
        <meta property="og:url" content="https://dejan.petkovic.nl/" />
        <meta property="og:type" content="website" />

      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-row justify-end items-center gap-6 py-4 w-full max-w-5xl mx-auto">
            <NavMenu />
          </div>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
