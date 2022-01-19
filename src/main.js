import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/index.css'
import { Button, Field, Swipe, SwipeCell } from 'vant'
import 'virtual:svg-icons-register'
import allKeys from 'virtual:svg-icons-names'
import './assets/iconfont/iconfont.css'

console.log(allKeys)

const app = createApp(App)
app.use(store)
app.use(router)

app.use(Button).use(Field).use(SwipeCell).use(Swipe)

app.mount('#app')
