/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.{blade.php,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    variants: {
        display: ["group-hover"],
    },
    plugins: [],
};
