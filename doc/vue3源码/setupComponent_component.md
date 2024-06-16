#
```ts
function setupComponent(
  instance: ComponentInternalInstance,
  isSSR = false,
) {
  isSSR && setInSSRSetupState(isSSR)

  const { props, children } = instance.vnode
  const isStateful = isStatefulComponent(instance)
  initProps(instance, props, isStateful, isSSR)
  initSlots(instance, children)

  const setupResult = isStateful
    ? setupStatefulComponent(instance, isSSR)
    : undefined

  isSSR && setInSSRSetupState(false)
  return setupResult
}
function isStatefulComponent(instance: ComponentInternalInstance) {
  return instance.vnode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT
}
```

### [initProps_componentProps](./initProps_componentProps.md)
### [initSlots_componentSlots](./initSlots_componentSlots.md)
### [setupStatefulComponent_component](./setupStatefulComponent_component.md)