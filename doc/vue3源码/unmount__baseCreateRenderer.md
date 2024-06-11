#

```ts
const unmount: UnmountFn = (
  vnode,
  parentComponent,
  parentSuspense,
  doRemove = false,
  optimized = false
) => {
  const {
    type,
    props,
    ref,
    children,
    dynamicChildren,
    shapeFlag,
    patchFlag,
    dirs,
  } = vnode;
  // unset ref
  if (ref != null) {
    setRef(ref, null, parentSuspense, vnode, true);
  }

  if (shapeFlag & ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE) {
    (parentComponent!.ctx as KeepAliveContext).deactivate(vnode);
    return;
  }

  const shouldInvokeDirs = shapeFlag & ShapeFlags.ELEMENT && dirs;
  const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);

  let vnodeHook: VNodeHook | undefined | null;
  if (
    shouldInvokeVnodeHook &&
    (vnodeHook = props && props.onVnodeBeforeUnmount)
  ) {
    invokeVNodeHook(vnodeHook, parentComponent, vnode);
  }

  if (shapeFlag & ShapeFlags.COMPONENT) {
    unmountComponent(vnode.component!, parentSuspense, doRemove);
  } else {
    if (__FEATURE_SUSPENSE__ && shapeFlag & ShapeFlags.SUSPENSE) {
      vnode.suspense!.unmount(parentSuspense, doRemove);
      return;
    }

    if (shouldInvokeDirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
    }

    if (shapeFlag & ShapeFlags.TELEPORT) {
      (vnode.type as typeof TeleportImpl).remove(
        vnode,
        parentComponent,
        parentSuspense,
        optimized,
        internals,
        doRemove
      );
    } else if (
      dynamicChildren &&
      // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment ||
        (patchFlag > 0 && patchFlag & PatchFlags.STABLE_FRAGMENT))
    ) {
      // fast path for block nodes: only need to unmount dynamic children.
      unmountChildren(
        dynamicChildren,
        parentComponent,
        parentSuspense,
        false,
        true
      );
    } else if (
      (type === Fragment &&
        patchFlag &
          (PatchFlags.KEYED_FRAGMENT | PatchFlags.UNKEYED_FRAGMENT)) ||
      (!optimized && shapeFlag & ShapeFlags.ARRAY_CHILDREN)
    ) {
      unmountChildren(children as VNode[], parentComponent, parentSuspense);
    }

    if (doRemove) {
      remove(vnode);
    }
  }

  if (
    (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted)) ||
    shouldInvokeDirs
  ) {
    queuePostRenderEffect(() => {
      vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
      shouldInvokeDirs &&
        invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
    }, parentSuspense);
  }
};
```
