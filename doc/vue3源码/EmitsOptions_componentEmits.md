#
```ts
type EmitsOptions = ObjectEmitsOptions | string[]
type ObjectEmitsOptions = Record<
  string,
  ((...args: any[]) => any) | null
>
```
