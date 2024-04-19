import { logger } from '@/util/logger'

export abstract class Service<T = any> {
  protected abstract create(): Promise<T>
  protected abstract destroy(): Promise<T>

  public readonly name: string

  protected constructor(params: { name: string }) {
    const { name } = params
    this.name = name
  }

  public async createService(): Promise<T> {
    logger.debug(`${this.name} Create START`)
    const result = await this.create()
    logger.debug(`${this.name} Create END`)
    return result
  }

  public async destroyService(): Promise<T> {
    logger.debug(`${this.name} Destroy START`)
    const result = await this.destroy()
    logger.debug(`${this.name} Destroy END`)
    return result
  }
}
