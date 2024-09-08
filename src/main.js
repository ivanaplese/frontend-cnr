import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://cars-n-rides-backend.vercel.app';

// Stvori Vue aplikaciju
const app = createApp(App);

// Registriraj axios kao globalni resurs
app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');