import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import wonder1 from './components/wonder1.vue'
import wonder2 from './components/wonder2.vue'
import wonder3 from './components/wonder3.vue'
import wonder4 from './components/wonder4.vue'
import wonder5 from './components/wonder5.vue'
import wonder6 from './components/wonder6.vue'
import wonder7 from './components/wonder7.vue'

const router = createRouter({
  routes: [
    { path: "/", redirect: "/wonder1" },
    { path: "/wonder1", component: wonder1 },
    { path: "/wonder2", component: wonder2 },
    { path: "/wonder3", component: wonder3 },
    { path: "/wonder4", component: wonder4 },
    { path: "/wonder5", component: wonder5 },
    { path: "/wonder6", component: wonder6 },
    { path: "/wonder7", component: wonder7 }
  ],
  history: createWebHashHistory()
});

createApp(App).use(router).mount('#app')
