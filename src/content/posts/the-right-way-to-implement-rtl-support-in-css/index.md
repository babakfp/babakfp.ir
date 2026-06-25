---
title: The Right Way to Implement RTL Support in CSS
description: A step-by-step guide to adding RTL support with pure CSS.
create: 2025-08-30
update: 2026-06-25
---

A step-by-step guide to adding RTL support with pure CSS. Learn best practices, avoid common mistakes, and make your layouts work smoothly for both LTR and RTL languages.

Let me first say, thank you for trying to improve RTL UX and making your site usable for RTL users. It's very much appreciated.

## Make sure to use the `dir` attribute

On your `<html>` tag, add the `dir` attribute with the value `rtl` or `ltr`. This will tell the browser that the page is in RTL or LTR mode.

As a result, browsers will get many things working for you, but they won't know what to do with your (non-logical, and some other) CSS.

Make sure to use the HTML `dir` attribute as much as possible instead of using the CSS `direction` property.

## CSS Logical Properties

NOTE: You can search on the Internet or ask AI to learn more about CSS Logical Properties.

In short, instead of writing this CSS code:

```css
.container {
    margin-left: auto;
    margin-right: auto;
}
```

You should write this:

```css
.container {
    margin-inline: auto;
}
```

Which is a shorthand for:

```css
.container {
    margin-inline-start: auto;
    margin-inline-end: auto;
}
```

And this would just work for both LTR and RTL languages.

Learn mode: [CSS logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Logical_properties_and_values)

## CSS Properties that doesn't have logical support

- [`caption-side` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/caption-side)
- [`clear` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clear)
- [`resize` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/resize)
- [`background-position` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)
    - [`background-position-x` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position-x)
    - [`background-position-y` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position-y)
- [`transform-origin` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform-origin)
- [`translateX()` CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/translateX)
- [`rotate()` CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/rotate)

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

### `--start` or `--inline-start`

At first you may think that the `inline` and `block` prefixes (`[inline | block]-[start - end]`) are only used when properties have all four sides (top right bottom left). But this doesn't seem to be true:

Some properties use `start` and `end` (like [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align)) and some other use `inline-start` and `inline-end` (like [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/float)). So, there doesn't seem to be any naming consistency being followed.

Some properties (like [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align)) only have left and right sides, and some other properties (like [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/vertical-align)) only have top and bottom properties. So, if we were to just use `--[start | end]`, would it be for left and right or top and bottom?

So, using `--start` and `--end` won't work. Let's just use `--{inline,block}-{start-end}`. This would make it super clear what side we are targetting and remove any confusion and issues.

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

## CSS properties that need RTL support

The list may not be complete.

- `text-align`
- `float`
- `margin`[^1]
- `margin-left`
- `margin-right`
- `padding`[^1]
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
- `inset`[^1]
- `inset-left`
- `inset-right`
- `background-position`
- `background-position-x`
- [CSS Properties that doesn't have logical support](#css-properties-that-doesnt-have-logical-support)

Learn mode: [CSS logical properties and values: reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Logical_properties_and_values#reference)

## You are not done yet!

Adding direction support isn't easy and it's honestly an unsolved problem. There would never be 100% support for two directions at the same time.

Let's continue with the next step.

## In RTL, some things should still stay LTR and left-aligned

For example, an input tag that takes URL as input should still be LTR and left-aligned. Because the content inside the input is in a LTR language. Even when it contains RTL characters, the first characters like `https://` are still LTR. So, URL inputs should always be LTR.

Fields that are always in LTR languages, should always stay LTR, like urls, passwords, slugs, paths, file names and UUIDs, code fields, number fields, etc.

What if in input can contain both LTR only and RTL only characters? For example for a slug field, you can use `dir="auto"` attribute to let the browser decide the direction. Learn more about `dir` attribute [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir).

You can copy-paste a text inside an input with `dir="auto"` attribute, and you can figure out the direction a text should be in. If you pasted a RTL text, the input will be RTL. If you pasted a LTR text, the input will be LTR. If it starts with something like `/` but continues with RTL characters, it will be RTL. This is because the first character isn't really direction spasific I guess.

As far as I know, numbers should always be LTR. For example in Farsi/Persian langauge, numbers are written from left to right. So, they should always be shown from left to right.

It's not just about inputs, you may have content that should be LTR and left-aligned. For example, code blocks, text that shows a path like `/home`, and so on. Something like `/home` may look like `home/` in RTL direction, which is incorrect, because it looks like a different value visually. So, it should always be LTR.

### When RTL text in the placeholder of a number input is shown from LTR

Example:

```html
<html lang="fa" dir="rtl">
    <input type="number" dir="ltr" placeholder="شماره موبایل" />
</html>
```

The input has `dir="ltr"` because as it's explained above, somethings should always stay LTR.

The placeholder text will be shown from LTR, and this is not good because the text is RTL. So, the input content should be LTR but the placeholder should be RTL. Solution:

```css
input[type="number"]:placeholder-shown {
    direction: inherit;
}
```

This means select `input` tag that is type of `number` when the placeholder is shown, if so, set direction of the input to inherit from the parent, which is `rtl`.

You may want to adjust styling to this, because maybe for some inputs, their parent isn't going to be `rtl`, if so it would be problamatic.

```css
html[dir="rtl"] input[type="number"]:placeholder-shown {
    direction: rtl;
}
```

Note that you should add this placeholder related code to every input that is LTR, so it isn't only for `number` inputs.

Learn more:

- [`:placeholder-shown` CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:placeholder-shown)
- [`inherit` CSS keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/inherit)

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

> [!NOTE]
> note that we are using emojies and emojies can look different based on device OS.

Icons can be mirrored, or in another word, (horizontally) flipped; So they can match the reading and looking direction of the users and provide a better visual and experiense for them.

- _Shouldn't be mirrored:_ When the meaning or the shape breaks. Example:
    - <span class="icon-wrapper text-xl">✅</span> : <span class="icon-wrapper text-xl flip-x">✅</span>
    - <span class="icon-wrapper text-xl">🕒</span> : <span class="icon-wrapper text-xl flip-x">🕒</span>

- _Shouldn't be mirrored:_ When it's a brand logo, flag or similar. Example:
    - <span class="icon-wrapper text-xl">🐦</span> : <span class="icon-wrapper text-xl flip-x">🐦</span> Logo
    - <span class="icon-wrapper text-xl">☯️</span> : <span class="icon-wrapper text-xl flip-x">☯️</span> Symbol
    - <span class="icon-wrapper text-xl">🔰</span> : <span class="icon-wrapper text-xl flip-x">🔰</span> Flag

- _Shouldn't be mirrored:_ When a text is displayed. Example:
    - <span class="icon-wrapper text-xl">💲</span> : <span class="icon-wrapper text-xl flip-x">💲</span>
    - <span class="icon-wrapper text-xl">💯</span> : <span class="icon-wrapper text-xl flip-x">💯</span>
    - <span class="icon-wrapper text-xl">🔝</span> : <span class="icon-wrapper text-xl flip-x">🔝</span>
    - <span class="icon-wrapper text-xl">🤬</span> : <span class="icon-wrapper text-xl flip-x">🤬</span>

- _Shouldn't be mirrored:_ When one part of a shape _should_ be mirrored but another part _shouldn't_. Example:
    - <span class="icon-wrapper text-xl">🔚</span> : <span class="icon-wrapper text-xl flip-x">🔚</span>

        The example above contains text, but sometimes it may be two shapes (with no text) that one should and another shouldn't be mirrored.

        The solution is to duplicate the icon and modify it; Mirror what needs to be mirrored; Now you would have an RTL version of that icon that can be used in RTL contexts.

- _Doesn't need to be mirrored:_ When they are symmetrical. Examples:
    - <span class="icon-wrapper text-xl">😊</span> : <span class="icon-wrapper text-xl flip-x">😊</span>
    - <span class="icon-wrapper text-xl">♥️</span> : <span class="icon-wrapper text-xl flip-x">♥️</span>
    - <span class="icon-wrapper text-xl">🛑</span> : <span class="icon-wrapper text-xl flip-x">🛑</span>
    - <span class="icon-wrapper text-xl">☢️</span> : <span class="icon-wrapper text-xl flip-x">☢️</span>

- _Could easily be mirrored:_ When it wouldn't break the meaning or the shap. Example:
    - <span class="icon-wrapper text-xl">📞</span> : <span class="icon-wrapper text-xl flip-x">📞</span>
    - <span class="icon-wrapper text-xl">🚀</span> : <span class="icon-wrapper text-xl flip-x">🚀</span>
    - <span class="icon-wrapper text-xl">🔊</span> : <span class="icon-wrapper text-xl flip-x">🔊</span>
    - <span class="icon-wrapper text-xl">🏳️</span> : <span class="icon-wrapper text-xl flip-x">🏳️</span>
    - <span class="icon-wrapper text-xl">➡️</span> : <span class="icon-wrapper text-xl flip-x">➡️</span>
    - <span class="icon-wrapper text-xl">👈</span> : <span class="icon-wrapper text-xl flip-x">👈</span>

- _Not sure about these:_
    - <span class="icon-wrapper text-xl">♻️</span> : <span class="icon-wrapper text-xl flip-x">♻️</span>

It may be better to manually review all icons, exclude what doesn't make sense and mirror what makes sense. This would mean reviewed ones gonna work as expected but in feature new icons should be reviewed to which may be missed. What if we just mirrored them all? This could work, but not really. If you flip a wrong icon, it's a worse issue than if you don't flip it at all.

## OS window traffic light actions

Is it a good idea to mirror traffic lights <span class="icon-wrapper text-xl flip-x">🚥</span> : <span class="icon-wrapper text-xl">🚥</span> in MacOC app window acctions? No, it's a bad idea! The same with Windows. It would cause UX issues; The OS may be in English (LTR) but your app could be set to an RTL lanauge, in this scenario all apps other than yours would have LTR traffic light acctions, and user would get annoyed and frasturated that it's only your app that behaves this way and breaks their muscle memory. So, they should be untouched, you should specifically check to make sure they bot on LTR and RTL they look the same and are in the same place and position as eachother.

Note that this may not make sense, and you are right to think that way because it doens't. If the traffic light actions look like <span class="icon-wrapper text-xl flip-x">🚥</span> in LTR, it makes sense for them to look like <span class="icon-wrapper text-xl">🚥</span> in RTL. But as explained, the actions in the rest of the apps and windows (<span class="text-nowrap">➖🟪✖️</span> being placed on the right side) are going to look like how they are in LTR.

Same thing applied to scrollbars too. For LTR sites the scrollbar is on the right side, but for RTL it should be on the left side, so that it's not on the way and you looking at it all the time. The same rules that effects everything, should apply here too. But it's the same as window traffic light actions. In RTL sites with `<html lang="fa" dir="rtl">` you would have the scrollbar on the right side. This is just how it is and the broser doens't change it to be on the left side.

I'm not 100% sure, but if I remember correct, the scrollbar move to left side in RTL sites if OS langauge was changed to a RTL langauge. The same may happen with OS window actions too.

## Naming things by considering the direction

When naming class names, IDs or whatever else, it's a good idea to keep in mind the writing direction of the reader. For classes it's a good idea to use naming like `.end-sidebar` (or `.inline-end-sidebar`) instead of `.right-sidebar`. Because if we use `.right-sidebar` in LTR site and then the site gets translated to an RTL langauge, the element with `.right-sidebar` class is going to be on their left side of the screen! The site that is in LTR is going to get `dir="rtl"` in `html` tag and as a result things going to change direction automatically to match the reading direction. So it's not going to make sense anymore.

Keep this rule in mind when writing explanations too. The documentation or whatever you write should keep the writing direction of the reader in mind.

## Top and Bottom logical properties

Should we use the vertical logical properties too?

- `margin-block-start` instead of `margin-top`
- `margin-block-end` instead of `margin-bottom`

Or only horizontal writing directions? I don't know. My brain doesn't work to understand how vertical would work. This guide is for RTL only.

I just figured out that reverting top and bottom may not be a good idea. If that's the case, doesn't that mean using logical border radius for top and bottom is a bad idea too? I'm not sure. Fuck it. Fuck it. Fuck it.

## Should we just use a LTR to RTL tools?

There are tools like [`"rtlcss"`](https://www.npmjs.com/package/rtlcss) package (and [`"cssjanus"`](https://github.com/wikimedia/node-cssjanus)). These tools can just automatically convert styles from LTR to RTL.

No need to learn logical properties and the hacks; No needs to have a linter to inforce it and make sure that no non-logical CSS is used; Existing tools don't even properly handle all cases. No proper tools to handle all cases to convert your already existing CSS to logical solution (can't handle when logical is not supported).

At this point, logical properties are fucking disapointing.

So, should we just forget about logical properties? **Yeah**, **maybe**! I'm more thwords usign something like rtlcss than using logical properties with all the BS that comes with them.

CSS logical properties **cons**:

- Learning curve. like `width` to `inline-size` :|
- Naming inconsistencies.
- No proper tooling support for migration.
- Not all properties have logical support. So, no true RTL support can be achives without putting so much work in.
- Mental overhead.
- Needs a lot of work to be done to migrate existing projects.

## Final Words

I hope this guide helps you implement RTL support using pure CSS effectively.

[^1]: Only when it contains all four sides: `top right bottom left`.
