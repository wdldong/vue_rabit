// banner轮播图接口
import httpInstance from '@/utils/http'
export function bannerApi() {
    return httpInstance({
        url: '/home/banner'
    })
}

// 新鲜好物接口
export function NewApi() {
    return httpInstance({
        url: '/home/new'
    })
}

// 人气推荐接口
export function HotApi() {
    return httpInstance({
        url: '/home/hot'
    })
}

// 产品分类列表
export function ListApi() {
    return httpInstance({
        url: '/home/goods'
    })
}