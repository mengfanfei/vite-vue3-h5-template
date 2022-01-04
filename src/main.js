import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/index.css'
import { Button, Field, Swipe, SwipeCell } from 'vant'

const app = createApp(App)
app.use(store)
app.use(router)

app.use(Button).use(Field).use(SwipeCell).use(Swipe)

app.mount('#app')
