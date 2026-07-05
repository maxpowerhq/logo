<p align="center">
  <img src="https://cdn.jsdelivr.net/npm/@maxpowerhq/logo/dist/hero.svg" alt="@maxpowerhq/logo" width="100%" />
</p>

# @maxpowerhq/logo

Official Maxpower brand marks in every format and size — the fat **MAX**
wordmark, the **M** monogram, a React component, and pre-rendered PNG,
multi-resolution ICO, favicons, and app / dock / tray / social icons.
Installable via `@maxpowerhq/logo`, browsable in `dist/`.

## Install

```sh
pnpm add @maxpowerhq/logo
```

## Use — React

```tsx
import { MaxpowerLogo } from '@maxpowerhq/logo/react';

<MaxpowerLogo size={64} />                          {/* red M monogram */}
<MaxpowerLogo form="wordmark" variant="white" />    {/* white MAX wordmark */}
<MaxpowerLogo form="lockup"   variant="mono" />     {/* ink monogram + MAX */}
```

## Use — SVG strings

```ts
import { getMarkColor, getWordmarkWhite, getLockupMono } from '@maxpowerhq/logo';

element.innerHTML = getWordmarkWhite();
```

## Forms & variants

| Form       | What                                   |
| ---------- | -------------------------------------- |
| `mark`     | square **M** monogram (icon, favicon)  |
| `wordmark` | the fat **MAX** logotype               |
| `lockup`   | monogram + wordmark, side by side      |

Variants: `color` (racing red `#E10600`), `mono` (ink), `white`.

## Pre-rendered assets (`dist/`)

- `logo.svg` · `logo-white.svg` · `logo-mono.svg` — the monogram
- `wordmark.svg` · `wordmark-white.svg` · `wordmark-mono.svg` — the MAX logotype
- `favicon.ico` + `favicon/` — multi-resolution favicons
- `icons/`, `apple/`, `dock/`, `menubar/`, `og/`, `slack/` — every app, dock,
  tray, social, and store size
- `hero.svg` — the banner above

## License

MIT © Maxpower
