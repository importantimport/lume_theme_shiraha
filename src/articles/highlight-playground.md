---
title: LTS Highlight Playground
tags:
  - Lume_Theme_Shiraha
  - Shikiji
  - Rehype Pretty Code
---

## Rehype Pretty Code

### [Highlight Lines](https://rehype-pretty-code.netlify.app/#highlight-lines)

```ts {4}
import { useFloating } from '@floating-ui/react'

function MyComponent() {
  const { refs, floatingStyles } = useFloating()

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  )
}
```

### [Group Highlighted Lines By Id](https://rehype-pretty-code.netlify.app/#group-highlighted-lines-by-id)

```ts {1}#a {4}#b
import { useFloating } from '@floating-ui/react'

function MyComponent() {
  const { refs, floatingStyles } = useFloating()

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  )
}
```

### [Highlight Chars](https://rehype-pretty-code.netlify.app/#highlight-chars)

```ts /useState/
const [age, setAge] = useState(50)
const [name, setName] = useState('Taylor')
```

### [Group Highlighted Chars By Id](https://rehype-pretty-code.netlify.app/#group-highlighted-chars-by-id)

```ts /age/#v /name/#v /setAge/#s /setName/#s /50/#i /'Taylor'/#i
const [age, setAge] = useState(50)
const [name, setName] = useState('Taylor')
```

### [Highlight Inline Code](https://rehype-pretty-code.netlify.app/#highlight-inline-code)

The result of `[1, 2, 3].join('-'){:ts}` is `'1-2-3'{:ts}`.

### [Highlight Plain Text](https://rehype-pretty-code.netlify.app/#highlight-plain-text)

The name of the function is `getStringLength{:.entity.name.function}`.

### [Titles](https://rehype-pretty-code.netlify.app/#titles)

```json title="import_map.json"
{
  "imports": {
    "lume/": "https://deno.land/x/lume@v2.0.3/",
    "lume_theme_shiraha/jsx-runtime": "./jsx-runtime.ts"
  }
}
```

### [Captions](https://rehype-pretty-code.netlify.app/#captions)

```json caption="import_map.json"
{
  "imports": {
    "lume/": "https://deno.land/x/lume@v2.0.3/",
    "lume_theme_shiraha/jsx-runtime": "./jsx-runtime.ts"
  }
}
```

### [Line Numbers](https://rehype-pretty-code.netlify.app/#line-numbers)

```ts showLineNumbers
export const layout = 'layouts/article-list.tsx'
export default function* ({ search, paginate }: Lume.Data) {
  const pages = search.pages('type=article', 'date=desc')
  for (const page of paginate(pages, {
    url: (n) => (n === 1 ? '/' : `/p/${n}/`),
    size: 5,
  })) {
    yield page
  }
}
```

## Shikiji Transformers

### Twoslash

```ts twoslash
import { rendererRich, transformerTwoslash } from 'shikiji-twoslash'

transformerTwoslash({
  renderer: rendererRich() // <--
})
```

```ts twoslash
// @errors: 2540
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'.toUpperCase(),
//  ^?
}

todo.title = 'Hello'

Number.parseInt('123', 10)
//      ^|

               //
               //
```

```ts twoslash
import { getHighlighterCore } from 'shikiji/core'

const highlighter = await getHighlighterCore({})
// @log: Custom log message
const a = 1
// @error: Custom error message
const b = 1
// @warn: Custom warning message
const c = 1
// @annotate: Custom annotation message
```
