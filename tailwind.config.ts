import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      colors: {
        pixel: '#D7F041',
        ink: '#111111',
        paper: '#F5F5F5',
        muted: '#B9B9B9',
        cyan: '#00FFC6',
        violet: '#8B5CF6',
        soot: '#050505'
      },
      boxShadow: {
        pixel: '8px 8px 0 #111111',
        'pixel-sm': '4px 4px 0 #111111',
        glow: '0 0 34px rgba(215, 240, 65, 0.45)',
        cyan: '0 0 34px rgba(0, 255, 198, 0.34)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -18px, 0) rotate(3deg)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        'floaty-slow': 'floaty 10s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        glitch: 'glitch 0.35s steps(2, end) both',
        scan: 'scan 6s linear infinite'
      }
    }
  },
  plugins: []
}

export default config
