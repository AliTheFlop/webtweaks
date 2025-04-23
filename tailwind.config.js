/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // For headings
                heading: ['"Bricolage Grotesque"', 'sans-serif'],
                // Special font
                lexend: ['Lexend', 'sans-serif'],
                // For paragraphs
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
