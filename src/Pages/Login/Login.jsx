import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const captchaRaf = useRef(null)
    const [disabled, setDisabled] =useState(true);
    const {SignIn} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        SignIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRaf.current.value
        console.log(user_captcha_value)


        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
            alert('Captcha Does Not Match');
        }
    }

    return (
     <>
     <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text"
                                name="captcha"
                                ref={captchaRaf}
                                placeholder="type the Captcha above" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className="btn mt-2 btn-outline btn-xs">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p><small>New Here? <Link to="/signup"> create an account</Link></small></p>
                </div>
            </div>
        </div>
     </>
    );
}
export default Login;