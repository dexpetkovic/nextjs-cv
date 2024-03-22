import React from 'react'

import { AboutMe } from '@/components/about-me'
import { content } from '@/util/content'

export const Profile = (): React.ReactElement => {
  return (
    <div className={'mb-8'}>
      {content.profile.map((content, index) => (
        <AboutMe key={index} content={content} />
      ))}
    </div>
  )
}
