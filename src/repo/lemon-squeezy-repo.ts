import { ListProducts, Product } from '@lemonsqueezy/lemonsqueezy.js'

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

  async getAllProducts(): Promise<ListProducts> {
    const response = await this.axios.get('purchases/products')
    return response.data
  }

  async getProduct(id: string): Promise<Product> {
    const response = await this.axios.get(`purchases/products/${id}`)
    return response.data
  }
}

export const lemonSqueezyRepo = singletonUtil(() => {
  return new LemonSqueezyRepo()
})
