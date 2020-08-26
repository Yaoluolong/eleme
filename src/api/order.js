import request from '@/utils/request'
import getters from '@/store/getters'

export function getOrderList(tab) {
  return request({
    url: '/order/list',
    method: 'post',
    data: {
      userId: getters.id,
      tab
    }
  })
}
