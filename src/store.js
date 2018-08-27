import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{
      name: 'Jake\'s T-shirt',
      img: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Black-T-Shirt-PNG-Transparent-Image-500x491.png',
      stock: 10
    }, {
      name: 'Zach\'s Hat',
      img: 'https://banner2.kisspng.com/20171216/fbc/baseball-cap-png-image-5a34e05ab38920.7286263515134147467354.jpg',
      stock: 3
    }, {
      name: 'Darryl\'s Thermos',
      img: 'https://i.pinimg.com/originals/43/e1/18/43e118ce3527dfdbb30c74dfca033020.jpg',
      stock: 1
    }]
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    },
    buy(state, item) {

    }
  },
  actions: {
    addItem({ dispatch, commit }, item) {
      commit('addItem', item)
    },
    buy({ dispatch, commit }, item) {
      commit('buy', item)
    }
  }
})
