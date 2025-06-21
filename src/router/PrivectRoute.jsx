import React, { useContext } from 'react'
import { authContex } from '../contex/authprovider/Authprovider'

export default function PrivectRoute({ children }) {
    const{user,loding}=useContext(authContex)
    
    
    if (loding) return <p>Loging.............</p>
    if (user) return children
}
