import React, { useState } from 'react'
import './Form.scss'


const Form = ({btn, handle}) => {


    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


  return (
    <div>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email"/>

        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>

        <button onClick={() => handle(email, password)}>{btn}</button>

    </div>
  )
}

export default Form