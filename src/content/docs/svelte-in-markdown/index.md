---
title: Svelte in Markdown
---

Hey there! Welcome to [Svelte in Markdown](https://github.com/babakfp/svelte-in-markdown). Ever wished you could sprinkle some Svelte magic into your Markdown files? Well, now you can! With [Svelte in Markdown](https://github.com/babakfp/svelte-in-markdown), writing Svelte code directly in Markdown is a breeze. Whether you're jazzing up docs, crafting tutorials, or spicing up your content, we've got you covered. Say goodbye to boring Markdown and hello to dynamic, interactive content. Ready to level up your Markdown game? Let's dive in!

## What is this?

This library exports a function that acts as a preprocessor for Svelte. It transforms Markdown files into HTML, preparing them for further processing by Svelte or other preprocessors.

This library uses ["unified"](https://github.com/unifiedjs/unified) and its ecosystem, as a transformer, to parse and transform Markdown to HTML.

> [!NOTE]
> This library is an alternative to ["mdsvex"](https://github.com/pngwn/mdsvex).

## When should I use this?

This library is useful when you want to display markdown content on a web page.

> [!IMPORTANT]
> This library is built to be used in SvelteKit projects only!

## What motivated me to create this?

I developed this project due to the issues and limitations with ["mdsvex"](https://github.com/pngwn/mdsvex), which was not receiving updates. Additionally, ["mdsvex"](https://github.com/pngwn/mdsvex) is transitioning out of the ["unified"](https://github.com/unifiedjs/unified) ecosystem, which may not be preferred by everyone.

### What does it address?

-   Provides default configurations out of the box.
    -   ["remark-frontmatter-yaml"](https://www.npmjs.com/package/remark-frontmatter-yaml)
    -   ["remark-gfm"](https://www.npmjs.com/package/remark-gfm)
    -   ["remark-unwrap-images"](https://www.npmjs.com/package/remark-unwrap-images)
    -   ["remark-toc"](https://www.npmjs.com/package/remark-toc)
    -   ["rehype-slug"](https://www.npmjs.com/package/rehype-slug)
    -   ["rehype-autolink-headings"](https://www.npmjs.com/package/rehype-autolink-headings)
    -   ["@shikijs/rehype"](https://www.npmjs.com/package/@shikijs/rehype)
    -   ["rehype-external-links"](https://www.npmjs.com/package/rehype-external-links)
-   Allows utilization of the native SvelteKit layout files (`+layout.svelte`).
-   Eliminates annoying "was created with unknown prop" warnings.
-   Offers the flexibility to create custom [transformer plugins](/docs/svelte-in-markdown/transformers) for alternatives to Markdown.
-   Enables usage of any code highlighting libraries without encountering issues like the need to escape certain characters to prevent conflicts with Svelte syntax.

## Limitations

-   Can't use The Module Script (`<script>` tag with `context="module"` attribute) in markdown files.
-   Only works in SvelteKit projects.
-   Prettier can't format Svelte code in Markdown files (it formats it like its markdown content), and there's no IntelliSense support.

### Somewhat Fixed Limitations

These were previously part of the limitations, but they've been addressed. However, more testing may be needed, so feel free to report any problems you encounter.

-   Only valid HTML syntax is allowed in Markdown files (no Svelte-specific syntax like `<svelte:` tags).
-   `{}` in attributes must be wrapped in quotes (e.g., `="{}"`).
