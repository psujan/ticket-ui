import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vuestic-ui/css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

// import main after importing all packaged components css
import './assets/main.css'

import './utils/rules'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuestic())
app.use(VueSidebarMenu)
app.mount('#app')
