import { LemonsqueezyClient } from 'lemonsqueezy.ts'
import { ListAllProductsResult, RetrieveProductResult } from 'lemonsqueezy.ts/dist/types'

import { config } from '@/util/config'
import { singletonUtil } from '@/util/singleton-util'

export class LemonSqueezyDao {
  protected instance: LemonsqueezyClient

  constructor(params: { apiKey: string }) {
    const { apiKey } = params
    this.instance = new LemonsqueezyClient(apiKey)
  }

  async getAllProducts(): Promise<ListAllProductsResult> {
    return await this.instance.listAllProducts()
  }

  async getProduct(params: { id: string }): Promise<RetrieveProductResult> {
    return await this.instance.retrieveProduct(params)
  }

  public get Client(): LemonsqueezyClient {
    return this.instance
  }
}

export const lemonSqueezyDao = singletonUtil((): LemonSqueezyDao => {
  const apiKey = config().lemonSqueezy.apiKey
  return new LemonSqueezyDao({
    apiKey,
  })
})
