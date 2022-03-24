import PhotoGallery from '../components/Main/PhotoGallery/PhotoGallery'
import InfoGoods from '../components/Main/InfoGoods/InfoGoods'
import { useSelector } from 'react-redux'
import '../components/Main/Main.scss'

import React from 'react'

function Main() {

  let {goods} = useSelector(goods => goods.goodsSlice)
  
  // console.log(goods);

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
            counter={item.counter}
            />
        </div>)
        }
    </main>
  )
}

export default Main