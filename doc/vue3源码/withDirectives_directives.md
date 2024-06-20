#
```ts
// runtime-core/src/directives.ts
function withDirectives<T extends VNode>(
  vnode: T,
  directives: DirectiveArguments,
): T {
  if (currentRenderingInstance === null) {
    return vnode
  }
  const instance =
    (getExposeProxy(currentRenderingInstance) as ComponentPublicInstance) ||
    currentRenderingInstance.proxy
  const bindings: DirectiveBinding[] = vnode.dirs || (vnode.dirs = [])
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i]
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir,
        } as ObjectDirective
      }
      if (dir.deep) {
        traverse(value)
      }
      bindings.push({
        dir, // vShow = { bM, m, u, buM }
        instance,
        value, // _ctx.isShow
        oldValue: void 0,
        arg,
        modifiers,
      })
    }
  }
  return vnode
}
```

### [vShow_vShow_runtime-dom](./vShow_vShow_runtime-dom.md)