import request from '@/utils/request'

export function getDetail(data) {
  return request({
    url: '/detail',
    method: 'get',
    data
  })
}
