/*
Added from https://github.com/tailwindlabs/tailwindcss.com - Monday June 05, 2023
*/

function normalizeProperties(input) {
    if (typeof input !== "object") return input
    if (Array.isArray(input)) return input.map(normalizeProperties)
    return Object.keys(input).reduce((newObj, key) => {
        let val = input[key]
        let newVal = typeof val === "object" ? normalizeProperties(val) : val
        newObj[
            key.replace(
                /([a-z])([A-Z])/g,
                (m, p1, p2) => `${p1}-${p2.toLowerCase()}`
            )
        ] = newVal
        return newObj
    }, {})
}

export function getUtilities(plugin, { includeNegativeValues = false } = {}) {
    if (!plugin) return {}
    const utilities = {}

    function addUtilities(utils) {
        utils = Array.isArray(utils) ? utils : [utils]
        for (let i = 0; i < utils.length; i++) {
            for (let prop in utils[i]) {
                for (let p in utils[i][prop]) {
                    if (p.startsWith("@defaults")) {
                        delete utils[i][prop][p]
                    }
                }
                utilities[prop] = normalizeProperties(utils[i][prop])
            }
        }
    }

    plugin({
        addBase: () => {},
        addDefaults: () => {},
        addComponents: () => {},
        corePlugins: () => true,
        prefix: x => x,
        config: (option, defaultValue) =>
            option ? defaultValue : { future: {} },
        addUtilities,
        theme: (key, defaultValue) =>
            dlv(defaultConfig.theme, key, defaultValue),
        matchUtilities: (matches, { values, supportsNegativeValues } = {}) => {
            if (!values) return

            let modifierValues = Object.entries(values)

            if (includeNegativeValues && supportsNegativeValues) {
                let negativeValues = []
                for (let [key, value] of modifierValues) {
                    let negatedValue =
                        require("tailwindcss/lib/util/negateValue").default(
                            value
                        )
                    if (negatedValue) {
                        negativeValues.push([`-${key}`, negatedValue])
                    }
                }
                modifierValues.push(...negativeValues)
            }

            let result = Object.entries(matches).flatMap(
                ([name, utilityFunction]) => {
                    return modifierValues
                        .map(([modifier, value]) => {
                            let declarations = utilityFunction(value, {
                                includeRules(rules) {
                                    addUtilities(rules)
                                },
                            })

                            if (!declarations) {
                                return null
                            }

                            return {
                                [require("tailwindcss/lib/util/nameClass").default(
                                    name,
                                    modifier
                                )]: declarations,
                            }
                        })
                        .filter(Boolean)
                }
            )

            for (let obj of result) {
                for (let key in obj) {
                    let deleteKey = false
                    for (let subkey in obj[key]) {
                        if (subkey.startsWith("@defaults")) {
                            delete obj[key][subkey]
                            continue
                        }
                        if (subkey.includes("&")) {
                            result.push({
                                [subkey.replace(/&/g, key)]: obj[key][subkey],
                            })
                            deleteKey = true
                        }
                    }

                    if (deleteKey) delete obj[key]
                }
            }

            addUtilities(result)
        },
    })
    return utilities
}
