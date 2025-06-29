import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import useAxiosPublick from '../../hooks/useAxiosPublick'
export const authContex = createContext(null)
export default function Authprovider({ children }) {
    const [user, setuser] = useState(null)
    const axiosPublick = useAxiosPublick()
    const [loding, setloding] = useState(true)
    const passwordAuth = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    //google login
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, provider)

    }


    const passwordSignOut = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, (user) => {
            setuser(user)

            if (user) {
                const userInfo = { email: user?.email }
                //get token andstore client site
                axiosPublick.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                //remove token
                localStorage.removeItem('access-token')


            }
            setloding(false)

        })
        return () => unSuscribe()
    }, [axiosPublick])

    const authInfo = {
        user,
        loding,
        passwordAuth,
        passwordLogin,
        passwordSignOut,
        userUpdateProfile,
        googleLogin,


    }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    )
}
