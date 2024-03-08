import { createApp } from 'vue'
import './assets/style.css'
import router from './route'
import App from './App.vue'
import {createI18n} from 'vue-i18n'
import '@mdi/font/css/materialdesignicons.css' 

import Particles from "vue3-particles";


const i18n=createI18n({
    locale:'en',
    fallbackLocale:'en',
    messages:{
        en:{
            hello:'Hello'
        },
    }
})
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'animate.css';


const vuetify = createVuetify({
  components,
  directives,
}
)
createApp(App).use(vuetify).use(Particles).use(router).use(i18n).mount('#app')
