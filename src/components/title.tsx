import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const Title = (props: { title: string; subtitle: string }): React.ReactElement => {
  const { title, subtitle } = props

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src="/amsterdam-canal-back.jpg"
        alt="Amsterdam background"
        fill
        style={{ objectFit: 'cover', opacity: 0.5, zIndex: -10 }}
        priority
      />
      <div className="p-8 flex flex-col items-start justify-start dark:bg-black dark:bg-opacity-40 bg-white bg-opacity-40 rounded-xl">
        <p className="text-2xl md:text-4xl text-left mb-4">{title}</p>
        <p className="text-xl md:text-2xl font-medium dark:text-white light:text-black text-left">{subtitle}</p>
        <Button as={Link} href="#contact" color="primary" className="mt-4">
          Say Hello! 👋
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" onClick={() => window.location.href = '#experiences'}>
        <svg className="w-16 h-16 text-blue-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7 7-7-7" />
        </svg>
        <svg className="w-16 h-16 text-blue-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 1l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
