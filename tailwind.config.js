/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}", // para que busque en archivos TS/TSX
  ],
  theme: {
    extend: {
      // Aquí extensiones de colores, tipografías, etc.
    },
  },
  plugins: [],
};
