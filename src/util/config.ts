const stringToBoolean = (value: string): boolean => {
  return value?.toLowerCase().trim() === 'true'
}

export const config = () => {
  return Object.freeze({
    amplitude: {
      apiKey: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ?? '',
    },
  })
}
