import { FaGoogle } from 'react-icons/fa'
import Authprovider, { authContex } from '../contex/authprovider/Authprovider'
import { useContext } from 'react'
import useAxiosPublick from '../hooks/useAxiosPublick'
import { useNavigate } from 'react-router-dom'

export default function SosalLogin() {
    const { googleLogin } = useContext(authContex)
    const axiosPublick = useAxiosPublick()
    const navigate=useNavigate()
    const signInWithGoogla = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                console.log(userInfo)
                 axiosPublick.post('/users', userInfo)
                 .then(res=>{
                    console.log(res.data)
                    navigate('/')
                 })
            })
    }
    return (
        <div>
            <div className='divider'>Or</div>
            <div className='p-8'>
                <button onClick={signInWithGoogla} className='btn'>
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    )
}
