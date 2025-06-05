/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B0FF',
          400: '#3396FF',
          500: '#0A84FF', // Primary color
          600: '#0064D0',
          700: '#0054AD',
          800: '#003B7A',
          900: '#002147',
        },
        secondary: {
          50: '#E6F9FF',
          100: '#CCF4FF',
          200: '#99E9FF',
          300: '#66DEFF',
          400: '#64D2FF', // Secondary color
          500: '#33C7FF',
          600: '#00A0CC',
          700: '#0086A8',
          800: '#005C73',
          900: '#00323F',
        },
        accent: {
          50: '#FFE6ED',
          100: '#FFCCD9',
          200: '#FF99B3',
          300: '#FF668D',
          400: '#FF375F', // Accent color
          500: '#FF0038',
          600: '#D6002F',
          700: '#AD0026',
          800: '#85001D',
          900: '#5C0014',
        },
        success: {
          500: '#34C759', // Success color
        },
        warning: {
          500: '#FF9500', // Warning color
        },
        error: {
          500: '#FF3B30', // Error color
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
}