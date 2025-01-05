import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosSecurePublic from "../Hooks/useAxiosSecurePublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { continueToGoogle } = useAuth();
    const axiosPublic = useAxiosSecurePublic();
    const navigate =useNavigate();

    const handleGoogleSignIn = () => {
        continueToGoogle()
        .then(result =>{
            console.log(result.user); 
            const userInfo = {
                email: result.user?.email, 
                name: result.name?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div className="px-8">
            <div>
                <div className="divider"></div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-4"></FaGoogle>
                    Continue to google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;