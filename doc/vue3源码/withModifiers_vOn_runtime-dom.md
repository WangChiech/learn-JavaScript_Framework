#
```ts
const withModifiers = <
  T extends (event: Event, ...args: unknown[]) => any,
>(
  fn: T & { _withMods?: { [key: string]: T } },
  modifiers: ModifierGuardsKeys[],
) => {
  const cache = fn._withMods || (fn._withMods = {})
  const cacheKey = modifiers.join('.')
  return (
    cache[cacheKey] ||
    (cache[cacheKey] = ((event, ...args) => {
      for (let i = 0; i < modifiers.length; i++) {
        const guard = modifierGuards[modifiers[i]]
        if (guard && guard(event, modifiers)) return
      }
      return fn(event, ...args)
    }) as T)
  )
}

const modifierGuards: Record<
  ModifierGuardsKeys,
  (e: Event, modifiers: string[]) => void | boolean
> = {
  stop: e => e.stopPropagation(),
  prevent: e => e.preventDefault(),
  self: e => e.target !== e.currentTarget,
  ctrl: e => !(e as KeyedEvent).ctrlKey,
  shift: e => !(e as KeyedEvent).shiftKey,
  alt: e => !(e as KeyedEvent).altKey,
  meta: e => !(e as KeyedEvent).metaKey,
  left: e => 'button' in e && (e as MouseEvent).button !== 0,
  middle: e => 'button' in e && (e as MouseEvent).button !== 1,
  right: e => 'button' in e && (e as MouseEvent).button !== 2,
  exact: (e, modifiers) =>
    systemModifiers.some(m => (e as any)[`${m}Key`] && !modifiers.includes(m)),
}
const systemModifiers = ['ctrl', 'shift', 'alt', 'meta']
```
