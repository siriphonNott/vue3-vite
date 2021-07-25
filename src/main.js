import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

// Import Router
import router from './router'

// Import Router
import store from './store'

// Import VueFeather
import VueFeather from 'vue-feather';

// Import Typewriter
import Typewriter from 'vue-typewriter'

const app = createApp(App)
app.config.productionTip = false;
app.component(VueFeather.name, VueFeather)
app.use(router)
app.use(store)
app.use(Typewriter)
app.mount('#app')
