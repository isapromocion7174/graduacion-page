/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite/plugin";

export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [flowbite],
    darkMode: "media", // or 'media' or 'class'
};
