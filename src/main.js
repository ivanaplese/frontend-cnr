import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')

// Postavite Axios kao globalni resurs
app.config.globalProperties.$axios = axios

