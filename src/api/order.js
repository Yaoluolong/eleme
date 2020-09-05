import request from '@/utils/request'
import getters from '@/store/getters'

export function getOrderList(tab) {
  return request({
    url: 'commodity/eleme/menu/ list',
    method: 'post',
    data: {
      userId: getters.id,
      tab
    }
  })
}

export function cancelOrder(reason) {
  return request({
    url: '/order/cancel',
    method: 'post',
    data: {
      userId: getters.id,
      reason
    }
  })
}
