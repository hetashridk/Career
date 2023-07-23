/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '0.5xl': '12px',
        '5.3xl': '37px',
        '5.5xl': '33px',
        '6.5xl': '42px',
        // '6.xl': '42px',
        '7.5xl': '57px',
      },
      backgroundImage:  {
        'nav': "url('/public/images/header.png')",
      },
    },
  },
  plugins: [],
}