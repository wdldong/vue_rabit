// 图片懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el指的是绑定的那个元素 img
                // binging 指令等号后面绑定的表达式的值  图片url
                // console.log(el, binding.value);
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}