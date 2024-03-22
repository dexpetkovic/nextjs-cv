import React from 'react'

export const Title = (props: { title: string; subtitle: string }): React.ReactElement => {
  const { title, subtitle } = props

  return (
    <div className="flex flex-col max-w-5xl items-center mb-8">
      <p className="text-4xl md:text-9xl dark:text-white light:text-black text-center">{title}</p>
      <p className="text-2xl md:text-5xl font-medium dark:text-white light:text-black text-center">{subtitle}</p>
    </div>
  )
}
