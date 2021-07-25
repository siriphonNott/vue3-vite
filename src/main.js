import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

// Import Router
import router from './router'

// Import VueFeather
import VueFeather from 'vue-feather';

const app = createApp(App)
app.config.productionTip = false;
app.component(VueFeather.name, VueFeather)
app.use(router)
app.mount('#app')
