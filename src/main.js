import { createApp } from 'vue'
import router from './route'
import App from './App.vue'
import {createI18n} from 'vue-i18n'
import '@mdi/font/css/materialdesignicons.css' 
import Particles from "vue3-particles";
import './assets/styles.css'


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

const MyTheme = {
    dark: false,
    colors:{
        maincolor:'#12F3A6'
    }
}
const vuetify = createVuetify({
  theme:{
    defaultTheme:'MyTheme',
    themes:{
        MyTheme
    }
  },
  components,
  directives,
}
)
createApp(App).use(vuetify).use(Particles).use(router).use(i18n).mount('#app')
