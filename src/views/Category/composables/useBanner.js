// 封装轮播图业务的逻辑
import { ref, onMounted } from 'vue'
import { bannerApi } from '@/apis/home'

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await bannerApi()
        // console.log(res);
        bannerList.value = res.result
    }
    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}
