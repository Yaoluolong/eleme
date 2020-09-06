import request from '@/utils/request'
import getters from '@/store/getters'

export function getOrderList(status) {
  return request({
    url: '/eleme/order/list',
    method: 'post',
    data: {
      userId: getters.id,
      status
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
