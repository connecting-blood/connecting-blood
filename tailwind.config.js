import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.jsx',
	],

	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Figtree',
					...defaultTheme.fontFamily.sans
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primaryP100: 'var(--primaryP100)',
				primaryP200: 'var(--primaryP200)',
				primaryP300: 'var(--primaryP300)',
				primaryP700: 'var(--primaryP700)',
				primaryP900: 'var(--primaryP900)',
				neutrals: 'var(--neutrals)',
				neutralsN500_O: 'var(--neutralsN500_O)',
				neutralsN550: 'var(--neutralsN550)',
				neutralsN600: 'var(--neutralsN600)',
				neutralsN700: 'var(--neutralsN700)',
				neutralsN800: 'var(--neutralsN800)',
				neutralsN900: 'var(--neutralsN900)',
				accentA100: 'var(--accentA100)',
				accentA300: 'var(--accentA300)',
				accentA400: 'var(--accentA400)',
				accentA600: 'var(--accentA600)',
				accentA700: 'var(--accentA700)',
				accentA800: 'var(--accentA800)',
				accentA900: 'var(--accentA900)',
				textBlack: 'var(--textBlack)',
				textWhite: 'var(--textWhite)',

				background: 'var(--textWhite)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				},
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)'
				}
			}
		}
	},

	plugins: [forms, require("tailwindcss-animate")],
};
