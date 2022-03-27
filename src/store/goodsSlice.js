import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goods: [
    {
      id: 1,
      img: 'https://www.adidas.net.ua/image/cache/catalog/img_products/12_2019/FV3284_04-700x700.jpg',
      gallery: [
        'https://www.adidas.net.ua/image/cache/catalog/img_products/12_2019/FV3284_04-700x700.jpg',
        'https://cdn0.riastatic.com/photosnew/general/adv_photos/clothes-krossovky-adidas-superstar-80s-white-adydas-superstary-belogo-tsveta-muz__241000935m.jpg',
        'https://intertop.ua/load/CN196/1600x2133/2.jpg',
        'https://images.prom.ua/3663379554_w640_h640_zhenskie-krossovki-v.jpg',
      ],
      nameGoods: 'Adidas 1000',
      goodsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cost: 125,
      sex: 'men',
      counter: 1,
    },
    {
      id: 2,
      img: 'https://intertop.ua/load/CF218/412x550/2.jpg',
      gallery: [
        'https://intertop.ua/load/CF218/412x550/2.jpg',
        'https://strongler.com.ua/image/cache/catalog/Product%207/BQ9647_601_a-1000x1000.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUPHb1q0sjO4pd7Epq919Rabco-Wlkvr17EChyTwmlrJ_IgAUi5jqyQNXTgxsUgcl9BI&usqp=CAU',
        'https://www.lookbuck.com/system/products/items/images/039/572/961/small/22450048-1-summitwhite?1626411745',
      ],
      nameGoods: 'Nike ligth',
      goodsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cost: 130,
      sex: 'women',
      counter: 1,
    },
  ],
  visiblePopap: false,
  galleryPopap: [],
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    counterDecrement: (state, { payload }) => {
      let goods = state.goods.find(item => item.id === payload);
      if (goods.counter !== 1) {
        goods.counter -= 1
      } else goods.counter = 1
    },

    counterIncrement: (state, {payload}) => {
      let goods = state.goods.find(item => item.id === payload);
      goods.counter +=1
    },

    show: (state, {payload}) => {
      state.visiblePopap = true
      let goods = state.goods.find(item => item.id === payload);
      state.galleryPopap = goods.gallery
    },

    hide: (state) => {
      state.visiblePopap = false
      state.galleryPopap = []
    },

    nextPhoto: (state) => {
      let remove = state.galleryPopap.splice(0,1)
      state.galleryPopap.push(remove[0])
    },

    prevPhoto: (state) => {
        let remove = state.galleryPopap.splice(-1, 1)
        state.galleryPopap.splice(0,0,remove[0])
    }
  },
})


export const { counterDecrement, counterIncrement, show, hide, nextPhoto, prevPhoto } = goodsSlice.actions

export default goodsSlice.reducer
