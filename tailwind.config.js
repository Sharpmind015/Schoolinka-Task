/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          one: "#3F5BF6",
          two: "#0E31F2",
        },
        primary: {
          50: "#F9F5FF",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      screens: {
        "1xl": "1440px",
      },
      boxShadow: {
        one: "0 1px 2px 0px rgba(16, 24, 40, 0.05)",
        two: " 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
