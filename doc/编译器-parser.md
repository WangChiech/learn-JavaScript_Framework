# 

```ts
function baseParse(input: string, options?: ParserOptions): RootNode {
  currentInput = input
  currentOptions = extend({}, defaultParserOptions)

  if (options) {
    let key: keyof ParserOptions
    for (key in options) {
      if (options[key] != null) {
        // @ts-expect-error
        currentOptions[key] = options[key]
      }
    }
  }

  tokenizer.mode =
    currentOptions.parseMode === 'html'
      ? ParseMode.HTML
      : currentOptions.parseMode === 'sfc'
        ? ParseMode.SFC
        : ParseMode.BASE

  tokenizer.inXML =
    currentOptions.ns === Namespaces.SVG ||
    currentOptions.ns === Namespaces.MATH_ML

  const delimiters = options && options.delimiters
  if (delimiters) {
    tokenizer.delimiterOpen = toCharCodes(delimiters[0])
    tokenizer.delimiterClose = toCharCodes(delimiters[1])
  }

  const root = (currentRoot = createRoot([], input))
  tokenizer.parse(currentInput)
  root.loc = getLoc(0, input.length)
  root.children = condenseWhitespace(root.children)
  currentRoot = null
  return root
}
```
