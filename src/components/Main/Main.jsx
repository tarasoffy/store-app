import React from 'react'
import { useSelector } from 'react-redux'
import './Main.scss'
import PhotoGallery from './PhotoGallery'
import InfoGoods from './InfoGoods'


function Main() {

    let {goods} = useSelector(goods => goods.goodsSlice)    

  return (
    <main className='main'>
        {goods.map(item => <div className='wrapper-goods' key={item.id}>
            <PhotoGallery image={item.img} />
            <InfoGoods 
            nameGoods={item.nameGoods}
            description={item.goodsDescription}
            cost={item.cost}
            id={item.id}
            img={item.img}
            />
        </div>)}
    </main>
  )
}

export default Main