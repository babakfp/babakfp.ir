---
title: Tailwind CSS Addons
description: A set of Tailwind CSS preflights, themes, utilities and variants.
---

A set of Tailwind CSS preflights, themes, utilities and variants.

## Install

```bash
pnpm add -D tailwindcss-addons
```

```css
@import "tailwindcss";
@import "tailwindcss-addons";
```

## Usage

All of the preflights, themes, utilities, and variants are imported by default, except:

- `"tailwindcss-addons/theme/font-weight-regular.css"`
- `"tailwindcss-addons/utilities/flex-grid.css"`

### Preflights

```css
@import "tailwindcss-addons/preflight";
/* Or */
@import "tailwindcss-addons/preflight/reset-number-input.css";
@import "tailwindcss-addons/preflight/reset-search-input.css";
```

### Themes

```css
@import "tailwindcss-addons/theme";
/* Or */
@import "tailwindcss-addons/theme/font-size.css";
/* @import "tailwindcss-addons/theme/font-weight-regular.css"; */
```

### Utilities

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/bg-grid.css";
@import "tailwindcss-addons/utilities/bg-radial.css";
@import "tailwindcss-addons/utilities/dir.css";
@import "tailwindcss-addons/utilities/drag.css";
@import "tailwindcss-addons/utilities/flex-grid.css";
/* @import "tailwindcss-addons/utilities/flip.css"; */
@import "tailwindcss-addons/utilities/hide-show.css";
@import "tailwindcss-addons/utilities/inset-center.css";
@import "tailwindcss-addons/utilities/overflow-unset.css";
@import "tailwindcss-addons/utilities/reset-number-input.css";
@import "tailwindcss-addons/utilities/reset-search-input.css";
@import "tailwindcss-addons/utilities/scrollbar-color.css";
@import "tailwindcss-addons/utilities/scrollbar-width.css";
@import "tailwindcss-addons/utilities/tap.css";
```

### Variants

```css
@import "tailwindcss-addons/variants";
/* Or */
@import "tailwindcss-addons/variants/hocus.css";
```
