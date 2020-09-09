import { getCartList, addItem, removeItem, removeAll } from '@/api/cart'

const state = {
  list: [],
  count: 0,
  price: 0.00,
  id: 0
}

const mutations = {
  setList(state, list) {
    state.list = list
  },
  setPrice(state, price) {
    state.price = price
  },
  setCount(state, count) {
    state.count = count
  },
  setId(state, id) {
    state.id = id
  }
}

const actions = {
  getCart({ commit }, item) {
    return new Promise((resolve, reject) => {
      getCartList(item)
        .then(response => {
          const { data } = response
          commit('setList', data.list)
          commit('setPrice', data.price)
          commit('setCount', data.count)
          commit('setId', data.id)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 添加商品进购物车
  addItem({ commit }) {
    return new Promise((resolve, reject) => {
      addItem(state.id)
        .then(response => {
          const { data } = response
          commit('setList', data.list)
          commit('setPrice', data.price)
          commit('setCount', data.count)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 从购物车移除商品
  removeItem({ commit }) {
    return new Promise((resolve, reject) => {
      removeItem(state.id).then(response => {
        const { data } = response
        commit('setList', data.list)
        commit('setPrice', data.price)
        commit('setCount', data.count)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 从购物车移除全部商品
  removeAll({ commit }) {
    return new Promise((resolve, reject) => {
      removeAll().then(response => {
        commit('setList', [])
        commit('setPrice', 0.00)
        commit('setCount', 0)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
