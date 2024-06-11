#

```ts
type RootRenderFunction<HostElement = RendererElement> = (
  vnode: VNode | null,
  container: HostElement,
  namespace?: ElementNamespace,
) => void
interface RendererElement extends RendererNode {}
interface RendererNode {
  [key: string]: any
}
```
```ts
const render: RootRenderFunction = (vnode, container, namespace) => {
  if (vnode == null) {
    if (container._vnode) {
      unmount(container._vnode, null, null, true);
    }
  } else {
    patch(
      container._vnode || null,
      vnode,
      container,
      null,
      null,
      null,
      namespace
    );
  }
  if (!isFlushing) {
    isFlushing = true;
    flushPreFlushCbs();
    flushPostFlushCbs();
    isFlushing = false;
  }
  container._vnode = vnode;
};
```

### [unmount__baseCreateRenderer](./unmount__baseCreateRenderer.md)
### [patch__baseCreateRenderer](./patch__baseCreateRenderer.md)
### [flushPreFlushCbs_scheduler](./flushPreFlushCbs_scheduler.md)
### [flushPostFlushCbs_scheduler](./flushPostFlushCbs_scheduler.md)