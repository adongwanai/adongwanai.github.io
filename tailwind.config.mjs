import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				primary: '#0a0a0a',
				secondary: '#141414',
				tertiary: '#1a1a1a',
				accent: {
					DEFAULT: '#3b82f6',
					hover: '#2563eb',
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			keyframes: {
				typing: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
				blink: {
					'50%': { borderColor: 'transparent' },
				}
			},
			animation: {
				typing: 'typing 3.5s steps(25, end)',
				blink: 'blink .75s step-end infinite',
			}
		},
	},
	plugins: [typography],
}
