import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
export const authContex = createContext(null)
export default function Authprovider({ children }) {
    const [user, setuser] = useState(null)
    console.log(user)
    const [loding, setloding] = useState(true)
    const passwordAuth = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)

            }

            else{
              setuser(null)  
            }
            setloding(false)
            
        })
    }, [])

    const authInfo = {
        user,
        loding,
        passwordAuth,
        passwordLogin,
        passwordSignOut,


    }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    )
}
