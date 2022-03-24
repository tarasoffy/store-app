import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import './Info.scss'


function InfoGoods({
    nameGoods, 
    description, 
    cost, 
    id,
    img, 
    ...props}) {

    let dispatch = useDispatch()

    let [counter, setCounter] = useState(1)

    const add = () => {
        let goods = {
            id,
            img,
            nameGoods,
            cost,
            howMuch: counter
        }
        dispatch(addToCart(goods))
    }

    const counterDecrement = () => {
        if(counter !== 1) {
            setCounter(prev => prev - 1)
        } else setCounter(1)
        
    }

    const counterIncrement = () => {
        setCounter(prev => prev + 1)
    }


  return (
    <div className='info'>
            <h2 style={{fontSize: '20px'}}>
                {nameGoods}
            </h2>
            <div className='descriptions'>
               <p>{description}</p>
            </div>
            <div className='price'>
                <p>${cost}</p>
            </div>
            <div className='wrapper-add'>
                <div className='counter'>
                    <button onClick={counterDecrement}>-</button>
                    {counter}
                    <button onClick={counterIncrement}>+</button>
                </div>
                <button onClick={add} className='add'>Add to cart</button>
            </div>
        </div>
  )
}

export default InfoGoods