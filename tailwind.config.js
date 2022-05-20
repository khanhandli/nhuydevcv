module.exports = {
    darkMode: 'class',
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,jsx,ts,js}'],
    theme: {
        extend: {
            keyframes: {
                top: {
                    '0%': { transform: 'translateY(-20px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                opacity: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                title: {
                    '0%': { transform: 'translateX(-20px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
            },
            animation: {
                top: 'top .5s ease-in-out',
                top1: 'top 1s ease-in-out',
                top15: 'top 1.5s ease-in-out',
                top2: 'top 2s ease-in-out',
                opacity: 'opacity .5s ease-in-out',
                opacity1: 'opacity 1.5s ease-in-out',
                title: 'title 1.5s ease-in-out',
                card1: 'top 1.6s ease-in-out',
                card2: 'top 1.7s ease-in-out',
                card3: 'top 1.8s ease-in-out',
                card4: 'top 1.9s ease-in-out',
                tech: 'opacity 2s ease-in',
            },
        },
    },
    plugins: [],
};
const { fontFamily } = require('tailwindcss/defaultTheme');
