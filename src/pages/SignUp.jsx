import React, { useContext } from 'react'
import { authContex } from '../contex/authprovider/Authprovider'
import { useForm } from 'react-hook-form'
import useAxiosPublick from '../hooks/useAxiosPublick'
import Swal from 'sweetalert2'
import SosalLogin from '../compoment/SosalLogin'

export default function SignUp() {
    const { passwordAuth, userUpdateProfile } = useContext(authContex)
    const axiosPublick = useAxiosPublick()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    console.log(errors)
    const onSubmit = (data) => {
        console.log(data)
        passwordAuth(data.email, data.password)
            .then(res => {
                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublick.post('/users', userInfo)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    Swal.fire({
                                        title: "Sign Up successFull!",
                                        icon: "success",
                                        draggable: true
                                    });
                                    reset()
                                }
                            })

                    })
            })

    }

    // const handleSingup = (e) => {
    //     e.preventDefault()
    //     const from = e.target
    //     const name = from.name.value
    //     const email = from.email.value
    //     const password = from.password.value
    //     console.log(name, email, password)
    // }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>Photo URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />

                            {errors.password && <span className='text-red-500'>Password is required</span>}
                            {errors.password?.type == 'minLength' && <span className='text-red-500'>Password is under 6 character</span>}
                            {errors.password?.type == 'maxLength' && <span className='text-red-500'>Password is over 20 character</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Sign Up' className="btn btn-primary"></input>
                        </div>
                    </form>
                    <SosalLogin></SosalLogin>
                </div>
            </div>
        </div>
    )
}
