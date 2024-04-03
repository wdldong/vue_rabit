import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginApi } from '@/apis/user';
import { useCatStore } from '@/stores/cartStore'
import { mergeCartApi } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const CatStore = useCatStore()
    // 定义用户数据的state
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await LoginApi({ account, password })
        userInfo.value = res.result
        // 登录时合并购物车
        await mergeCartApi(CatStore.catStoreList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        CatStore.updateCart()
    }
   

    // 退出登录时清除用户数据
    const clearUserInfo = () => {
        userInfo.value = {}
        // 清除购物车列表
        CatStore.clearCart()
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
}
)