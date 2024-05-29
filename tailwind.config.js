/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				blurin: 'blurin 0.1s ease-in-out',
				blurout: 'blurout 2s cubic-bezier(.5, 0, 1, 0)',
				placeSymbol: 'placeSymbol 0.2s ease-in-out'
			},
			keyframes: {
				blurin: {
					'0%': { filter: 'blur(16px)' },
					'100%': { filter: 'blur(4px)' }
				},
				blurout: {
					'0%': { filter: 'blur(0px)', opacity: 100 },
					'100%': { filter: 'blur(50px)', opacity: 0 }
				},
				placeSymbol: {
					'0%': { filter: 'blur(4px) opacity(10%)' },
					'100%': { filter: 'blur(0px) opacity(100%)' }
				}
			}
		}
	},
	plugins: []
};
