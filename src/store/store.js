import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    goodsSlice,
    cartSlice
  },
})