#

```ts
function normalizeEmitsOptions(
  comp: ConcreteComponent,
  appContext: AppContext,
  asMixin = false
): ObjectEmitsOptions | null {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== undefined) {
    return cached;
  }

  const raw = comp.emits;
  let normalized: ObjectEmitsOptions = {};

  // apply mixin/extends props
  let hasExtends = false;
  if (__FEATURE_OPTIONS_API__ && !isFunction(comp)) {
    const extendEmits = (raw: ComponentOptions) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }

  if (isArray(raw)) {
    raw.forEach((key) => (normalized[key] = null));
  } else {
    extend(normalized, raw);
  }

  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
```
