import { Service } from '@/util/service'

export abstract class ServiceInitiator {
  private services: Service[]

  constructor(services: Service[]) {
    this.services = services
  }

  async startServices(): Promise<void> {
    for (const service of this.services) {
      if (typeof service.createService === 'function') {
        await service.createService()
      }
    }
  }

  async stopServices(): Promise<void> {
    for (const service of this.services) {
      if (typeof service.destroyService === 'function') {
        await service.destroyService()
      }
    }
  }
}
