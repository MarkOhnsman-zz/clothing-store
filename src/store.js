import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: '//localhost:3000/api/clothes/',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    clothes: []
  },
  mutations: {
    setClothes(state, clothes) {
      state.clothes = clothes
    }
  },
  actions: {
    addItem({ dispatch, commit }, item) {
      api.post('', item)
        .then(res => {
          dispatch('getClothes')
        })
    },
    buy({ dispatch, commit }, item) {
      api.put(item._id, { quantity: item.quantity -= 1 })
        .then(res => {
          dispatch('getClothes')
          router.push({ name: 'about', params: { itemName: item.name } })
        })
    },
    getClothes({ commit, dispatch }) {
      api.get()
        .then(res => {
          commit('setClothes', res.data)
        })
    }
  }
})
