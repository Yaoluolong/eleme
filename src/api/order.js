import request from '@/utils/request'
import store from '@/store/index'

export function getOrderList(status) {
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

export function settleOrder(data) {
  return request({
    url: '/ident/eleme/settle',
    method: 'post',
    data: {
      userId: store.getters.id,
      userName: data.userName,
      address: data.address,
      count: store.getters.count,
      price: store.getters.price,
      list: store.getters.list
    }
  })
}
