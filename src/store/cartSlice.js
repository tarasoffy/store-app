import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
        state.cart.push(actions.payload)
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
    }
  },
})



export const { addToCart, counterIncrementCart, counterDecrementCart } = cartSlice.actions

export default cartSlice.reducer