import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    // const Porvider = new GoogleAuthProvider();
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
    // const continueToGoogle = () => {
    //     setLoding(true); 
    //     signInWithPopup(auth, Porvider)
    //         .then((result) => {
    //             const user = result.user;
    //             setUser(user); 
    //             navigate("/"); 
    //             toast.success("Successfully logged in with Google!", {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //             });
    //         })
    // };

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
            setLoding(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const AutInfo = {
        user,
        // setUser,
        crateNewUser,
        Logout,
        SignIn,
        // continueToGoogle, 
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




