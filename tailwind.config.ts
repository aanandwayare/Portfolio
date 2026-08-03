import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        surface: 'var(--surface)',
        elevated: 'var(--elevated)',
        primary: {
          DEFAULT: '#FF6B00',
          hover: '#E55E00',
          light: '#FF8C35',
          dark: '#CC5500',
        },
        copper: {
          50: '#FFF5EC',
          100: '#FFE8D1',
          200: '#FFD0A3',
          300: '#FFB36A',
          400: '#FF8C35',
          500: '#FF6B00',
          600: '#E55E00',
          700: '#CC5500',
          800: '#A34300',
          900: '#7A3200',
        },
        graphite: {
          50: '#F8F7F5',
          100: '#EFEDE8',
          200: '#DFDDD7',
          700: '#2E3338',
          800: '#24282C',
          900: '#1A1D20',
          950: '#111315',
        },
        accent: {
          copper: '#FF8C35',
          slate: '#8E95A0',
          success: '#3EA27A',
          warning: '#D7A23B',
          error: '#D05D58',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'copper-glow': '0 0 35px -5px rgba(255, 107, 0, 0.35)',
        'copper-sm': '0 0 15px rgba(255, 107, 0, 0.25)',
        'glass-card': '0 12px 36px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'glow-pulse': 'glow 4s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-gradient': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
