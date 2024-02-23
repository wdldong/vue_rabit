// banner轮播图接口
import httpInstance from '@/utils/http'
export function bannerApi() {
    return httpInstance({
        url: '/home/banner'
    })
}