import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form/Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/userSlice';

function SignIn() {

  let {email} = useSelector(email => email.userSlice)

  let dispatch = useDispatch()

  useAuth(email)

  const auth = getAuth();

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(info => {
      
      let infoUser= {
        userToken: info.user.accessToken,
        email
      }
      dispatch(addUser(infoUser))
      localStorage.setItem('token', info.user.accessToken)
    })
      .catch(error => {
        if(error.code = 'auth/wrong-password') {
          alert('Неверный пароль или email')
        }
      });
  }

  return (
    <div>
      <Form btn="Войти" handle={signIn}/>
      <p>Нет аккаунта ? <Link to={'/registration'}>Зарегистрироваться</Link></p>
    </div>
  )
}

export default SignIn