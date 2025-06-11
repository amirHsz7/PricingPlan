// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ]
    }
  },
  compatibilityDate: '2025-05-15',
	postcss: {
		plugins: {
			'postcss-import': {},
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['~/assets/css/tailwind.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],
  devtools: { enabled: true },
})
