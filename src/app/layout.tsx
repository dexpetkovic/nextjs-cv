import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/theme-context'
import { ThemeSwitcher } from '@/components/theme-switcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dejan Petković CV',
  description: 'Just a short intro about me',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
