import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f9f9ed',
        cream: '#e8dbaf',
        teal: '#2f93ab',
        'teal-light': '#6ab6c4',
        gold: '#c4ac82',
        'gold-light': '#b4d7d8',
        dark: '#083b50',
        muted: '#4d7f8c',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
        display: ['Work Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
