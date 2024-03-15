// 导入默认样式
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// 引入图片懒加载插件
import { lazyPlugin } from '@/directives/index'
// 引入全局组件插件 
import { componentPlugin } from '@/components/index'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)