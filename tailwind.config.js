/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "hanson": ['Hanson Bold', 'sans-serif'],
        "work": ['Work Sans', 'sans-serif']
      },
      colors: {
        "petrol-blue": {
          "500": "#00A3A3",
          "600": "#008080",
          "700": "#007A7A"
        },
        "yellow-toy": {
          "500": "#F3DE8A",
          "600": "#EAD273"
        },
        "pet-pink": {
          "400": "#FFC0CB",
          "700": "#F63E5E"
        },
        "pet-green": {
          "400": "#DFFFD6",
          "500": "#B4EAD3"
        },
        "pet-red": {
          "600": "#FF220C",
          "700": "#E51F0B"
        },
        "pet-gray": {
          "500": "#E6E6E6"
        }
      },
    },
    plugins: [],
  }
}
