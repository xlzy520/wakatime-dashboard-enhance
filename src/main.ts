import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { routes } from '~/router'

import './styles/main.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
