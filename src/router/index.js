import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/registration',
    component: () => import('@/views/registration/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/menu',
    children: [
      {
        path: 'menu',
        component: () => import('@/views/menu/index'),
        name: 'menu',
        meta: { title: '菜单', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/order',
    children: [
      {
        path: 'order',
        component: () => import('@/views/order/index'),
        name: 'order',
        meta: { title: '订单', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/detail',
    children: [
      {
        path: '/detail/:id',
        component: () => import('@/views/detail/index'),
        name: 'detail',
        meta: { title: '商品详情', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/cart',
    children: [
      {
        path: 'cart',
        component: () => import('@/views/cart/index'),
        name: 'cart',
        meta: { title: '购物车', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/settlement',
    children: [
      {
        path: 'settlement',
        component: () => import('@/views/registration/index'),
        name: 'settlement',
        meta: { title: '结算', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
