---
title: Extra Defaults
---

<script>
    import { onMount } from "svelte"
    import { extraDefaults } from "tailwindcss-addons"
    import stringifyObject from "stringify-object"
    import UtilsTable from "$lib/UtilsTable.svelte"

    let codeHTML = ""

    const getHighlightedCode = async () => {
		const response = await fetch("/api/highlighter", {
			method: "POST",
			body: json({
                code: stringifyObject(extraDefaults.config, {
                    indent: "    ",
                    singleQuotes: false
                }),
                lang: "js"
            }),
			headers: {
				"content-type": "application/json",
			},
		});
	
		return await response.json();
	}

    onMount(async () => {
        codeHTML = await getHighlightedCode()
    })
</script>

<UtilsTable utilities={extraDefaults.config.theme.extend} />

Your tailwind config file will be extended with these values:

{@html codeHTML}

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { extraDefaults } from "tailwindcss-addons"

export default {
    plugins: [extraDefaults],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            extraDefaults: false, // Enabled by default
        }),
    ],
}
```
