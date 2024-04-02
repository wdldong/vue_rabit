// 引入axios
import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/userStore"
import router from "@/router"
// 封装axios
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 从pinia中获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // console.log(e);
    // 对请求失败做统一报错提示
    ElMessage({type: 'warning',message: e.response.data.message})
    // 对状态码401的处理
    if(e.response.status === 401) {
    // 清除用户token
    const userStore = useUserStore()
    userStore.clearUserInfo()
    // 跳转到登录页
    router.push('/login')
    }

    return Promise.reject(e)
})

export default httpInstance