import request from '@/utils/request'

export function getCartList(data) {
  return request({
    url: '/eleme/cart/list',
    method: 'post',
    data
  })
}

export function addItem(data) {
  return request({
    url: '/eleme/cart/addItem',
    method: 'post',
    data
  })
}

export function removeItem(data) {
  return request({
    url: '/eleme/cart/removeItem',
    method: 'post',
    data
  })
}

export function removeAll() {
  return request({
    url: '/eleme/cart/removeAll',
    method: 'post'
  })
}
