/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tc: {
          bg: '#fafaf9',
          panel: '#ffffff',
          muted: '#f5f5f4',
          primary: '#64748b',
          primaryDark: '#0f172a',
          line: '#e2e8f0'
        }
      }
    }
  },
  plugins: []
};
