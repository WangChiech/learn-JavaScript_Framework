#

```ts
const mountComponent: MountComponentFn = (
  initialVNode,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  namespace: ElementNamespace,
  optimized
) => {
  const instance: ComponentInternalInstance =
    initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );

  // inject renderer internals for keepAlive
  if (isKeepAlive(initialVNode)) {
    (instance.ctx as KeepAliveContext).renderer = internals;
  }

  setupComponent(instance)

  // setup() is async. This component relies on async logic to be resolved
  // before proceeding
  if (__FEATURE_SUSPENSE__ && instance.asyncDep) {
    parentSuspense &&
      parentSuspense.registerDep(instance, setupRenderEffect, optimized);

    // Give it a placeholder if this is not hydration
    // TODO handle self-defined fallback
    if (!initialVNode.el) {
      const placeholder = (instance.subTree = createVNode(Comment));
      processCommentNode(null, placeholder, container!, anchor);
    }
  } else {
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      namespace,
      optimized
    );
  }
};
```

### [createComponentInstance_component](./vue3源码/createComponentInstance_component.md)
### [setupComponent_component](./vue3源码/setupComponent_component.md)

