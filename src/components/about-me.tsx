import React from 'react'

export const AboutMe = (props: { content: string }): React.ReactElement => {
  const { content } = props

  return (
    <div className="flex flex-col items-center py-2">
      <p className="sm:text-sm md:text-xl font-medium dark:text-white light:text-black text-left">{content}</p>
    </div>
  )
}
