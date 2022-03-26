import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './firebase'
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './screens/Cart'
import Men from './screens/Men'
import Women from './screens/Women'
import Main from './screens/Main'
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import Registration from './screens/Registration';
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
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

