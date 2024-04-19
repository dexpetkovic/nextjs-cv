import { lemonSqueezySetup, type ListProducts, listProducts, type Product, getProduct } from '@lemonsqueezy/lemonsqueezy.js'

import { config } from '@/util/config'
import { singletonUtil } from '@/util/singleton-util'

export class LemonSqueezyDao {
  constructor(params: { apiKey: string }) {
    const { apiKey } = params
    lemonSqueezySetup({ apiKey })
  }

  async getAllProducts(): Promise<ListProducts | null> {
    const result = await listProducts()
    if (result.error) throw new Error(result.error.message)
    return result.data
  }

  async getProduct(params: { id: string }): Promise<Product | null> {
    const { id } = params
    const result = await getProduct(id)
    if (result.error) throw new Error(result.error.message)
    return result.data
  }
}

export const lemonSqueezyDao = singletonUtil((): LemonSqueezyDao => {
  const apiKey = config().lemonSqueezy.apiKey
  return new LemonSqueezyDao({
    apiKey,
  })
})
