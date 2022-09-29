/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('daisyui'),
    require('tailwind-heropatterns')({
      patterns: ['diagonal-lines'],
      colors: {
        default: '#f8fafc',
      },
    }),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        solaris: {
          primary: '#bc8f2d',
          secondary: '#16315a',
          accent: '#3e5982',
          neutral: '#64748b',
          'base-100': '#f9fafb',
          info: '#0369a1',
          success: '#047857',
          warning: '#a16207',
          error: '#b91c1c',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
  theme: {
    fontFamily: {
      title: ['Saira', 'system-ui', 'sans-serif'],
      hero: ['Rigel Star', 'system-ui', 'sans-serif'],
      qtt: ['Dash', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '7rem',
      '9xl': '9rem',
      mainTitle: '12rem',
      mainSubTitle: '5rem',
      mainTitleMobile: '8rem',
    },
    extend: {
      fontFamily: {
        sans: ['Saira', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#ffd573',
          100: '#f8cb69',
          200: '#eec15f',
          300: '#e4b755',
          400: '#daad4b',
          500: '#d0a341',
          600: '#c69937',
          700: '#bc8f2d',
          800: '#b28523',
          900: '#a87b19',
        },
        secondary: {
          50: '#708bb4',
          100: '#6681aa',
          200: '#5c77a0',
          300: '#526d96',
          400: '#48638c',
          500: '#3e5982',
          600: '#344f78',
          700: '#2a456e',
          800: '#203b64',
          900: '#16315a',
        },
        common: colors.gray[50],
        uncommon: colors.red[700],
        rare: colors.sky[600],
        epic: colors.violet[600],
        legendary: colors.yellow[600],
        anomaly: colors.green[300],
      },
      lineHeight: {
        hero: '4.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 12s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      },
    },
  },
  variants: {},
};
