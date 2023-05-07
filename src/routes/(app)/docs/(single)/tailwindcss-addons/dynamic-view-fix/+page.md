This feature will update the screen size values in the `height`, `maxHeight`, `minHeight`, and `width` properties, from `vh` to `dvh` and `vw` to `dvw`.

```css
:root: {
  --tw-screen-h: 100vh;
  --tw-screen-h: 100dvh;

  --tw-screen-w: 100vw;
  --tw-screen-w: 100dvw;
}
```

The browser will fall back to using `vh` and `vw` if it didn't support the `dvh` and `dvw`.

## How to enable it?

```js
tailwindcssAddons({
  dynamicViewFix: true,
})
```
