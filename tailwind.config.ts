import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pr: {
          bg: 'oklch(0.141 0.005 285.823)',
          surface: 'oklch(0.21 0.006 285.885)',
          primary: 'oklch(85% 0.14 295)',
          primaryFg: 'oklch(0.21 0.006 285.885)',
          ring: 'oklch(80% 0.16 290)',
          muted: 'oklch(0.274 0.006 286.033)'
        }
      },
      borderRadius: {
        lg: '10px',
        xl: '14px',
        '2xl': '18px'
      },
      boxShadow: {
        card: '0 20px 40px rgba(0,0,0,.35)',
      }
    }
  },
  darkMode: 'class',
} satisfies Config

