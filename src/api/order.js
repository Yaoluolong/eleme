import request from '@/utils/request'
import store from '@/store/index'

export function getOrderList(status) {
  console.log(store)
  return request({
    url: '/ident/eleme/list',
    method: 'post',
    data: {
      userId: store.getters.id,
      status
    }
  })
}

export function cancelOrder(reason) {
  return request({
    url: '/eleme/order/cancel',
    method: 'post',
    data: {
      userId: store.getters.id,
      reason
    }
  })
}
