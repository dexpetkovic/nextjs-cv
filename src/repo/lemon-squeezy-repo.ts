import { ListAllProductsResult, RetrieveProductResult } from 'lemonsqueezy.ts/dist/types'

import { AxiosDao } from '@/dao/axios-dao'
import { singletonUtil } from '@/util/singleton-util'

export class LemonSqueezyRepo extends AxiosDao {
  constructor() {
    super({
      interceptors: [
        // Add any interceptors you need here
      ],
    })
  }

  async getAllProducts(): Promise<ListAllProductsResult> {
    const response = await this.axios.get('purchases/products')
    return response.data
  }

  async getProduct(id: string): Promise<RetrieveProductResult> {
    const response = await this.axios.get(`purchases/products/${id}`)
    return response.data
  }
}

export const lemonSqueezyRepo = singletonUtil(() => {
  return new LemonSqueezyRepo()
})
