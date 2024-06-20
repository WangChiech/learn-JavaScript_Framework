#
```ts
const withKeys = <T extends (event: KeyboardEvent) => any>(
  fn: T & { _withKeys?: { [k: string]: T } },
  modifiers: string[],
) => {
  let instance: ComponentInternalInstance | null = null

  const cache: { [k: string]: T } = fn._withKeys || (fn._withKeys = {})
  const cacheKey = modifiers.join('.')

  return (
    cache[cacheKey] ||
    (cache[cacheKey] = (event => {
      if (!('key' in event)) {
        return
      }

      const eventKey = hyphenate(event.key)
      if (modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
        return fn(event)
      }
    }) as T)
  )
}
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames: Record<string, string | string[]> = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  delete: 'backspace',
}
```