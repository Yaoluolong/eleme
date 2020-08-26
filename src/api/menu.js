import request from '@/utils/request'

export function getMenuList(data) {
  return request({
    url: '/menu/list',
    method: 'post',
    data
  })
}

export function getSortList() {
  return request({
    url: '/sort/list',
    method: 'get'
  })
}
