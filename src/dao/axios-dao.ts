import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { logger } from '@/util/logger'

export type AxiosDaoInterceptor = (axios: AxiosInstance) => void

export abstract class AxiosDao {
  protected axios: AxiosInstance

  protected constructor(params: { interceptors?: AxiosDaoInterceptor[]; pathSuffix?: string }) {
    const { interceptors = [], pathSuffix } = params

    const pathUrl = ['api', pathSuffix].filter(Boolean).map(AxiosDao.__cleanFirstLastSlashFromUrl).join('/')
    const baseURL = `/${pathUrl}/`

    logger.debug(`Setting up Axios DAO...`, { baseURL })
    const config: AxiosRequestConfig = { baseURL, responseType: 'json' }
    this.axios = axios.create(config)
    interceptors.forEach((interceptor) => interceptor(this.axios))
  }

  private static __cleanFirstLastSlashFromUrl(url = ''): string {
    const trimmedUrl = url.trim()
    if (!trimmedUrl.trim()) return ''

    const hasFistSlash = trimmedUrl.slice(0, 1) === '/' ? 1 : 0
    const trimEndValue = trimmedUrl.slice(-1) === '/' ? -1 : undefined
    return trimmedUrl.slice(hasFistSlash, trimEndValue)
  }
}
