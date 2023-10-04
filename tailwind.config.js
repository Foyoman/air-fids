/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'xs': '425px',
      'sm': '640px', // default value
      'md': '768px', // default value
      'lg': '1024px', // default value
      'xl': '1280px', // default value
      '2xl': '1536px',
      // ... any other breakpoints you want to define or modify
    },
    extend: {
      container: {
        screens: {
          xl: '1440px',
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Roboto",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        'slate-850': '#121D2F',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
