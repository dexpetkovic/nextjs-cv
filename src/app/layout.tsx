import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { NavMenu } from '@/components/nav-menu'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dejan Petković | AI Engineer & Founder of Elands AI',
  description:
    'AI engineer and founder of Elands AI, building LLM-based applications, MLOps infrastructure, and real-time AI services for startups. Based in the Netherlands.',
  keywords: [
    'AI engineer',
    'LLM',
    'machine learning',
    'MLOps',
    'RAG',
    'Next.js',
    'FastAPI',
    'TypeScript',
    'Python',
    'Elands AI',
    'Netherlands',
    'AI consultant',
    'generative AI',
  ],
  authors: [{ name: 'Dejan Petković', url: 'https://dejan.petkovic.nl' }],
  creator: 'Dejan Petković',
  openGraph: {
    title: 'Dejan Petković | AI Engineer & Founder of Elands AI',
    description:
      'AI engineer building LLM applications, MLOps infrastructure, and real-time AI services for startups.',
    url: 'https://dejan.petkovic.nl/',
    type: 'profile',
    siteName: 'Dejan Petković',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    site: '@dexpetkovic',
    creator: '@dexpetkovic',
    title: 'Dejan Petković | AI Engineer & Founder of Elands AI',
    description:
      'AI engineer building LLM applications, MLOps infrastructure, and real-time AI services for startups.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dejan.petkovic.nl/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dejan Petković',
  jobTitle: 'AI Engineer & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Elands AI',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Elands AI Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Biller', url: 'https://biller.elands.studio/' },
      { '@type': 'Offer', name: 'Bouwen', url: 'https://bouwen.elands.studio/' },
    ],
  },
  url: 'https://dejan.petkovic.nl/',
  description:
    'AI engineer and founder of Elands AI, building LLM-based applications, MLOps infrastructure, and real-time AI services for startups and small companies. Based in the Netherlands.',
  knowsAbout: [
    'LLM applications',
    'RAG',
    'agentic AI systems',
    'MLOps',
    'continual learning',
    'FastAPI',
    'Next.js',
    'TypeScript',
    'Python',
    'AWS',
    'Azure',
    'Kubernetes',
  ],
  sameAs: [
    'https://linkedin.com/in/dejanpetkovic',
    'https://github.com/dexpetkovic',
    'https://x.com/dexpetkovic',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'business inquiries',
    url: 'https://dejan.petkovic.nl/#contact',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-row justify-end items-center gap-6 py-4 w-full mx-auto">
            <NavMenu />
          </div>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
