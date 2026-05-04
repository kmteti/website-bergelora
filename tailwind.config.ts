import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { bgBatik } from './src/lib/repeater'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
      },
    },
  },
  plugins: [plugin(bgBatik)],
}

export default config
