/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'lg-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
        'xl-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
