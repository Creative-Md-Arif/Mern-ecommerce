/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        lightText: "#6D6D6D",
        destructive: "#B91c1c",
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
