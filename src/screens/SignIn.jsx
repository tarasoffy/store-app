import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form/Form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {

  const auth = getAuth();

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(info => {
        console.log(info);
      })
      .catch(console.error());
  }

  return (
    <div>
      <Form btn="Войти" handle={signIn}/>
      <p>Нет аккаунта ? <Link to={'/registration'}>Зарегистрироваться</Link></p>
    </div>
  )
}

export default SignIn