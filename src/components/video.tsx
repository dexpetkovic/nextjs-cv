import React from 'react'

export const Video = (): React.ReactElement => {
  return (
    <div className="relative w-full pt-[56.25%] ">
      <iframe
        className="absolute top-0 left-0 w-full h-full pb-8"
        src="https://www.youtube.com/embed/ZbWOwAs1Nrs?si=elDFl_DCZZmSA2Id"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
