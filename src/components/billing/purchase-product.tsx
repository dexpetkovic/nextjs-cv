import { ListProducts } from '@lemonsqueezy/lemonsqueezy.js'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Product } from '@/components/billing/product'
import { lemonSqueezyRepo } from '@/repo/lemon-squeezy-repo'

export const PurchaseProduct = (): React.ReactElement => {
  const [products, setProducts] = useState<ListProducts>()

  useQuery('products', () => lemonSqueezyRepo().getAllProducts(), {
    onSuccess: (data) => setProducts(data),
  })

  useEffect(() => {
    console.log('products?.data', products?.data) // eslint-disable-line no-console
  }, [products])

  return (
    <div className={'flex flex-col mb-8'}>
      <h2 className="flex justify-center text-xl md:text-2xl font-medium dark:text-white light:text-black text-center">
        Do you want to work together? With pay-as-you go subscriptions, you can get workflow as a service!
      </h2>
      <div className={'flex flex-row mb-8'}>
        {products?.data.map(({ attributes, id, type }, index: number) => (
          <div key={index}>
            <Product attributes={attributes} />
          </div>
        ))}
      </div>
    </div>
  )
}
