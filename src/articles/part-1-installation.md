---
title: 'Part 1: Installation'
tags:
  - 'Lume_Theme_Shiraha'
---

## Setup Deno & Lume

As this is a Lume theme, please follow the [Deno installation instructions](https://deno.com/manual@v1.34.2/getting_started/installation) and [Lume documentation](https://lume.land/docs/overview/installation/) to install them first.

## Install Lume Theme Shiraha

Now that you should have a basic Lume blog, modify `_config.ts` to use the Shiraha theme:

```diff caption='_config.ts'
import lume from 'lume/mod.ts'
+ import lts from 'https://deno.land/x/lume_theme_shiraha/mod.ts'

- const site = lume()
+ const site = lume().use(lts())

export default site
```
