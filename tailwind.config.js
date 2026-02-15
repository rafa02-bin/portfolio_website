/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#2563eb',
        'neon-pink': '#3b82f6',
        'neon-dark': '#f8fafc',
        'neon-darklight': '#ffffff',
        'pastel-pink': '#fce7f3',
        'pastel-blue': '#dbeafe',
        'pastel-purple': '#f3e8ff',
        'pastel-green': '#dcfce7',
        'pastel-yellow': '#fef3c7',
      },
      fontFamily: {
        mono: ['Courier New', 'Courier', 'monospace'],
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      }
    },
  },
  plugins: [],
}
