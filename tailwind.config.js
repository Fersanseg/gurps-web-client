/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['MedievalSharp', 'sans-serif'],
        textFont: ['Merriweather', 'sans-serif']
      },
      boxShadow: {
        '2xl': '0 0px 8px 5px rgba(255, 255, 255, 0.7)'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#facc15",
          "secondary": "#00d8ff",
          "accent": "#ff31ae",
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

