/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#E8521A',
          50: '#fdf0eb',
          100: '#fbd8c8',
          200: '#f7b094',
          300: '#f38860',
          400: '#ef612c',
          500: '#E8521A',
          600: '#c44515',
          700: '#9f3811',
          800: '#7a2b0d',
          900: '#561e09',
        },
        black: {
          DEFAULT: '#0A0A0A',
          light: '#111111',
          card: '#141414',
          border: '#222222',
        },
        gray: {
          850: '#1a1a1a',
          900: '#111111',
          950: '#080808',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
