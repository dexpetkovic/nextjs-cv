import { lemonSqueezyDao } from '@/dao/lemon-squeezy-dao'

export async function GET(): Promise<Response> {
  try {
    const result = await lemonSqueezyDao().getAllProducts()
    return Response.json(result)
  } catch (error) {
    return Response.json({ error }, { status: 400 })
  }
}
