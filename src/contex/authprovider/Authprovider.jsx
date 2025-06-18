import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
export const authContex = createContext(null)
export default function Authprovider({ children }) {
    const [user, setuser] = useState(null)
    console.log(user)
    const [loding, setloding] = useState(null)
    const passwordAuth = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setuser(user)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setuser(user)
            else console.log('User Sign Out')
        })
    }, [])

    const authInfo = {
        user,
        loding,
        passwordAuth,
    }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    )
}
