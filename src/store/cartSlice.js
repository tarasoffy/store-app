import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      let findGoods = state.cart.find(item => item.id === payload.id)
      if(findGoods) {
        let goods = state.cart.find(item => item.id === payload.id);
        goods.counter += payload.counter
      } else {
        state.cart.push(payload)
      }
    },

    counterDecrementCart: (state, {payload}) => {
      let goods = state.cart.find(item => item.id === payload);
      if (goods.counter !== 1) {
        goods.counter -= 1
      } else goods.counter = 1
    },

    counterIncrementCart: (state, {payload}) => {
      let goods = state.cart.find(item => item.id === payload);
      goods.counter +=1
    },

    deleteGoods: (state, {payload}) => {
      let goods = state.cart.filter(item => item.id !== payload)
      state.cart = goods
    }
  },
})



export const { addToCart, counterIncrementCart, counterDecrementCart, deleteGoods } = cartSlice.actions

export default cartSlice.reducer