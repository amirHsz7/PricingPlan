// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
	postcss: {
		plugins: {
			'postcss-import': {},
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
})
