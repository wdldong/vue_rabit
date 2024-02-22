import httpInstance from "@/utils/http";
// 导出一个函数供外部使用
export function LayoutCateGory() {
    return httpInstance({
        url: '/home/category/head'
    })
} 