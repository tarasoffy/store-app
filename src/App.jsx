import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store/cartSlice';
import Popap from './components/Popap/Popap';


function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    let localStorGoods = JSON.parse(localStorage.getItem('goodsCart'))
    if(localStorGoods) {
      localStorGoods.map(item => {
        dispatch(addToCart(item))
      })
    } 
    return
}, [])

  let {visiblePopap} = useSelector(visible => visible.goodsSlice)

  console.log(visiblePopap);


  return (
    <div className="App">
     <Header/>
     {visiblePopap && <Popap />}
     <Outlet />
    </div>
  );
}

export default App;
