import httpInstance from "@/utils/http";
// 加入购物车接口
export const innerCartApi = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}
// 获取购物车列表接口
export const getCartListApi = () => {
    return httpInstance({
        url: '/member/cart',
        method: 'GET',
    })
}
