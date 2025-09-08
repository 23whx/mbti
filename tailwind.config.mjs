/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',   // 极淡红色背景
          100: '#fee2e2',  // 淡红色
          200: '#fecaca',  // 温和红色
          300: '#fca5a5',  // 中等红色
          400: '#f87171',  // 柔和红色
          500: '#ef4444',  // 标准红色
          600: '#dc2626',  // 主色调红色
          700: '#b91c1c',  // 深红色
          800: '#991b1b',  // 更深红色
          900: '#7f1d1d',  // 最深红色
        },
        secondary: {
          50: '#f0fdf4',   // 极淡绿色强调
          100: '#dcfce7',  // 淡绿色
          200: '#bbf7d0',  // 清新绿色
          300: '#86efac',  // 中等绿色
          400: '#4ade80',  // 自然绿色
          500: '#22c55e',  // 标准绿色
          600: '#16a34a',  // 主色调绿色
          700: '#15803d',  // 深绿色
          800: '#166534',  // 更深绿色
          900: '#14532d',  // 最深绿色
        }
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
