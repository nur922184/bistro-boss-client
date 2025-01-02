import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { crateNewUser, UpdateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        crateNewUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                UpdateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        console.log('user profile info update');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your profile update has been success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                    })
                    .catch(error => console.log(error))
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss |Sing Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up  now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name && <p className="text-red-500">Name is require  </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo url" {...register("PhotoURL", { required: true })} className="input input-bordered" />
                                {errors.PhotoURL && <p className="text-red-500">Photo Url is require  </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-red-500">Email is require  </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password && <p className="text-red-500">password is require  </p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />

                            </div>
                        </form>
                        <p><small>Already have an account<Link to="/login"></Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;