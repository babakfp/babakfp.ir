---
title: The Right Way to Implement RTL Support in CSS
description: A step-by-step guide to adding RTL support with pure CSS.
create: Sat Aug 30 2025 01:14:48 GMT+0330 (Iran Standard Time)
update: Sun Aug 31 2025 04:19:28 GMT+0330 (Iran Standard Time)
---

<script lang="ts">
    import IconCheckBold from "phosphor-icons-svelte/IconCheckBold.svelte"
    import IconArrowRightBold from "phosphor-icons-svelte/IconArrowRightBold.svelte"
    import IconTextHOneBold from "phosphor-icons-svelte/IconTextHOneBold.svelte"
    import IconTwitterLogoBold from "phosphor-icons-svelte/IconTwitterLogoBold.svelte"
    import IconWrapper from "./IconWrapper.svelte"
</script>

A step-by-step guide to adding RTL support with pure CSS. Learn best practices, avoid common mistakes, and make your layouts work smoothly for both LTR and RTL languages.

Let me first say, thank you for trying to improve user experience of RTL users. It's very much appreciated.

## Make sure to use the `dir` attribute

On your `<html>` tag, add the `dir` attribute with the value `rtl` or `ltr`. This will tell the browser that the page is in RTL or LTR mode.

As a result, browsers will get many things working for you, but they won't know what to do with your CSS.

Make sure to use the HTML `dir` attribute as much as possible instead of using the CSS `direction` property.

## CSS Logical Properties

Search using your browser or ask AI to learn more about CSS Logical Properties.

In short, instead of writing this CSS:

```css
.container {
    margin-left: auto;
    margin-right: auto;
}
```

You can write this CSS:

```css
.container {
    margin-inline: auto;
}
```

This is a shorthand for:

```css
.container {
    margin-inline-start: auto;
    margin-inline-end: auto;
}
```

And this would just work for both LTR and RTL languages.

## What to do when there is no CSS Logical Properties support?

I had this code:

```css
.element {
    transform-origin: top left;
}
```

And I wanted to make it work for RTL languages. Something like this won't work:

```css
.element {
    transform-origin: right start;
}
```

### Instead, use CSS variables:

```css
:root {
    --start: left;
}
[dir="rtl"] {
    --start: right;
}
.element {
    transform-origin: top var(--start);
}
```

So, the result would be `top left` for LTR languages and `top right` for RTL languages.

#### Can use it for `rotate()` too:

```css
:root {
    --rtl: 1;
}
[dir="rtl"] {
    --rtl: -1;
}
.element {
    transform: rotate(calc(90deg * var(--rtl)));
}
```

So, the result would be `90deg` for LTR languages and `-90deg` for RTL languages.

#### Same with `translate()`:

```css
:root {
    --rtl: 1;
}
[dir="rtl"] {
    --rtl: -1;
}
.element {
    position: absolute;
    inset-inline-start: 50%;
    transform: translateX(calc(-50% * var(--rtl)));
}
```

## Always make sure to use as little as possible code

For example, if your site is in LTR, you don't need to add CSS `text-align: left` to any or every element, unless it's necessary for some reason.

## CSS Properties That May Require RTL Adjustments

This list may not be complete.

- `text-align`
- `float`
- `transform: translateX()`
- `transform: rotate()`
- `transform-origin`
- `margin-left`
- `margin-right`
- `padding-left`
- `padding-right`
- `border-left`
- `border-right`
- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-left-radius`
- `border-bottom-right-radius`
- `border-right-color`
- `border-right-style`
- `border-right-width`
- `left`
- `right`
- `inset-left`
- `inset-right`
- `background-position`
- `background-position-x`

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values

## You are not done yet!

Adding direction support isn't easy and it's honestly an unsolved problem. There would never be 100% support for two directions at the same time.

Let's continue with the next step.

## In RTL, some things should still stay LTR and left-aligned

For example, an input that takes URL as input should still be LTR and left-aligned. Because the content inside the input is in a LTR language. Even when it contains RTL characters, the first characters like `https://` are still LTR. So, URL inputs should always be LTR.

Fields that are always in LTR languages, should always stay LTR, like urls, passwords, slugs, paths, file names and UUIDs, code fields, number fields, etc.

What if in input can contain both LTR only and RTL only characters? For example for a slug field, you can use `dir="auto"` attribute to let the browser decide the direction. Learn more about `dir` attribute [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir).

You can copy-paste a text inside an input with `dir="auto"` attribute, and you can figure out the direction a text should be in. If you pasted a RTL text, the input will be RTL. If you pasted a LTR text, the input will be LTR. If it starts with something like `/` but continues with RTL characters, it will be RTL. This is because the first character isn't really direction spasific I guess.

As far as I know, numbers should always be LTR. For example in Farsi/Persian langauge, numbers are written from left to right. So, they should always be shown from left to right.

It's not just about inputs, you may have content that should be LTR and left-aligned. For example, code blocks, text that shows a path like `/home`, and so on. Something like `/home` may look like `home/` in RTL direction, which is incorrect, because it looks like a different value visually. So, it should always be LTR.

## Custom font for new languages

It's always a good idea to use a good looking custom font for new languages.

### Why Use a Custom Font for Farsi?

Default OS fonts often look unattractive. Custom fonts for secondary languages, can be configured to load only when characters from that language appear on the page, so performance remains unaffected.

Using a custom font also gives the impression that the software or tool is built with users in mind.

The first time I opened [Canva](https://www.canva.com), Farsi was automatically selected as the language, and the interface used a custom Farsi font. At first, I thought the site was made by Iranian developers, but it wasn't. They simply implemented translations, RTL support, and a well-designed Farsi font. That attention to detail made me think positively about the product.

The takeaway is clear: custom fonts matter, they influence user perception and enhance the overall experience.

### Why Vazirmatn?

It's free, looks good, and has no licensing or legal issues.

## Icon direction

Some icons like Checkmark <IconWrapper><IconCheckBold /></IconWrapper>, can stay the same in both LTR and RTL languages. But, icons like Arrow-Right <IconWrapper><IconArrowRightBold /></IconWrapper> need to be flipped.

What if we just flip them all horizontally? This could work, but not really. Let's try it.

- Recognized symbols: <IconWrapper><IconCheckBold /></IconWrapper> <IconWrapper><IconCheckBold class="flip-x" /></IconWrapper>
- Texts: <IconWrapper><IconTextHOneBold /></IconWrapper> <IconWrapper><IconTextHOneBold class="flip-x" /></IconWrapper>
- Brand logos: <IconWrapper><IconTwitterLogoBold /></IconWrapper> <IconWrapper><IconTwitterLogoBold class="flip-x" /></IconWrapper>

Maybe you can exclude some icons from being flipped. Or maybe you can just not flip them at all. If you flip a wrong icon, it's a worse issue than if you don't flip it at all.

## Final Words

I hope this guide helps you implement RTL support using pure CSS effectively.
