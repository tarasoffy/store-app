import React from 'react'
import '../components/Cart/Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
// import Counter from '../components/Cart/Counter'
import Counter from '../components/Counter'

function Cart() {

  let { cart } = useSelector(cart => cart.cartSlice)

  return (
    <div>
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
          <Counter id={item.id} counter={item.counter} component="cart"/>
          {/* <Counter count={item.counter}/> */}
        </div>)
        :
        <h3>Корзина пустая</h3>}
    </div>
    </div>
  )
}

export default Cart