// module.exports = {
  //   mode: "jit",
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "dark-purple": "#081A51",
//         "light-white": "rgba(255,255,255,0.17)",
//       },
//     },
//   },
// plugins: [require("@tailwindcss/typography"), require("daisyui")],


// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
                "dark-purple": "#081A51",
                "light-white": "rgba(255,255,255,0.17)",
              },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },

}