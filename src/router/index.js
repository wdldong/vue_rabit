// createRouter 创建router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/index.vue"
import Login from "@/views/Login/index.vue"
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"
import SubCategory from '@/views/SubCategory/index.vue'
import Details from '@/views/Details/index.vue'
import CartList from '@/views/CartList/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // path 和 component 对应关系的位置
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/Category/:id',
          component: Category
        },
        {
          path: '/Category/sub/:id',
          component: SubCategory
        },
        {
          path: '/detail/:id',
          component: Details
        },
        {
          path: '/cartlist',
          component: CartList
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
