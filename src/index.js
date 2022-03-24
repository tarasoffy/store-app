import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './screens/Cart'
import Man from './screens/Men'
import Women from './screens/Women'
import About from './screens/About'
import Contact from './screens/Contacts'
import HomePage from './screens/Main'
import { store } from './store/store'
import { Provider } from 'react-redux'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="men" element={<Man />} />
          <Route path="women" element={<Women />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

