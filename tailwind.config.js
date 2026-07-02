module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
          500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
        },
        ink: { 900: '#0f172a', 700: '#334155', 600: '#475569', 500: '#64748b', 400: '#94a3b8' },
        line: '#e2e8f0',
        canvas: '#ffffff',
        mist: '#f8fafc',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
}
