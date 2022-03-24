import React from 'react'
import '../components/Cart/Cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { deleteGoods } from '../store/cartSlice'

function Cart() {

  let dispatch = useDispatch()

  let { cart } = useSelector(cart => cart.cartSlice)

  const delGoods = (id) => {
    dispatch(deleteGoods(id))
  }

  return (
    <div>
      <div>
      {cart.length ? cart.map(item =>
        <div className='wrapper' key={Math.random()}>
          <img src={item.img} />
          <h2 style={{ fontSize: '20px' }}>
            {item.nameGoods}
          </h2>
          <div className='price'>
            <p>${item.cost}</p>
          </div>
          <Counter id={item.id} counter={item.counter} component="cart"/>
          <button onClick={() => delGoods(item.id)} className='delete'>Удалить</button>
        </div>)
        :
        <h3>Корзина пустая</h3>}
    </div>
    </div>
  )
}

export default Cart