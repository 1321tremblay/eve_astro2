import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "di-serria": {
          50: "#FDFAF6",
          100: "#F4E2CA",
          200: "#EBCA9E",
          300: "#E2B171",
          400: "#D0964A",
          500: "#B68341",
          600: "#9B7037",
          700: "#815D2E",
          800: "#674A25",
          900: "#4D371B",
          950: "#322412",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      //strategy: 'base', // only generate global styles
      strategy: "class", // only generate classes
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B5998D",
          secondary: "#57728D",
          accent: "#DB9E4E",
          neutral: "#FDD58D",
          "base-100": "#FDFAF6", // Use di-serria 50 for base-100
          "base-200": "#F4E2CA", // Use di-serria 100 for base-200
          "base-300": "#EBCA9E", // Use di-serria 200 for base-300
          "base-400": "#E2B171", // Use di-serria 300 for base-400
          "base-500": "#D0964A", // Use di-serria 400 for base-500
          "base-600": "#B68341", // Use di-serria 500 for base-600
          "base-700": "#9B7037", // Use di-serria 600 for base-700
          "base-800": "#815D2E", // Use di-serria 700 for base-800
          "base-900": "#674A25", // Use di-serria 800 for base-900
          "base-950": "#4D371B", // Use di-serria 900 for base-950
          info: "#00d9ff",
          success: "#2bc535",
          warning: "#ff8a00",
          error: "#f51849",
        },
      },
    ],
  },
};
