#

```ts
const mountStaticNode = (
  n2: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  namespace: ElementNamespace
) => {
  // static nodes are only present when used with compiler-dom/runtime-dom
  // which guarantees presence of hostInsertStaticContent.
  [n2.el, n2.anchor] = hostInsertStaticContent!(
    n2.children as string,
    container,
    anchor,
    namespace,
    n2.el,
    n2.anchor
  );
};
```
