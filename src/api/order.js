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
    url: '/eleme/order/cancel',
    method: 'post',
    data: {
      userName: data.userName,
      phoneNumber: data.phoneNumber,
      address: data.address,
      count: store.getters.count,
      price: store.getters.price,
      list: store.getters.list
    }
  })
}
