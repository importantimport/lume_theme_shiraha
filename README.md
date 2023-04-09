# Lume Theme Shiraha

## Usage

```ts
// _config.ts
import lume from 'lume/mod.ts'
import shiraha from 'https://raw.githubusercontent.com/importantimport/lume_theme_shiraha/main/mod.ts'

export default lume().use(shiraha())
```

## Features

### Color from featured image

Automatically generate theme colors for your articles with featured image through [Shiraha Colors](https://github.com/importantimport/shiraha/tree/main/packages/shiraha-colors).

### View Transitions [WIP]

> Currently you need to enable `#view-transition-on-navigation` manually in chrome://flags.

No need for additional Pjax or Hotwire Turbo, the most native page transition.

### [FFF Flavored Frontmatter](https://fff.js.org)

Powerful and versatile Frontmatter format. If you were using [Urara](https://github.com/importantimport/urara) before, your postings will not require much modification to migrate.

<!-- ## About

Just like [Gumori You](https://github.com/importantimport/gumori-you), but different.

It is similar to [Gumori](https://github.com/importantimport/gumori)'s unstyled templates and is deeply bound to [Shiraha](https://github.com/importantimport/shiraha), a Classless CSS framework inspired by Material 3.

So in this theme you can expect:

- Dynamic theme colors based on [Shiraha Colors](https://github.com/importantimport/shiraha/tree/main/packages/shiraha-colors) / Material Color Utilities
- Similar design to Material 3 but different
- FFF Flavored Frontmatter experience
- Long term maintenance like Urara -->

## License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
