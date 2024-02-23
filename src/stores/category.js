import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LayoutCateGory } from '@/apis/layoutApi'
export const useCategoryStore = defineStore('category', () => {
    // state 导航列表数据
    const cateGoryList = ref([])
    // action 获取导航列表数据的方法
    const getCategory = async () => {
        const res = await LayoutCateGory()
        console.log(res);
        cateGoryList.value = res.result
    }
  return { cateGoryList,getCategory }
})
