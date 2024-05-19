import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

axios.defaults.baseURL = "http://localhost:1234/"
createApp(App).use(router).use(VueAxios, axios).mount('#app')
