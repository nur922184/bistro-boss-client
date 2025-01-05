import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosSecurePublic from "../Hooks/useAxiosSecurePublic";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const Porvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosSecurePublic();
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)
    // console.log(loading, user)
    const crateNewUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // const ForgotPassword  = (email) => {
    //     return sendPasswordResetEmail(auth, email)
    // };
    const Logout = () => {
        setLoding(true);
        return signOut(auth)

    };
    const continueToGoogle = () => {
        setLoding(true); 
       return signInWithPopup(auth, Porvider)
    };

    const SignIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UpdateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                //get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                //To do :remove token
                localStorage.removeItem('access-token')
            }
            setLoding(false)
        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const AutInfo = {
        user,
        // setUser,
        crateNewUser,
        Logout,
        SignIn,
        continueToGoogle, 
        loading,
        UpdateUserProfile, 
        // ForgotPassword
    }

    return (
        <AuthContext.Provider value={AutInfo} >
            {children}
            {/* <ToastContainer></ToastContainer> */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




