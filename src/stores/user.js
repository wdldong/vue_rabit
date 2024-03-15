import {defineStore} from 'pinia'
import { ref } from 'vue'
import { LoginApi } from '@/apis/user';

export const useUserStore =  defineStore('user',() => {
    // 定义用户数据的state
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async ({account,password}) => {
        const res = await LoginApi({account,password})
        userInfo.value = res.result
    }
    return {
        userInfo,
        getUserInfo
    }
},{
    persist: true,
  }
)