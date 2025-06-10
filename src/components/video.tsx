import React from 'react'

import { useWindowDimensions } from '@/hook/use-window-dimensions'

export const Video = (): React.ReactElement => {
  const { width, height } = useWindowDimensions()

  return (
    <div id="video" className="flex w-full mb-16 justify-center items-center">
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/ZbWOwAs1Nrs?si=elDFl_DCZZmSA2Id"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
