import Vue from 'vue'

import App from './App.vue'// 引入挂载APP
import store from './store' // 引入vuex
import router from './router'// 引入vue-router

// 引入vant-ui
import Vant from 'vant'
import 'vant/lib/index.css'

import './permission' // 权限控制
import './icons' // icon

Vue.config.productionTip = false

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
