import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faHouse, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faHouse, faGithub, faDumbbell)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
