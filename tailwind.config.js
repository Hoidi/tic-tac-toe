/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        blurin: 'blurin 0.1s ease-in-out',
        blurplace: 'blurplace 0.2s ease-in-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blurin: {
          '0%': { filter: 'blur(16px)'},
          '100%': { filter: 'blur(4px)'}
        },
        blurplace: {
          '0%': { filter: 'blur(4px) opacity(10%)'},
          '100%': { filter: 'blur(0px) opacity(100%)'}
        }
      }
    }
  },
  plugins: [],
}

