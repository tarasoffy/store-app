import { out } from '../store/userSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Profile() {

  let navigate = useNavigate();

  let dispatch = useDispatch()

  let {email} = useSelector(email => email.userSlice)

  useEffect(() => {
    if(email) {
      navigate('/profile')
    } else { navigate('/signIn') }
  },[email])

  const signOutFn = () => {
    dispatch(out())
  }


  return (
    <div>
      <h3>Привет пользователь {email}</h3>
      <button onClick={signOutFn}>Выйти</button>
    </div>
  )
}

export default Profile