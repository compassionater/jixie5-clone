/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a6bc4',
        'primary-dark': '#14549a',
        'primary-light': '#e8f0fe',
        accent: '#ff6a00',
        'gray-bg': '#f5f6f8',
        'text-main': '#333333',
        'text-sub': '#666666',
        'text-light': '#999999',
        'border-color': '#e5e5e5',
      },
      width: {
        'container': '1500px',
      },
      minWidth: {
        'site': '1600px',
      }
    },
  },
  plugins: [],
}
