import React from 'react'

export const Video = (): React.ReactElement => {
  return (
    <div className="flex w-full mb-16 justify-center items-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZbWOwAs1Nrs?si=elDFl_DCZZmSA2Id"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
