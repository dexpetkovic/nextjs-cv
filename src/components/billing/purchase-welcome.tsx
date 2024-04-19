import React from 'react'

import { Calendar } from '@/components/calendar'

export const PurchaseWelcome = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-center">Thank you for your purchase!</div>
        <div className="text-lg text-center">Your order has been confirmed</div>
        <div className="text-lg text-center mb-8">Please choose an kick-off timeslot in calendar</div>
        <Calendar />
      </div>
    </div>
  )
}
