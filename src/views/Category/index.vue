<script setup>
import GoodItems from '../Home/components/GoodItems.vue';
import { useBanner } from './composables/useBanner'
import { useCategory } from './composables/useCategory'

// 轮播图业务
const { bannerList } = useBanner()
// 分类列表逻辑
const { CategoryData } = useCategory()


</script>
<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ CategoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 面包屑结束 -->
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img v-img-lazy="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 轮播图结束 -->
      <!-- 分类展示 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in CategoryData.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img v-img-lazy="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in CategoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodItems v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
      <!-- 分类展示结束 -->
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>