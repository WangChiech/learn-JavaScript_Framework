#

```ts
const processElement = (
  n1: VNode | null,
  n2: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  namespace: ElementNamespace,
  slotScopeIds: string[] | null,
  optimized: boolean
) => {
  if (n2.type === "svg") {
    namespace = "svg";
  } else if (n2.type === "math") {
    namespace = "mathml";
  }

  if (n1 == null) {
    mountElement(
      n2,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      namespace,
      slotScopeIds,
      optimized
    );
  } else {
    patchElement(
      n1,
      n2,
      parentComponent,
      parentSuspense,
      namespace,
      slotScopeIds,
      optimized
    );
  }
};
```
