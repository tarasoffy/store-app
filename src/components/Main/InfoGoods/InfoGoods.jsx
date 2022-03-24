import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/cartSlice'
import Counter from '../../Counter'
import './Info.scss'


function InfoGoods({
    nameGoods,
    description,
    cost,
    id,
    img,
    counter,
    ...props }) {

    let dispatch = useDispatch()


    const add = () => {
        let goods = {
            id,
            img,
            nameGoods,
            cost,
            counter
        }
        dispatch(addToCart(goods))
    }


    return (
        <div className='info'>
            <h2 style={{ fontSize: '20px' }}>
                {nameGoods}
            </h2>
            <div className='descriptions'>
                <p>{description}</p>
            </div>
            <div className='price'>
                <p>${cost}</p>
            </div>
            <div className='wrapper-add'>
                <Counter id={id} counter={counter} component="infoGoods"/>
                <button onClick={add} className='add'>Add to cart</button>
            </div>
        </div>
    )
}

export default InfoGoods