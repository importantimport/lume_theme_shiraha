# Lume Theme Shiraha

[![deno.land/x/lume_theme_shiraha](https://shield.deno.dev/x/lume_theme_shiraha)](https://deno.land/x/lume_theme_shiraha)
![deno compatibility](https://shield.deno.dev/deno/^1.34)
![fff](https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-1.0-yellow?style=flat)

❄️ Material 3-inspired Lume Blog Theme.

## Usage

```jsonc
// import_map.json / deno.json
{
  "imports": {
    "lume/": "https://deno.land/x/lume@v2.0.3/", // ^2.0.3
    "lume_theme_shiraha/": "https://deno.land/x/lume_theme_shiraha@v0.1.0/", // unpublished, use below:
    // "lume_theme_shiraha/": "https://raw.githubusercontent.com/importantimport/lume_theme_shiraha/main/",
    "lume_theme_shiraha/jsx-runtime": "https://deno.land/x/lume_theme_shiraha@v0.1.0/jsx-runtime.ts" // unpublished, use below:
    // "lume_theme_shiraha/": "https://raw.githubusercontent.com/importantimport/lume_theme_shiraha/main/jsx-runtime.ts",
  }
}
```

```jsonc
// deno.json
{
  "compilerOptions": {
    "jsx": "precompile",
    "jsxImportSource": "lume_theme_shiraha",
    "jsxFactory": "jsx",
    "jsxFragmentFactory": "Fragment",
    "types": ["lume/types.ts"]
  }
}
```

```ts
// _config.ts
import lume from 'lume/mod.ts'
import lts from 'lume_theme_shiraha/mod.ts'

export default lume().use(lts())
```

<!-- ## Features

### [FFF Flavored Frontmatter](https://fff.js.org)

Powerful and versatile Frontmatter format. If you were using [Urara](https://github.com/importantimport/urara) before, your postings will not require much modification to migrate.

### Material Design 3 with slight differences

This theme gets the Material Design-like styles from [Shiraha](https://github.com/importantimport/shiraha/tree/main/packages/shiraha).

### Color from featured image

Automatically generate theme colors for your articles with featured image through [Shiraha Colors](https://github.com/importantimport/shiraha/tree/main/packages/shiraha-colors).

### JSON Feed in Everythere

Provides a JSON Feed for each list: home, tags, categories... all can be subscribed via the reader.

### All-in-One, or just templates.

Lume Theme Shiraha has a complete set-up for you, including Lume and Remark / Rehype plugin. You can also use just the templates if you wish to customise them yourself.

All templates use `.tmpl.ts` and have no additional dependencies.

### View Transitions [WIP]

> Currently you need to enable `#view-transition-on-navigation` manually in [`chrome://flags`](chrome://flags).

No need for additional Swup or Pjax, the most native page transition. -->

## License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
