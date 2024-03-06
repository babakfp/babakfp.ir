import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config"
import { default as twPlugin } from "tailwindcss/plugin"

type RecursiveStringObject = {
    [key: string]: string | RecursiveStringObject
}

export const getUtilities = (plugin: ReturnType<typeof twPlugin>) => {
    const outputUtilities: RecursiveStringObject = {}

    const addUtilities: PluginAPI["addUtilities"] = utilities => {
        utilities = Array.isArray(utilities) ? utilities : [utilities]

        utilities.forEach(utility => {
            const cleanUtility = cleanCSSRuleObject(utility)

            for (let [selector, properties] of Object.entries(cleanUtility)) {
                for (const [property, value] of Object.entries(properties)) {
                    if (property.startsWith("@defaults")) continue
                }

                normalizeProperties(properties)

                outputUtilities[selector] = properties
            }
        })
    }

    plugin.handler({ addUtilities })

    return outputUtilities
}

function normalizeProperties(input:string | RecursiveStringObject) {
    if (typeof input !== "object") {
        return input
    }

    // if (Array.isArray(input)) {
    //     return input.map(normalizeProperties)
    // }

    return Object.keys(input).reduce((newObject, key) => {
        const value = input[key]
        let newValue = typeof value === "object" ? normalizeProperties(value) : value
        
        console.log('key',key);
        
        key.replace(
            /([a-z])([A-Z])/g,
            (m, p1, p2) => `${p1}-${p2.toLowerCase()}`,
        )
        
        console.log('key',key);

        
        // newObject[
        //     key.replace(
        //         /([a-z])([A-Z])/g,
        //         (m, p1, p2) => `${p1}-${p2.toLowerCase()}`,
        //     )
        // ] = newValue
        return newObject
    })
}

function cleanCSSRuleObject(utilities: CSSRuleObject) {
    const recursiveStringObject: RecursiveStringObject = {}

    for (const [key, value] of Object.entries(utilities)) {
        if (typeof value === "string") {
            recursiveStringObject[key] = value
        } else if (
            typeof value === "object" &&
            !Array.isArray(value) &&
            value !== null
        ) {
            recursiveStringObject[key] = cleanCSSRuleObject(value)
        } else {
            throw new Error("Type `RecursiveKeyValuePair` is only handled!")
        }
    }

    return recursiveStringObject
}
