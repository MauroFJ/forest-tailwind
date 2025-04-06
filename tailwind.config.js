/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1rem',
        lg: '6rem',
      },
    },
    extend: {
      colors: {
        'verde-body': '#16281F',
        'verde-escuro': '#0F1C15',
        'verde-claro': '#91EE77',
        branco: '#fff',
        preto: '#000',
      },
      fontSize: {
        xs: '12px',
      },
    },
  },
  plugins: [],
};
