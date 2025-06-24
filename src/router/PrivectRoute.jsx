import React, { useContext } from 'react'
import { authContex } from '../contex/authprovider/Authprovider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivectRoute({ children }) {
    const{user,loding}=useContext(authContex)
    const location = useLocation();
    
    
    if (loding) return <p>Loging.............</p>
    if (user) return children
    if (!user) return <Navigate to='/login' state={{from:location}}></Navigate>
}
