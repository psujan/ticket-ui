import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import VueSidebarMenu from 'vue-sidebar-menu'
import { LoadingPlugin } from 'vue-loading-overlay'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'vue-loading-overlay/dist/css/index.css'
import 'vuestic-ui/css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

// import main after importing all packaged components css
import './assets/main.css'

import './utils/rules'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(LoadingPlugin)
app.use(router)
app.use(pinia)
app.use(createVuestic())
app.use(VueSidebarMenu)
app.mount('#app')
