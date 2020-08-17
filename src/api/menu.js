import request from '@/utils/request'

export function addItem(data) {
  return request({
    url: '/cart/addItem',
    method: 'post',
    data
  })
}

export function removeItem(data) {
  return request({
    url: '/cart/removeItem',
    method: 'post',
    data
  })
}

export function removeAll() {
  return request({
    url: '/cart/removeAll',
    method: 'post'
  })
}
