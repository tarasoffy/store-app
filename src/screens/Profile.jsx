import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Profile() {

  let navigate = useNavigate();

  useEffect(() => {
    navigate('/signIn')
  },[])

  return (
    <div>Profile</div>
  )
}

export default Profile