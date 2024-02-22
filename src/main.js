// 导入默认样式
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入测试接口
// import {getCateGory} from '@/apis/testApi'
// getCateGory().then(res => {
//     console.log(res);
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
