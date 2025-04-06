/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'verde-body': '#16281F',
        'verde-escuro': '#0F1C15',
      },
    },
  },
  plugins: [],
};
