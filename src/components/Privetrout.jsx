import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'


const Privetrout = ({children}) => {
// const [isAuth,setAuth]=useState(true)
let isAuth=useSelector((store)=>store.authReducer.token)

const location=useLocation()
if(!isAuth){
  return <Navigate state={location.pathname} to={'/login'}/>
}

  return (
  <>
   {children}
   </>
   )
}

export default Privetrout
