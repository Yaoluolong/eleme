import request from '@/utils/request'
import getters from '@/store/getters'

export function getOrderList(tab) {
  return request({
    url: '/eleme/order/list',
    method: 'post',
    data: {
      userId: getters.id,
      tab
    }
  })
}

export function cancelOrder(reason) {
  return request({
    url: '/eleme/order/cancel',
    method: 'post',
    data: {
      userId: getters.id,
      reason
    }
  })
}
