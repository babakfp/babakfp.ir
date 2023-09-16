const isProduction = process.env.NODE_ENV === "production"

export default {
    plugins: {
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
        ...(isProduction ? { cssnano: {} } : {}),
    },
}
