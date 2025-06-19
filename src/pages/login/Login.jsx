import { useContext, useState } from 'react';
import { useEffect, useRef } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContex } from '../../contex/authprovider/Authprovider';
export default function Login() {
    const {passwordLogin}=useContext(authContex)
    const [disable, setdisable]=useState(true)
    const captchaRef = useRef()
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        passwordLogin(email,password)
        console.log({ email, password })
    }

    const validateCaptchar = () => {
        const Captcha_value = captchaRef.current.value;
        console.log(Captcha_value)
        if(validateCaptcha(Captcha_value)){
            setdisable(false)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="type this captcha" className="input input-bordered" required />
                            <button onClick={validateCaptchar} className='btn btn-outline mt-2 btn-xs'>Validate</button>

                        </div>
                        <div className="form-control mt-6">
                           <input type='submit'disabled={disable} className="btn btn-primary "></input>
                            {/* <button disabled={disable} className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
