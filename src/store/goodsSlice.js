import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goods: [
    {
      id: 1,
      img: 'https://www.adidas.net.ua/image/cache/catalog/img_products/12_2019/FV3284_04-700x700.jpg',
      nameGoods: 'Adidas 1000',
      goodsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cost: 125,
      sex: 'men'
    },
    {
      id: 2,
      img: 'https://intertop.ua/load/CF218/412x550/2.jpg',
      nameGoods: 'Nike ligth',
      goodsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cost: 130,
      sex: 'women'
    },
  ]
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {

  },
})


export const { } = goodsSlice.actions

export default goodsSlice.reducer
