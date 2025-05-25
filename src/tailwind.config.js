module.exports = {
    content: ["./pages/**/*.html"], // or your specific paths
    theme: {
        extend: {
            fontFamily: {
                myFont: ['"myFont"', 'sans-serif'],
            },
            colors: {
                brandPink: '#E83151',
                brandBlue: '#CDE6F5',
                brandYellow: '#E9EB87',
            },
        },
    },
    plugins: [],
}