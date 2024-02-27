<script setup>
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeList from '@/views/Home/components/HomeList.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomePanor from './components/HomePanor.vue'
</script>
<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeList />
    <HomePanor title="新鲜好物" subTitle="新鲜好物 好多商品">
        <div>主题内容</div>
    </HomePanor>
    <HomePanor title="人气新品" subTitle="新鲜好物 好多商品">
        <div>主题内容</div>
    </HomePanor>
</template>