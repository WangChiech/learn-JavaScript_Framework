#

```ts
const unmountChildren: UnmountChildrenFn = (
  children,
  parentComponent,
  parentSuspense,
  doRemove = false,
  optimized = false,
  start = 0
) => {
  for (let i = start; i < children.length; i++) {
    unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
  }
};
```

### [unmount__baseCreateRenderer](./unmount__baseCreateRenderer.md)