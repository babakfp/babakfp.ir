module.exports = () => ({
    theme: {
        extend: {
            spacing: {
                "container-x": "var(--container-x)",
            },
            container: {
                center: true,
                padding: "var(--container-x)",
            },
        },
    },
    plugins: [
        ({ addBase }) => {
            addBase({
                ":root": {
                    "--container-x": "1rem",
                    "@screen sm": {
                        "--container-x": "1.5rem",
                    },
                },
                ".container": {
                    "@apply !max-w-screen-xl": "",
                },
            })
        },
    ],
})
