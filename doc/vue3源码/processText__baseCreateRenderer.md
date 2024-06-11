#
```ts
type ProcessTextOrCommentFn = (
  n1: VNode | null,
  n2: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
) => void
```
```ts
const processText: ProcessTextOrCommentFn = (n1, n2, container, anchor) => {
  if (n1 == null) {
    hostInsert(
      (n2.el = hostCreateText(n2.children as string)),
      container,
      anchor
    );
  } else {
    const el = (n2.el = n1.el!);
    if (n2.children !== n1.children) {
      hostSetText(el, n2.children as string);
    }
  }
};
```
### [nodeOps](./nodeOps.md)