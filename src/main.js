import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import '@mdi/font/css/materialdesignicons.css';
import Toaster from '@meforma/vue-toaster';


const createAxiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
})


const app = createApp(App)
app.config.globalProperties.$axios = createAxiosInstance
app.use(store).use(router).use(Toaster, { position: 'top-right' })
app.mount('#app')
