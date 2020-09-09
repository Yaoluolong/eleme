import request from '@/utils/request'
import store from '@/store/index'

export function getCartList() {
  return request({
    url: '/eleme/cart/list',
    method: 'post',
    data: {
      userId: store.getters.id
    }
  })
}

export function addItem() {
  return request({
    url: '/eleme/cart/addItem',
    method: 'post',
    data: {
      id: store.getters.cart,
      userId: store.getters.id
    }
  })
}

export function removeItem() {
  return request({
    url: '/eleme/cart/removeItem',
    method: 'post',
    data: {
      id: store.getters.cart,
      userId: store.getters.id
    }
  })
}

export function removeAll() {
  return request({
    url: '/eleme/cart/removeAll',
    method: 'post',
    data: {
      userId: store.getters.id
    }
  })
}
