import httpInstance from "@/utils/http";
// 分类接口
export function CategoryApi(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}

// 二级分类接口
export function SubCategoryApi(id) {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}