import httpInstance from '@/utils/http'
// 导出一个函数供外部调用
export function getCateGory() {
   return httpInstance({
        url: 'home/category/head'
    })
}