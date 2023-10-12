/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e2025',
        'secondary': '#16181d',
        'color-green': '#20ce99',
        'color-red': '#e25131'
      },
    },
  },
  plugins: [],
}

