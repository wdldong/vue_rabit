// banner轮播图接口
import httpInstance from '@/utils/http'
export function bannerApi(params = {}) {
    // 默认为 1，一级分类为 2
    // 解构赋值
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
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