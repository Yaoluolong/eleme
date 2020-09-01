import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/eleme/login',
    method: 'post',
    data
  })
}

