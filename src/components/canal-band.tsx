import React from 'react'

export const CanalBand = (): React.ReactElement => {
  return (
    <div className="canal-band" role="img" aria-label="Amsterdam canal">
      <img
        src="/amsterdam-canal.jpg"
        alt="Amsterdam canal with houseboats, brick houses and bare winter trees"
      />
      <div className="canal-cap">
        <span className="bar" />
        <span>Amsterdam · NL · 52.37° N</span>
      </div>
    </div>
  )
}
