# Lume Theme Shiraha

## Usage

```ts
// _config.ts
import lume from 'lume/mod.ts'

// from deno.land/x (stable)
import shiraha from 'https://deno.land/x/lume_theme_shiraha/mod.ts'

// from github (latest)
import shiraha from 'https://raw.githubusercontent.com/importantimport/lume_theme_shiraha/main/mod.ts'

export default lume().use(shiraha())
```

## Features

### [FFF Flavored Frontmatter](https://fff.js.org)

Powerful and versatile Frontmatter format. If you were using [Urara](https://github.com/importantimport/urara) before, your postings will not require much modification to migrate.

### Color from featured image

Automatically generate theme colors for your articles with featured image through [Shiraha Colors](https://github.com/importantimport/shiraha/tree/main/packages/shiraha-colors).

### JSON Feed in Everythere

Provides a JSON Feed for each list: homepage, tags, categories... all can be subscribed via the reader.

### View Transitions [WIP]

> Currently you need to enable `#view-transition-on-navigation` manually in chrome://flags.

No need for additional Swup or Pjax, the most native page transition.

## License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
