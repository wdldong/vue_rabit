// 导入默认样式
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入图片懒加载插件
import { lazyPlugin } from '@/directives/index'
// 引入全局组件插件 
import { componentPlugin } from '@/components/index'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(lazyPlugin)
app.use(componentPlugin)