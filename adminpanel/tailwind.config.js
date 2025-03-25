module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Ensure this is set to 'class'
  theme: {
    extend: {
      screens: {
        xs: '400px', // Custom breakpoint for screens 300px and below
      },
    },
  },
  plugins: [],
};
