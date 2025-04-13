/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
      },
    },
    extend: {
      colors: {
        'verde-body': '#16281F',
        'verde-escuro': '#0F1C15',
        'verde-escuro2': '#2E482C',
        verde: '#17E880',
        'verde-claro': '#91EE77',
        'verde-claro2': '#ACEF75',
        branco: '#fff',
        preto: '#030504',
      },
      fontSize: {
        xs: '12px',
      },
    },
  },
  plugins: [],
};
