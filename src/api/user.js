import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/eleme/login',
    method: 'post',
    data
  })
}

export function registration(data) {
  return request({
    url: '/eleme/registration',
    method: 'post',
    data
  })
}

