/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#070B14',
          surface: '#0D1322',
          elevated: '#121A2B',
        },
        accent: {
          primary: '#8B5CF6',
          'primary-hover': '#7C3AED',
          secondary: '#22D3EE',
          'secondary-hover': '#06B6D4',
        },
        ink: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { section: '1120px' },
      transitionTimingFunction: { smooth: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    },
  },
  plugins: [],
};
