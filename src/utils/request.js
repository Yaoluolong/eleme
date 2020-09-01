import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      // Message({
      //   message: res.msg || '连接错误',
      //   type: 'success',
      //   duration: 5 * 1000
      // })
      alert('连接错误')
      if (res.code === -2) {
        // MessageBox.confirm('token已失效，是否重新登录', '确认注销', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
        alert('token失效')
      }
      return Promise.reject(new Error(res.msg || '连接错误'))
    } else {
      return res
    }
  },
  error => {
    console.log({ error })
    const { msg, code } = error.response.data
    if (code === -2) {
      // MessageBox.confirm('token已失效，是否重新登录', '确认注销', {
      //   confirmButtonText: '重新登录',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   store.dispatch('user/resetToken').then(() => {
      //     location.reload()
      //   })
      // })
      alert(msg || 'token失效')
    } else {
      // Message({
      //   message: msg || '连接错误',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      alert(msg || 'token失效')
    }
    return Promise.reject()
  }
)

export default service

