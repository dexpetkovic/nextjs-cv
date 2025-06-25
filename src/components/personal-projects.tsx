import { Button } from '@nextui-org/react'
import React from 'react'

const WhatsAppLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 rounded-full bg-white shadow p-1">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M23.472 19.458c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.12 1.392-.207.237-.412.266-.767.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.977-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.412.533-.619.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.955 0 1.744 1.269 3.429 1.447 3.666.178.237 2.5 3.82 6.063 5.215.849.292 1.51.466 2.026.596.851.204 1.626.175 2.238.106.682-.077 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z"
      fill="#fff"
    />
  </svg>
)

const Project = ({
  title,
  description,
  link,
  linkLabel,
  extraLinks,
}: {
  title: string
  description: string
  link: string
  linkLabel: string
  extraLinks?: { href: string; label?: string; icon?: React.ReactNode }[]
}) => (
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col items-center w-full">
    <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
    <p className="text-gray-700 dark:text-gray-200 mb-4 text-center">{description}</p>
    <Button as="a" type="button" color="primary" href={link} target="_blank" rel="noopener noreferrer">
      {linkLabel}
    </Button>
    {extraLinks && (
      <div className="flex flex-col gap-2 mt-2 items-center">
        {extraLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            {l.icon ? l.icon : l.label}
          </a>
        ))}
      </div>
    )}
  </div>
)

export const PersonalProjects = (): React.ReactElement => {
  return (
    <div>
      <p className="text-xl md:text-4xl dark:text-white light:text-black text-center mt-16 mb-16">My Personal Projects</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <Project
          title="2e-woning.nl"
          description="Box 3 Tax Calculator: Easily calculate your Box 3 tax for your second home and other investments. Built for the Dutch market."
          link="http://2e-woning.nl"
          linkLabel="Visit 2e-woning.nl"
        />
        <Project
          title="brAIn (WhatsApp AI Assistant)"
          description="AI customer support bot for WhatsApp, built with NestJS and Google Gemini. Handles WhatsApp webhooks, stores memories, creates calendar events and provides automated replies."
          link="https://github.com/dexpetkovic/brAIn-demo"
          linkLabel="View brAIn on GitHub"
          // extraLinks={[{ href: 'https://wa.me/381637700648', icon: <WhatsAppLogo /> }]}
        />
      </div>
    </div>
  )
}
