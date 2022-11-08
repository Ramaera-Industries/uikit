# 🥞 Ramaera UIkit


Ramaera UIkit is a set of React components and hooks used to build pages on Ramaera's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add https://github.com/Ramaera-Industries/uikit`

***Note**: In case you want to use the older version of the Ramaera UIkit, you should install @ramaera-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Providers

Before using Ramaera UIkit, you need to provide the theme file to uikit provider.

```
import { UIKitProvider, light, dark } from '@ramaera/uikit'
...
<UIKitProvider theme={isDark ? dark : light}>...</UIKitProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@ramaera/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://ramaera.github.io/ramaera-uikit/)
