<script setup>
import { SubCategoryApi,CategoryListApi } from '@/apis/category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import GoodItems from '../Home/components/GoodItems.vue';

// 面包屑导航二级分类
const subCategoryData = ref({})
const route = useRoute()
const getSubCategory = async () => {
  const res = await SubCategoryApi(route.params.id)
  // console.log(res);
  subCategoryData.value = res.result
}

// 二级商品列表
const CategoryList = ref()
const reqData = ref({
  categoryId: route.params.id,
  page:1,
  pageSize:20,
  sortField: 'publishTime'
})
const getCategoryList = async () => {
  const res = await CategoryListApi(reqData.value)
  // console.log(res);
  CategoryList.value = res.result.items

}

// 筛选分类功能实现
const changeReqdata = () => {
  console.log(reqData.value.sortField);
  getCategoryList()
}
const disabled = ref(false)
// 配置无限滚动
const load = async () => {
  console.log('页面滚动了');
  // 滚动的请求
  reqData.value.page++
  const res = await CategoryListApi(reqData.value)
  // 拼接数组的方法：1、es5的concat方法；2、展开运算符
  CategoryList.value = [...CategoryList.value,...res.result.items]
  // es5的concat方法
  // CategoryList.value = CategoryList.value.concat(res.result.items)
  if(res.result.items.length === 0) {
    disabled.value = true
  }
}

onMounted(() => {
  getSubCategory(),
  getCategoryList()
})

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategoryData.parentId}` }">{{ subCategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="changeReqdata">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodItems v-for="goods in CategoryList" :key="goods.id" :good="goods" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>