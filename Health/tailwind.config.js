/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "primary-green": "#009970",
        "primary-gray-light": "#f9f8f9",
        "primary-gray-dark": "#444444",
        "primary-gray-darker": "#777777",
        "primary-faded-black": "#212529",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      
    },
  },
  plugins: [],
};
