/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFD1DC',
        'ice-cream-pink': '#F8C8DC',
        'light-purple': '#E6E6FA',
        'warm-orange': '#FF6B6B',
        'beige': '#F5F5DC',
      },
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
        'handwritten': ['Pacifico', 'cursive'],
        'elegant': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
};