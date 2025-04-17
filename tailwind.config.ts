import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Модернизированная цветовая палитра для Татарстана
        tatarstan: {
          red: '#ff3b4a',        // Яркий красный
          green: '#00c875',      // Яркий зеленый
          dark: '#101935',       // Темно-синий
          light: '#f0f5ff',      // Светло-голубой
          accent1: '#6ee7b7',    // Мятный
          accent2: '#fb7a8f',    // Розовый
          accent3: '#6a7dd9',    // Лавандовый
          white: '#ffffff'
        },
        season: {
          spring: '#57c7ff',     // Яркий голубой
          summer: '#00c875',     // Яркий зеленый
          autumn: '#ff7849',     // Оранжевый
          winter: '#90b4ff'      // Небесно-голубой
        }
      },
      borderRadius: {
        xl: '1rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out'
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 200, 117, 0.5), 0 0 20px rgba(0, 200, 117, 0.3)',
        'neon-red': '0 0 10px rgba(255, 59, 74, 0.5), 0 0 20px rgba(255, 59, 74, 0.3)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;