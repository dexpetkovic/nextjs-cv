import Cal, { getCalApi } from '@calcom/embed-react'
import React, { useEffect } from 'react'

export const Calendar = (): React.ReactElement => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: {
          branding: {
            brandColor: '#000000',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <Cal
      calLink="dexpetkovic/kick-off"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  )
}
