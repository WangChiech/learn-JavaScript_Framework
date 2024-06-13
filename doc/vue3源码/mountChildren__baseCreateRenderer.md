#
```ts
type MountChildrenFn = (
  children: VNodeArrayChildren,
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  namespace: ElementNamespace,
  slotScopeIds: string[] | null,
  optimized: boolean,
  start?: number,
) => void
```
```ts
const mountChildren: MountChildrenFn = (
  children,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  namespace: ElementNamespace,
  slotScopeIds,
  optimized,
  start = 0
) => {
  for (let i = start; i < children.length; i++) {
    const child = (children[i] = optimized
      ? cloneIfMounted(children[i] as VNode)
      : normalizeVNode(children[i]));
    patch(
      null,
      child,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      namespace,
      slotScopeIds,
      optimized
    );
  }
};
```

### [patch__baseCreateRenderer](./patch__baseCreateRenderer.md)