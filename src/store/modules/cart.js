import { addItem, removeItem, removeAll } from '@/api/user'

const state = {
  list: []
}

const mutations = {
  setList(list) {
    state.list = list
  }
}

const actions = {
  addItem(item) {
    return new Promise((resolve, reject) => {
      addItem(item).then(response => {
        const { data } = response
        mutations.setList(data.list)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  removeItem(item) {
    return new Promise((resolve, reject) => {
      removeItem(item).then(response => {
        const { data } = response
        mutations.setList(data.list)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  removeAll() {
    return new Promise((resolve, reject) => {
      removeAll().then(response => {
        mutations.setList([])
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
