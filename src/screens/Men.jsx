import React from 'react'
import { useSelector } from 'react-redux';
import PhotoGallery from '../components/Main/PhotoGallery/PhotoGallery';
import InfoGoods from '../components/Main/InfoGoods/InfoGoods';
import '../styles/Goods.scss'


function Man() {

  let {goods} = useSelector(goods => goods.goodsSlice)

  return (
    <div className='wrapperGoods'>
      {goods.filter(item => item.sex === 'men')
      .map(item => 
      <div className='wrapper-goods' key={item.id}>
            <PhotoGallery image={item.img} />
            <InfoGoods 
            nameGoods={item.nameGoods}
            description={item.goodsDescription}
            cost={item.cost}
            id={item.id}
            img={item.img}
            counter={item.counter}
            />
        </div>)}
    </div>
  )
}

export default Man