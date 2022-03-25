import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './screens/Cart'
import Men from './screens/Men'
import Women from './screens/Women'
import About from './screens/About'
import Contact from './screens/Contacts'
import Main from './screens/Main'
import Profile from './screens/Profile';
import { store } from './store/store'
import { Provider } from 'react-redux'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

