import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import naiveui from 'naive-ui'
import router from './router'

createApp(App)
.use(naiveui)
.use(router)
.mount('#app')
