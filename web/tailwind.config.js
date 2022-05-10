module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996dff",
          500: "#8257e6",
        },
      },
      borderRadius: {
        md: "4px",
      },
      screens: {
        sm: '270px',
        md: '1024px'
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
