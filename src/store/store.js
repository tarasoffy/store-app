import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from './goodsSlice'
import cartSlice from './cartSlice'
import userSlice from './userSlice'
import popapSlice from './popapSlice'

export const store = configureStore({
  reducer: {
    goodsSlice,
    cartSlice,
    userSlice,
    popapSlice
  },
})