import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { authContex } from '../../contex/authprovider/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import SosalLogin from '../../compoment/SosalLogin';
export default function Login() {

    const { passwordLogin } = useContext(authContex)
    const navigate = useNavigate()
    const location = useLocation()
    const [disable, setdisable] = useState(true)
    const from = location?.state?.from?.pathname || '/'   
    // useEffect(() => {
    //     loadCaptchaEnginge(6)
    // }, [])
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log({ email, password })
        passwordLogin(email, password)
            .then(result => {
                const user = result?.user?.email
                if (user) {
                    Swal.fire({
                        title: "login success full",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
    `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
    `
                        }
                    });

                    navigate(from,{ replace: true })
                }
                console.log('login success full')
            })
            .catch(error => {
                console.error("Login failed:", error.message);
            });

    }

    const validateCaptchar = (e) => {
        const Captcha_value = e.target.value;
        console.log(Captcha_value)
        if (validateCaptcha(Captcha_value)) {
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


                        {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={validateCaptchar} name='captcha' placeholder="type this captcha" className="input input-bordered" required />

                        </div> */}
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary "></input>
                            {/* <button disabled={disable} className="btn btn-primary">Login</button> */}
                        </div>
                    </form>
                     <SosalLogin></SosalLogin>
                   
                </div>
            </div>
        </div>
    )
}
