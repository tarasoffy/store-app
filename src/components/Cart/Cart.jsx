import React, { useState } from 'react'
import './Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import Counter from './Counter'

function Cart() {

  let { cart } = useSelector(cart => cart.cartSlice)





  

  return (
    <div>
      {cart.length ? cart.map(item =>
        <div className='wrapper' key={item.id}>
          <img src={item.img} />
          <h2 style={{ fontSize: '20px' }}>
            {item.nameGoods}
          </h2>
          <div className='price'>
            <p>${item.cost}</p>
          </div>
          <Counter count={item.howMuch}/>
        </div>)
        :
        <h3>Корзина пустая</h3>}
    </div>
  )
}

export default Cart