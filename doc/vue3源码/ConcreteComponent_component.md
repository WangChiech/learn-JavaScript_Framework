#
```ts
interface MethodOptions {
  [key: string]: Function
}
type EmitsOptions = ObjectEmitsOptions | string[]
/**
 * Concrete component type matches its actual value: it's either an options
 * object, or a function. Use this where the code expects to work with actual
 * values, e.g. checking if its a function or not. This is mostly for internal
 * implementation code.
 */
export type ConcreteComponent<
  Props = {},
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions,
  E extends EmitsOptions | Record<string, any[]> = {},
  S extends Record<string, any> = any,
> =
  | ComponentOptions<Props, RawBindings, D, C, M>
  | FunctionalComponent<Props, E, S>
```

### [ComputedOptions_componentOptions](./ComputedOptions_componentOptions.md)
### [MethodOptions_componentOptions](./MethodOptions_componentOptions.md)
### [EmitsOptions_componentEmits](./EmitsOptions_componentEmits.md)
### [ComponentOptions_componentOptions](./ComponentOptions_componentOptions.md)