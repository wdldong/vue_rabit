// 封装分类列表的业务逻辑
import { ref, onMounted } from 'vue'
import { useRoute,onBeforeRouteUpdate } from 'vue-router'
import { CategoryApi } from '@/apis/category'

export function useCategory() {
    const CategoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
      const res = await CategoryApi(id)
      CategoryData.value = res.result
      // console.log(res);
    }
    onMounted(() => getCategory())
    onBeforeRouteUpdate((to) => {
      // console.log(to.params.id);
      getCategory(to.params.id)
    })
    return {
        CategoryData
    }
}
