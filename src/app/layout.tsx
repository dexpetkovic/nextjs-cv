import './globals.css'
import type { Metadata } from 'next'
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dejan Petković — End-to-end Product & AI Engineer',
  description:
    'End-to-end product and AI engineer. Founder of Elands AI, Founding AI Engineer at Delphyr.AI. Architecture, infrastructure, backend, frontend, mobile, and the AI/ML pipeline — seventeen years across the full stack.',
  keywords: [
    'AI engineer',
    'LLM',
    'fullstack engineer',
    'product engineer',
    'MLOps',
    'RAG',
    'Next.js',
    'FastAPI',
    'TypeScript',
    'Python',
    'Elands AI',
    'Delphyr',
    'Amsterdam',
    'Netherlands',
    'generative AI',
  ],
  authors: [{ name: 'Dejan Petković', url: 'https://dejan.petkovic.nl' }],
  creator: 'Dejan Petković',
  openGraph: {
    title: 'Dejan Petković — End-to-end Product & AI Engineer',
    description:
      'Founder of Elands AI, Founding AI Engineer at Delphyr.AI. End-to-end product and AI engineering — architecture, infrastructure, and the AI/ML pipeline.',
    url: 'https://dejan.petkovic.nl/',
    type: 'profile',
    siteName: 'Dejan Petković',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    site: '@dexpetkovic',
    creator: '@dexpetkovic',
    title: 'Dejan Petković — End-to-end Product & AI Engineer',
    description:
      'Founder of Elands AI, Founding AI Engineer at Delphyr.AI. End-to-end product and AI engineering.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dejan.petkovic.nl/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dejan Petković',
  jobTitle: 'End-to-end Product & AI Engineer',
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
    'End-to-end product and AI engineer. Founder of Elands AI, Founding AI Engineer at Delphyr.AI. Architecture, infrastructure, backend, frontend, mobile, and the AI/ML pipeline.',
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
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
