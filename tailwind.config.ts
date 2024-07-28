import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'plitz-primary': '#A93756',
			'plitz-secondary': '#CDC6C3',
			'plitz-body': '#4B4B4B',
			'plitz-accent': '#A18E85',
			'plitz-silver': '#F2F2F2',
			white: '#ffffff',
		},
		fontFamily: {
			'plitz-font-sec': 'var(--secodary-font)',
			'plitz-font-main': ['futura-pt', 'sans-serif'],
			'plitz-font-ter': ['geom-graphic', 'sans-serif'],
		},

		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'plitz-box-5-15': '0 5px 15px rgba(0,0,0,0.16)',
				'plitz-box-4-32': '0 4px 32px rgba(35,25,77,0.16)',
				'plitz-image': '0 0 25px rgba(0,0,0,0.75)',
			},
			borderRadius: {
				plitzsm: '1.25rem',
				plitzmd: '1.875rem',
				plitzlg: '2.1875rem',
				full: '50%',
			},
			borderWidth: {
				10: '10px',
			},
			dropShadow: {
				'plitz-text': '0 5px 15px rgba(0,0,0,0.16)',
				'plitz-darker': '0 3px 15px rgba(0,0,0,0.75)',
				'plitz-titles': '0 2px 10px rgba(0,0,0,0.9)',
			},
			height: {
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
			},
			keyframes: {
				bounce: {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(-100%)' },
				},
			},
			screens: {
				'3xl': '1920px',
				'4xl': '2560px',
			},
		},
	},
	plugins: [],
};
export default config;
