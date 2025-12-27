import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],

  theme: {
    extend: {
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }],
        h2: ['1.875rem', { lineHeight: '2.25rem' }],
        h3: ['1.6rem', { lineHeight: '2rem' }],
        h4: ['1.45rem', { lineHeight: '1.75rem' }],
        h5: ['1.225rem', { lineHeight: '1.5rem' }],
        h6: ['1rem', { lineHeight: '1.5rem' }],
        p: ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },

  plugins: [],
}

export default config
