import request from '@/utils/request'

export function getDetail(data) {
  return request({
    url: '/eleme/detail',
    method: 'post',
    data
  })
}
