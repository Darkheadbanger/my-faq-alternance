import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// this disables the default css and instead you can use nuxt styles or in my case tailwind styles
config.autoAddCss = false

library.add(fas)
// library.add(faGithub, faTwitter, faDev, faCodepen, faInstagram, fas)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
