import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function useAuth(email) {

    let navigate = useNavigate()

    useEffect(() => {
        if(email) {
          return navigate('/profile')
        } 
      },[email])
}

export {useAuth}