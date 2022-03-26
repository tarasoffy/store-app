import React from 'react'
import Form from '../components/Form/Form'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';




function Registration() {

  let {email} = useSelector(email => email.userSlice)


  useAuth(email)


  let dispatch = useDispatch()

  const auth = getAuth();

  const registration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(info => {
        let infoUser= {
          userToken: info.user.accessToken,
          email
        }
        dispatch(addUser(infoUser))
        localStorage.setItem('token', info.user.accessToken)
      })
      .catch(error => {
        if(error.code === 'auth/email-already-in-use') {
          alert('Пользователь с таким мылом уже есть')
        }
      });
  }

  return (
    <div>
      <Form btn="Зарегистрироваться" handle={registration} />
      <p>Есть аккаунт ? <Link to={'/signIn'}>Войти</Link></p>
    </div>
  )
}

export default Registration