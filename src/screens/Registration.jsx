import React from 'react'
import Form from '../components/Form/Form'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Registration() {

  const auth = getAuth();

  const registration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(info => console.log(info))
      .catch(console.error());
  }

  return (
    <div>
      <Form btn="Зарегистрироваться" handle={registration} />
      <p>Есть аккаунт ? <Link to={'/signIn'}>Войти</Link></p>
    </div>
  )
}

export default Registration