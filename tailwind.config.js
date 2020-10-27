const patterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
	theme: {
		heroPatternsShades: ['300'],
		heroPatternsColors: ['orange'],
		heroPatterns: {
			skulls: patterns.skulls
		},
		extend: {}
	},
	variants: {},
	plugins: [
		require('tailwindcss-debug-screens'),
		require('tailwindcss-hero-patterns'),
		require('@tailwindcss/custom-forms')
	]
};
