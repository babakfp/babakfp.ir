---
title: Deno - A Journey of Frustration and Disappointment
description: I'll share my experiences with Deno. I hate it.
update: 2024/06/22
create: 2024/06/20
---

When Deno was first released, I was excited to see the potential of the project. I thought it would be a great alternative to Node.js, and I was _wrong_.

## Deno isn't available in sanctioned countries

If you live in a sanctioned country, you need to use a VPN to access the docs, download any files and packages from their servers.

## Deno doesn't natively support JSX

This is what you see in their website:

![](/content/blog/fuck-deno/jsx-native-support.png)

It's a _lie_.

To get JSX working, this needs to be added to the `deno.json` file:

```json
{
    "imports": {
        "preact/jsx-runtime": "https://cdn.skypack.dev/preact/jsx-runtime?dts",
        "preact/jsx-dev-runtime": "https://cdn.skypack.dev/preact/jsx-dev-runtime?dts",
        "jsx": "https://deno.land/x/jsx@v0.1.5/mod.ts"
    },
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "preact"
    }
}
```

## Importing packages via URL

The Deno team advertised that importing packages via URL is the future. Well, it's not. This approach had many issues. They later changed their mind and recommended using the new package manager. It's the same as NPM or PNPM, but it's _worse_.

## Poor package manager

The package manager is a joke. It can only install packages. It can't update or remove them.

PNPM has a feature that when configured, the `^` character doesn't get added to the package versions. This feature isn't available in the Deno package manager.

I don't know why every fucking package manager adds the `^` character to the package versions. This is problematic because someone else can download your source code and experience issues. After all, the package versions won't be the same. The lock file can't solve this.

https://discord.com/channels/684898665143206084/1237650610778804264/1237650610778804264

## Deno doesn't support Lightning CSS

I was looking for a CSS parser. Deno website [suggests](https://docs.deno.com/runtime/manual/advanced/jsx_dom/css) two different CSS parsers, and none of them were what I wanted (they sucked).

I found Lightning CSS, and it was fast, feature-rich, and type-safe in my experience. The new version of TailwindCSS (v4) uses it too.

After building my project, I realized that when I tried to run the compiled executable, it didn't work. After a few days and talking to a community member, I found that Deno doesn't support something related to Node.js. Check out the GitHub [issue](https://github.com/denoland/deno/issues/23266).

## Compatibility issues

If you choose Deno, you will encounter compatibility issues. It's a never-ending problem.

## Deno doesn't know what it's trying to be

When Deno was announced, they said it wasn't a replacement for Node.js. Now, they are trying to make it to be the replacement.

Even when Deno wasn't trying that, it didn't bring any great features. Now, they will just chase what Node.js does and try to make it compatible.

What if Node.js brought TypeScript support out of that box? What Deno is going to do? Deno just has a few out-of-the-box features, and that's it. That's what Deno is. The biggest of those is the built-in TypeScript support. Node.js can add that and easily make Deno less appealing. Then, Node.js will be the runtime that has TypeScript support and doesn't have compatibility issues.

## Deno and Rust

I hate Rust. Deno is a tool for JavaScript developers, and using Rust means less contributes.

### Small issues and nitpicks

1. Formatter Defaults: Let's consider defaulting formatter settings to `4` spaces for indentation and disabling semicolons. Don't have stupid defaults. It fucking sucks. It's not fucking readable. Fuck `2` space indentation. Fuck semicolons.

2. Built-in Formatters: Adding CSS, HTML, and more built-in formatters would reduce reliance on external tools like Prettier. If Deno is going to have a code formatter, it should do it well. What is the point of I'm going to need to use Prettier?

3. There is no user installer like `.exe` or `.msi`.

4. File Structure: Instead of `mod.ts` (stupid Rust convention), how about using index.ts? Let's keep it focused on JavaScript. Deno is for JavaScript, not Rust!

5. Consistent Naming: Let's stick to camelCase for everything, including variables, file names, and use PascalCase for types and classes (and some file names). For example, why do we have both camelCase and snake_case in imports like `import { parseArgs } from "std/cli/parse_args.ts"`?

6. Enhanced Compilation: It would be awesome if we could compile TypeScript projects to JavaScript directly within Deno, similar to tsc. Not having this, defeats the purpose.

7. Improved Documentation Links: It would be great for libraries to easily link to their documentation sites from the Deno repo page. The alternative solution is to put the link in the README, but it would be better to put it somewhere visible and consistent for all libraries. (This is related to JSR site).

8. Remove the default ending slash in `Listening on http://localhost:8000/`. Removing the whole output would be even better.

## JSR

When it was announced, I was excited about it. I Later realized that no one was using it.

## Compile to executable feature

The only thing that you can do, is to compile to an executable. There is no customization or features or anything like that.

## Last words

Sorry, but I can't think positive about Deno anymore.
