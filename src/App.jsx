import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';


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


  return (
    <div className="App">
     <Header/>
     <Outlet />
    </div>
  );
}

export default App;
