// 导入默认样式
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.directive('img-lazy', {
    mounted(el, binding) {
        // el指的是绑定的那个元素 img
        // binging 指令等号后面绑定的表达式的值  图片url
        console.log(el, binding.value);
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting);
                if (isIntersecting) {
                    el.src = binding.value
                }
            },
        )
    }
})