export type AFunctionWithoutParams<T = any> = () => T

export const singletonUtil = <T = any>(
  fun: AFunctionWithoutParams<T>,
): AFunctionWithoutParams<T> => {
  const cache: { singleton?: T } = {}

  return (): T => {
    if ('singleton' in cache) return cache.singleton!
    return (cache.singleton = fun())
  }
}
