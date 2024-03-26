// 头部购物车数据
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCatStore = defineStore('catestore',() => {
    const catStoreList = ref([])
    // 添加购物车逻辑
    const addCat = (goods) => {

        // 已经添加过： count+1
        // 没有添加过： push方法
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在catStoreList中找到，找到了就是添加过
        const item = catStoreList.value.find((item) => goods.skuId=== item.skuId)
        if(item) {
            // 找到了有的数据
            // count++
            item.count++
        } else {
            // 没有找到数据
            catStoreList.value.push(goods)
        }
    }
    // 删除购物车逻辑
    const delCart = (skuId) => {
        // 思路
        // 1、找到要删除项的下标值(findIndex) -- splice
        const idx = catStoreList.value.findIndex((item) => skuId === item.skuId)
        // 2、使用数组的过滤方法 -- filter
        catStoreList.value.splice(idx,1)
    }   
    return {
        catStoreList,
        addCat,
        delCart
    }
},{
    // 开启持久化，页面刷新不丢失数据
    persist: true
})