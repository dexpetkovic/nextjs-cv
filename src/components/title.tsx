import React from 'react'

export const Title = (props: { title: string; subtitle: string }): React.ReactElement => {
  const { title, subtitle } = props

  return (
    <div className="flex flex-col items-center mb-16">
      <p className="text-4xl md:text-8xl dark:text-white light:text-black text-center">{title}</p>
      <p className="text-2xl md:text-4xl font-medium dark:text-white light:text-black text-center">{subtitle}</p>
    </div>
  )
}
