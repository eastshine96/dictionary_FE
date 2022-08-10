import { createApp } from 'vue'
// import MyHwakjung from './Hwakjung.vue'
import Main from './Main.vue'
import router from './router'
/*
Vue.prototype.$axios = axios
*/

import axios from "axios"
//const app = createApp(App) 
const app = createApp(Main)
app.config.globalProperties.$axios = axios; 
app.use(router).mount('#app')
