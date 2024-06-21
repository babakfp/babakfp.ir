---
title: CHANGELOG
---

## 1.10.0

-   [breaking] Removed the default export and added named export `allAddons` instead.

## 1.9.3

-   Added TypeScript support.
-   Added new `supports-hover`, `supports-focus`, `supports-focus-within`, `supports-focus-visible`, `supports-hocus`, `supports-hocus-within`, `supports-hocus-visible` utilities.

## 1.9.0 - 1.9.2

Update to 1.9.3 version!

## 1.8.3

-   Added `base` param to `resetNumberInput()` as `resetSearchInput()`. When using them as single imports, excute them.

## 1.8.2

-   [fix] Included file extension when importing.
-   Only included source files in published package.

## 1.8.1

-   Reverted the feature that was syncing the values of `spacing` with `minWidth`, `maxWidth`, `minHeight`, and `maxHeight` utils. https://github.com/tailwindlabs/tailwindcss/pull/12300.

## 1.8.0

-   [breaking] Requires `"tailwindcss": ">= 3.4.1 < 4"`.
-   [breaking] Dropped CJS support (ESM only).
-   [breaking] Rewrote the API.
-   [breaking] Renamed `notVariants` to `not`.
-   [breaking] Renamed `tap-highlight` to `tab`.
-   [breaking] Renamed `screenToDynamicScreen` to `dynamicScreen`.
-   [breaking] Removed `resetInputs` and added (`resetNumberInput` and `resetSearchInput`) utils.
-   [breaking] Renamed `fontWeightRegular` to `fontRegular`.
-   [breaking] Renamed `moreDefaultValues` to `extraDefaults`.
-   [breaking] Enabled `dynamicScreen` by default.
-   Added JSDoc support.
-   Added hocus variants.
-   Can import plugins individually.

## 1.7.0

-   [breaking] Renamed `screenSizeFix` option to `screenToDynamicScreen`.

## 1.6.0

Update to this version if you are using any of the previous versions!

-   Added TypeScript auto-completion for options.

## 1.5.0

Update to this version if you are using any of the previous versions!

-   Fixed `minHeight` and `maxHeight` from `moreDefaultValues` not working when using `screenSizeFix`.

## 1.4.0

Update to this version if you are using any of the previous versions!

-   We went back to using CJS instead of ESM because of some weird issues!

## 1.3.0

Update to this version if you are using any of the previous versions!

-   Fixed: `SyntaxError: Identifier 'plugin' has already been declared`.

## 1.2.0

Update to this version if you are using any of the previous versions!

-   Fixed: `Cannot read properties of undefined (reading 'call')`.

## 1.1.0

Update to this version if you are using any of the previous versions!

-   Fixed: `SyntaxError: Identifier 'plugin' has already been declared`.

## 1.0.0

If you used the older versions, please look at the documentation to find out what's new. I got rid of the list of changes because there were a lot of mistakes in it. So, we're starting fresh. I'm sorry about that!
