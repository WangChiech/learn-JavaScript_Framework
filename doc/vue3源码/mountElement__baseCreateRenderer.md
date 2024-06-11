#

```ts
const mountElement = (
  vnode: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  namespace: ElementNamespace,
  slotScopeIds: string[] | null,
  optimized: boolean
) => {
  let el: RendererElement;
  let vnodeHook: VNodeHook | undefined | null;
  const { props, shapeFlag, transition, dirs } = vnode;

  el = vnode.el = hostCreateElement(
    vnode.type as string,
    namespace,
    props && props.is,
    props
  );

  // mount children first, since some props may rely on child content
  // being already rendered, e.g. `<select value>`
  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    hostSetElementText(el, vnode.children as string);
  } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
    mountChildren(
      vnode.children as VNodeArrayChildren,
      el,
      null,
      parentComponent,
      parentSuspense,
      resolveChildrenNamespace(vnode, namespace),
      slotScopeIds,
      optimized
    );
  }

  if (dirs) {
    invokeDirectiveHook(vnode, null, parentComponent, "created");
  }
  // scopeId
  setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
  // props
  if (props) {
    for (const key in props) {
      if (key !== "value" && !isReservedProp(key)) {
        hostPatchProp(
          el,
          key,
          null,
          props[key],
          namespace,
          vnode.children as VNode[],
          parentComponent,
          parentSuspense,
          unmountChildren
        );
      }
    }
    /**
     * Special case for setting value on DOM elements:
     * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
     * - it needs to be forced (#1471)
     * #2353 proposes adding another renderer option to configure this, but
     * the properties affects are so finite it is worth special casing it
     * here to reduce the complexity. (Special casing it also should not
     * affect non-DOM renderers)
     */
    if ("value" in props) {
      hostPatchProp(el, "value", null, props.value, namespace);
    }
    if ((vnodeHook = props.onVnodeBeforeMount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
  }

  if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
    Object.defineProperty(el, "__vnode", {
      value: vnode,
      enumerable: false,
    });
    Object.defineProperty(el, "__vueParentComponent", {
      value: parentComponent,
      enumerable: false,
    });
  }
  if (dirs) {
    invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
  }
  // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
  // #1689 For inside suspense + suspense resolved case, just call it
  const needCallTransitionHooks = needTransition(parentSuspense, transition);
  if (needCallTransitionHooks) {
    transition!.beforeEnter(el);
  }
  hostInsert(el, container, anchor);
  if (
    (vnodeHook = props && props.onVnodeMounted) ||
    needCallTransitionHooks ||
    dirs
  ) {
    queuePostRenderEffect(() => {
      vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
      needCallTransitionHooks && transition!.enter(el);
      dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
    }, parentSuspense);
  }
};
```
```ts
const isReservedProp = /*#__PURE__*/ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted',
)
```

### [invokeDirectiveHook_directives](./invokeDirectiveHook_directives.md)
### [patchProp_patchProp](./patchProp_patchProp.md)