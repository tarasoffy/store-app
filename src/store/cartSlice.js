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
    }
  },
})



export const { addToCart } = cartSlice.actions

export default cartSlice.reducer