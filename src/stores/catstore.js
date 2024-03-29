// 头部购物车数据
import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useCatStore = defineStore('catestore', () => {
    const catStoreList = ref([])
    // 添加购物车逻辑
    const addCat = (goods) => {

        // 已经添加过： count+1
        // 没有添加过： push方法
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在catStoreList中找到，找到了就是添加过
        const item = catStoreList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            // 找到了有的数据
            // count++
            item.count++
        } else {
            // 没有找到数据
            catStoreList.value.push(goods)
        }
        // console.log(catStoreList.value);
    }
    // 删除购物车逻辑
    const delCart = (skuId) => {
        // 思路
        // 1、找到要删除项的下标值(findIndex) -- splice
        const idx = catStoreList.value.findIndex((item) => skuId === item.skuId)
        // 2、使用数组的过滤方法 -- filter
        catStoreList.value.splice(idx, 1)
    }
    // 单选框的功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到需要修改的那一项，然后把它的selected修改为传过来的selected
        const item = catStoreList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选框的功能
    const allCheck = (selected) => {
        catStoreList.value.forEach(item => item.selected = selected)
    }

    // 计算属性

    // 计算购物车数量总和
    const allCount = computed(() => catStoreList.value.reduce((a, c) => a + c.count, 0))
    // 计算购物车价格总和
    const allPrice = computed(() => catStoreList.value.reduce((a, c) => a + c.count * c.price, 0))
    // 是否全选
    const isAll = computed(() => catStoreList.value.every((item) => item.selected))
    // 购物车列表商品数量计算
    const selectedNum = computed(() => catStoreList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 购物车列表商品价格总和计算
    const selectedPrice = computed(() => catStoreList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
        catStoreList,
        allCount,
        allPrice,
        isAll,
        selectedNum,
        selectedPrice,
        addCat,
        delCart,
        singleCheck,
        allCheck
    }
}, {
    // 开启持久化，页面刷新不丢失数据
    persist: true
})