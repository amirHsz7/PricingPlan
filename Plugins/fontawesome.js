import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faCheck , faBars , faXmark } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faUser, faEnvelope, faCheck , faBars , faXmark)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
