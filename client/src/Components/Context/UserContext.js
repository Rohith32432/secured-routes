import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const context=createContext()
function UserContext({children}) {
    
    const [user,setuser]=useState({})
    const navigate=useNavigate()
    useEffect(()=>{
        setuser(JSON.parse(localStorage.getItem('User')))
        if(localStorage.getItem('Role')=='User') {
            navigate('/')
        }
    },[])

  return (
   <context.Provider value={user}>
    {children}
   </context.Provider>
  )
}
export function useAuth(){
    return useContext(context)
}
export default UserContext