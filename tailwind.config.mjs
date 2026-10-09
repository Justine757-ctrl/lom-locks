/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        chocolat: {
          50: '#FDF7F4',
          100: '#F7EBE4',
          200: '#EBD2C4',
          300: '#DAB29D',
          400: '#A46E53',
          500: '#75432B',
          600: '#5C3421',
          DEFAULT: '#4A2C1D', // Marron chocolat principal
          800: '#382015',
          900: '#2A170F',
          950: '#1D0F0A',
        },
        dore: {
          50: '#FCF9EF',
          100: '#F7EFCF',
          200: '#EEDDA2',
          300: '#E2C76D',
          400: '#D5B446',
          DEFAULT: '#C9A24B', // Doré principal
          600: '#B08836',
          700: '#8E6B27',
          800: '#705322',
          900: '#58401C',
        },
        fond: {
          DEFAULT: '#FBF8F3', // Blanc cassé naturel
          creme: '#F4ECE1',
          carte: '#FFFFFF',
          sombre: '#20120B',
        },
        sable: {
          100: '#F8F4EE',
          200: '#EDE4D6',
          300: '#DFD2BE',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'dore': '0 10px 30px -10px rgba(201, 162, 75, 0.35)',
        'dore-lg': '0 20px 40px -15px rgba(201, 162, 75, 0.45)',
        'doux': '0 10px 35px -5px rgba(74, 44, 29, 0.08)',
        'carte': '0 4px 20px -2px rgba(74, 44, 29, 0.06)',
      }
    },
  },
  plugins: [],
}
