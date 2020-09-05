import request from '@/utils/request'

export function getMenuList(data) {
  return request({
    url: '/commodity/eleme/menu/list',
    method: 'post',
    data
  })
}

export function getSortList() {
  return request({
    url: '/eleme/sort/list',
    method: 'get'
  })
}
