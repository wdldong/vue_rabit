import httpInstance from "@/utils/http";

export function CategoryApi(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}