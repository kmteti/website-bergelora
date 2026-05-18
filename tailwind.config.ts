import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { bgBatik } from './src/lib/repeater'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d627c', // KMTETI primary-500
          foreground: '#ffffff',
          10: '#19afe51a',
          100: '#b7e5f7',
          200: '#64caef',
          300: '#19afe5',
          400: '#138bb6',
          500: '#0d627c',
        },
        secondary: {
          DEFAULT: '#607e15', // KMTETI secondary-500
          foreground: '#ffffff',
          10: '#abdf3b1a',
          100: '#e3f5be',
          200: '#c7eb7c',
          300: '#abdf3b',
          400: '#87b22f',
          500: '#607e15',
        },
        neutral: {
          10: '#3333331a',
          100: '#ffffff',
          200: '#e5e5e5',
          300: '#d2d2d2',
          400: '#bbbbbb',
          500: '#a4a4a4',
          600: '#8a8a8a',
          700: '#777777',
          800: '#606060',
          900: '#4a4a4a',
          1000: '#333333',
        },
        red: {
          10: '#ff37491a',
          100: '#ff3749',
          200: '#e60416',
          300: '#9e0609',
        },
        destructive: {
          DEFAULT: '#e60416', // mapped to red-200
          foreground: '#ffffff',
        },
        yellow: {
          10: '#ffdb431a',
          100: '#ffdb43',
          200: '#efa400',
        },
        green: {
          10: '#21c95b1a',
          100: '#82efa4',
          200: '#21c95b',
        },
        complement: {
          10: '#fa4f051a',
          50: '#fa4f0580',
          100: '#fcc4ac',
          200: '#fc8a58',
          300: '#fa4f05',
          400: '#c23d04',
          500: '#892b03',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        heading: ['var(--font-instrument-sans)', 'sans-serif'],
      },
      fontSize: {
        /* Headings: Fluid Typography (clamp) 
           Format: clamp(min_size, preferred_viewport_width, max_size) */
        h1: [
          'clamp(2.5rem, 5vw + 1rem, 4rem)',
          { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '700' },
        ], // 40px to 64px
        h2: [
          'clamp(2rem, 4vw + 1rem, 3rem)',
          { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '700' },
        ], // 32px to 48px
        h3: [
          'clamp(1.5rem, 3vw + 0.5rem, 2rem)',
          { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '700' },
        ], // 24px to 32px
        h4: [
          'clamp(1.25rem, 2vw + 0.5rem, 1.5rem)',
          { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '700' },
        ], // 20px to 24px
        h5: [
          'clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.4', letterSpacing: '0px', fontWeight: '700' },
        ], // 18px to 20px

        /* Body Texts: Relative units (rem) */
        b1: ['1.25rem', { lineHeight: '1.4', letterSpacing: '0px', fontWeight: '400' }], // 20px
        b2: ['1.125rem', { lineHeight: '1.55', letterSpacing: '0px', fontWeight: '400' }], // 18px
        b3: ['1rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '400' }], // 16px
        b4: ['0.875rem', { lineHeight: '1.57', letterSpacing: '0px', fontWeight: '400' }], // 14px
        b5: ['0.75rem', { lineHeight: '1.66', letterSpacing: '0px', fontWeight: '400' }], // 12px
        b6: ['0.625rem', { lineHeight: '1.6', letterSpacing: '0px', fontWeight: '400' }], // 10px
        b7: ['0.625rem', { lineHeight: '1.4', letterSpacing: '0px', fontWeight: '400' }], // 10px
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
    },
  },
  plugins: [plugin(bgBatik)],
}

export default config
