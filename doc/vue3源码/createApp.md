#
```ts
const createApp = (...args) => {
  // ensureRenderer = () => createRenderer(rendererOptions)
  // createRenderer = (rendererOptions) => baseCreateRenderer(options)
  /* baseCreateRenderer = (options) => {
   *   render, hydrate, createApp: createAppAPI(render, hydrate)
   */ }
  const app = ensureRenderer().createApp(...args);
  if (!!(process.env.NODE_ENV !== "production")) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component; // 根组件对象
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
```
### [createAppAPI -> app](./createAppAPI.md)

## normalizeContainer
```ts
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
```