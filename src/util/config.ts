import { singletonUtil } from '@/util/singleton-util'

export const config = singletonUtil(() => {
  return Object.freeze({
    amplitude: {
      apiKey: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ?? '',
    },
    lemonSqueezy: {
      apiKey: process.env.LEMON_SQUEEZY_API_KEY ?? '',
    },
    resend: {
      apiKey: process.env.RESEND_API_KEY ?? '',
    },
  })
})
