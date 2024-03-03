/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6002ee",
          "secondary": "#ef00b0",
          "accent": "#fef08a",
          "neutral": "#4c1d95",
          "base-100": "#1c1917",
          "info": "#0092a8",
          "success": "#00931d",
          "warning": "#ffaa00",
          "error": "#c7003f",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}

