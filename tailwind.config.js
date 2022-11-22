/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: { 
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      accent: 'rgba(var(--color-accent) / <alpha-value>)',
      success: 'rbg(var(--color-sucess)  / <alpha-value>)',
      info: 'rbg(var(--color-info) / <alpha-value>)',
      warning: 'rbg(var(--color-warning) / <alpha-value>)',
      danger: 'rbg(var(--color-danger) / <alpha-value>)',
      purpledark: 'rbg(var(--color-dark-purple) / <alpha-value>)',
      text: 'rbg(var(--color-text-color) / <alpha-value>)',
      searchBar: 'rbg(var(--color-search-bar) / <alpha-value>)',
      hover: 'rbg(var(--color-hover) / <alpha-value>)',
      background: 'rbg(var(--color-background) / <alpha-value>)',
      filler: '#632887',
      text2: 'rgb(var(--color-text-2) / <alpha-value>)',
      mainBg: 'rgb(var(--color-main-bg) / <alpha-value>)',
      }
    }
    },
  plugins: [],
}
