const state = {
  cartProducts: JSON.parse(window.localStorage.getItem('cart-products')) || []
}
const getters = {
  totalCount (state) {
    return state.cartProducts.reduce((pre, current) => {
      return pre + current.count
    }, 0)
  },
  totalPrice (state) {
    return state.cartProducts.reduce((pre, current) => {
      return pre + current.total
  	}, 0).toFixed(2)
  },
  isCheckedTotalCount (state) {
    return state.cartProducts.reduce((pre, current) => {
      if (current.isChecked) {
        pre += current.count
      }
      return pre
    }, 0)
  },
  isCheckedTotalPrice (state) {
    return state.cartProducts.reduce((pre, current) => {
      if (current.isChecked) {
        pre += current.total
      }
      return pre
    }, 0).toFixed(2)
  }
}
const mutations = {
  addcartProducts (state, product) {
    const pro = state.cartProducts.find(item => item.id === product.id)
    if (pro) {
      pro.count++
      pro.total = pro.count * pro.price
      pro.isChecked = true
    } else {
      state.cartProducts.push({
        ...product,
        count: 1,
        total: product.price,
        isChecked: true
      })
    }
  },
  delcartProducts (state, id) {
    const idx = state.cartProducts.findIndex(item => item.id === id)
    idx !== -1 && state.cartProducts.splice(idx, 1)
  },
  updateProductCount (state, payload) {
    const pro = state.cartProducts.find(item => item.id === payload.productId)
    if (pro) {
      pro.count = payload.count
      pro.total = pro.price * payload.count
    }
  },
  // 单个选择
  updateProductChecked (state, payload) {
    const pro = state.cartProducts.find(item => item.id === payload.productId)
    pro && (pro.isChecked = payload.isChecked)
  },
  // 全部选择
  updateAllProductChecked (state, payload) {
    state.cartProducts.map(item => {
      item.isChecked = payload
    })
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
