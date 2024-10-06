/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all components for class names
  ],
  theme: {
    extend: {
      fontFamily: {
        haiku: ["HaikusScript", "cursive"],
        domaine: ["DomaineDisplay", "serif"],
        grotesk: ["AktivGrotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
