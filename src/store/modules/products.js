import axios from 'axios'
const state = {
  products: []
}
const mutations = {
  setAllProducts (state, products) {
    state.products = products
  }
}
const actions = {
  async getAllProducts (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    context.commit('setAllProducts', data)
  }
}
const modules = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules
}
