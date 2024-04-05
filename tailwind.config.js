module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        backgroundColor: (theme) => ({
            ...theme('colors'),
            lime: '#6cae30',
        }),
        textColor: (theme) => ({
            ...theme('colors'),
            lime: '#6cae30',
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
