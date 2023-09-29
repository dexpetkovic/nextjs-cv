import { format } from 'date-fns'

export const timeUtil = {
  now: (): Date => {
    return new Date()
  },
  formatToReadableDate: (date: Date): string => {
    return format(date, 'dd/MMM/yyyy')
  },
}
