module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: {
        enabled: true,
        content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
    },
    // purge: ['./src/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
}
