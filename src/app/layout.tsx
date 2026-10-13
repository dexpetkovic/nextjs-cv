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
  metadataBase: new URL('https://dejan.petkovic.nl'),
  title: 'Dejan Petković · Lead AI Engineer',
  description:
    'Lead AI Engineer at Delphyr B.V. and founder of Elands AI. LLM-based applications, evaluation infrastructure, and real-time AI services. Deep fullstack engineering experience since 2008 across Python, TypeScript and cloud platforms.',
  keywords: [
    'Lead AI Engineer',
    'AI Tech Lead',
    'Staff AI Engineer',
    'AI engineer',
    'Amsterdam',
    'LLM',
    'fullstack engineer',
    'product engineer',
    'LLM evaluation',
    'MCP servers',
    'guardrails',
    'Next.js',
    'FastAPI',
    'TypeScript',
    'Python',
    'Elands AI',
    'Delphyr',
    'Netherlands',
    'generative AI',
  ],
  authors: [{ name: 'Dejan Petković', url: 'https://dejan.petkovic.nl' }],
  creator: 'Dejan Petković',
  openGraph: {
    title: 'Dejan Petković · Lead AI Engineer',
    description:
      'Lead AI Engineer at Delphyr B.V. and founder of Elands AI. LLM-based applications, evaluation infrastructure, and real-time AI services.',
    url: 'https://dejan.petkovic.nl/',
    type: 'profile',
    siteName: 'Dejan Petković',
    locale: 'en_US',
    images: [{ url: '/DP-profile.jpg', alt: 'Dejan Petković' }],
  },
  twitter: {
    card: 'summary',
    site: '@dexpetkovic',
    creator: '@dexpetkovic',
    title: 'Dejan Petković · Lead AI Engineer',
    description:
      'Lead AI Engineer at Delphyr B.V. and founder of Elands AI. LLM-based applications, evaluation infrastructure, and real-time AI services.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dejan.petkovic.nl/', types: { 'text/plain': '/llms.txt' } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dejan Petković',
  jobTitle: 'Lead AI Engineer',
  image: 'https://dejan.petkovic.nl/DP-profile.jpg',
  worksFor: [
    { '@type': 'Organization', name: 'Delphyr B.V.', url: 'https://delphyr.ai' },
    { '@type': 'Organization', name: 'Elands AI' },
  ],
  nationality: { '@type': 'Country', name: 'Netherlands' },
  homeLocation: { '@type': 'Place', name: 'Belgrade, Serbia' },
  knowsLanguage: ['English', 'Dutch', 'Serbian', 'German'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Elands AI Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Biller', url: 'https://biller.elands.studio/' },
      { '@type': 'Offer', name: 'Bouwen', url: 'https://bouwen.elands.studio/' },
      { '@type': 'Offer', name: '2e-woning.nl', url: 'https://2e-woning.nl' },
    ],
  },
  url: 'https://dejan.petkovic.nl/',
  description:
    'Lead AI Engineer at Delphyr B.V. and founder of Elands AI. LLM-based applications, evaluation infrastructure, and real-time AI services, built on deep fullstack engineering experience since 2008.',
  knowsAbout: [
    'LLM applications',
    'agentic AI systems',
    'MCP servers',
    'LLM evaluation',
    'guardrails',
    'RAG',
    'prompt design and grounding',
    'FastAPI',
    'Next.js',
    'TypeScript',
    'Python',
    'AWS',
    'Azure',
    'Kubernetes',
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Faculty of Electrical Engineering, University of Belgrade',
      description:
        'Masters Course: System Engineering and Radio Communications. Specialization: Telecommunications and software engineering.',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Faculty of Electrical Engineering, University of Belgrade',
      description: 'BSc of Electrical Engineering. Specialization: Telecommunications and computer science.',
    },
  ],
  sameAs: [
    'https://linkedin.com/in/dejanpetkovic',
    'https://github.com/dexpetkovic',
    'https://x.com/dexpetkovic',
    'https://www.credly.com/users/dejan-petkovic/badges',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'business inquiries',
    url: 'https://dejan.petkovic.nl/#contact',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
