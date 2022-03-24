import React from 'react'
import { useDispatch } from 'react-redux'
import { counterIncrementCart, counterDecrementCart } from '../../store/cartSlice';
import { counterDecrement, counterIncrement } from '../../store/goodsSlice'
import './Counter.scss'

function Counter({ id, counter, component }) {

    let dispatch = useDispatch()

    const counterDec = () => {
        switch (component) {
            case "infoGoods":
                dispatch(counterDecrement(id))
                break;
            case "cart":
                dispatch(counterDecrementCart(id))
                break;
            default:
                alert('Что то пошло не так')
        }
    }

    const counterInc = () => {
        switch (component) {
            case "infoGoods":
                dispatch(counterIncrement(id, counter))
                break;
            case "cart":
                dispatch(counterIncrementCart(id))
                break;
            default:
                alert('Что то пошло не так')
        }
    }

    return (
        <div className='counter'>
            <button onClick={counterDec}>-</button>
            {counter}
            <button onClick={counterInc}>+</button>
        </div>
    )
}

export default Counter