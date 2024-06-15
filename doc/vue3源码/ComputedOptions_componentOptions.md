#
```ts
type ComputedOptions = Record<
  string,
  ComputedGetter<any> | WritableComputedOptions<any>
>
interface WritableComputedOptions<T> {
  get: ComputedGetter<T>
  set: ComputedSetter<T>
}
type ComputedGetter<T> = (oldValue?: T) => T
type ComputedSetter<T> = (newValue: T) => void
```
