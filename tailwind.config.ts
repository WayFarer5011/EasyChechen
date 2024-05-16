/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-green": {
          DEFAULT: "#2B7338",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/hero-bg.svg')",
        'hero-bg': "url('/hero-bg.svg')",
        'box_student-1': "linear-gradient(90deg, rgba(49,130,64,1) 19%, rgba(53,255,53,0.3)),url('/box_student-1.jpg')",
        'box_student-2': "linear-gradient(90deg, rgba(49,130,64,1) 19%, rgba(53,255,53,0.3)),url('/box_student-2.jpg')",
        'box_student-3': "linear-gradient(90deg, rgba(49,130,64,1) 19%, rgba(53,255,53,0.3)),url('/box_student-3.jpg')",
        'box_student-4': "linear-gradient(90deg, rgba(49,130,64,1) 19%, rgba(53,255,53,0.3)),url('/box_image-4.jpg')",
        'box_student-5': "linear-gradient(90deg, rgba(49,130,64,1) 19%, rgba(53,255,53,0.3)),url('/box_image-5.jpg')",
      }
    },
  },
  plugins: [],
};