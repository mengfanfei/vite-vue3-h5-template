import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from '@/router/index'
import './assets/styles/index.css'
import {Button, Field, Swipe, SwipeCell} from 'vant'
import 'virtual:svg-icons-register'
import './assets/iconfont/iconfont.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.use(Button).use(Field).use(SwipeCell).use(Swipe)

app.mount('#app')
