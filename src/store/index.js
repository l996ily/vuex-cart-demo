import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import carts from './modules/carts'
Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为{type, payload}
    if (mutation.type.startsWith('carts/')) {
      window.localStorage.setItem('cart-products', JSON.stringify(state.carts.cartProducts))
    }
  })
}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    carts
  },
  plugins: [myPlugin]
})
