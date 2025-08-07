/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#2A0C4E',
        'secondary-background': '#51355A',
        'primary-text': '#FFF8F0',
        'accent-color': '#9E2B25',
        'secondary-text': 'rgba(255, 248, 240, 0.7)',
      }
    },
  },
  plugins: [],
};