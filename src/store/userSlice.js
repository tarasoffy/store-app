import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    email: null,
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addUser: (state, {payload}) => {
        state.email = payload.email
        state.token = payload.userToken
      },
        
      out: (state) => {
        state.email = null
        localStorage.removeItem('token')
      }
    
    },
  })
  
  
  export const {addUser, out} = userSlice.actions
  
  export default userSlice.reducer