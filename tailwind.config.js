/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Mono', 'monospace', 'sans-serif'],
      },
      textColor: {
        'default': '#FFFFFF',
      },
      colors: {
        'primary': "#A9FBB5",
        'secondary': "#F8CC6B",
        'background': "rgb(19,18,23)",
        "background-light": "rgb(36,35,42)",
        'grey-light': "#53525A",
      },
    },
  },
  plugins: [],
};
