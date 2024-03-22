import React from 'react'

export const Video = (): React.ReactElement => {
  return (
    <div className={'mb-8'}>
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/ZbWOwAs1Nrs?si=elDFl_DCZZmSA2Id"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
