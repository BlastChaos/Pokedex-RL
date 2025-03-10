/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./Component/**/*.{ts,js,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      width: {
        108: "27rem", // 27rem width
      },
      height: {
        108: "27rem", // 27rem height
      },
    },
  },
  plugins: [],
};
