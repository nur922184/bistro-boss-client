import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
        Swal.fire({
          title: "Are you sure?",
          text: "You want to log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, log out!",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            setLoding(true);
            signOut(auth)
              .then(() => {
                toast.info("Successfully Logout!", {
                  position: "top-center",
                  autoClose: 3000,
                });
              })
              .catch((error) => {
                toast.error(`Logout failed: ${error.message}`, {
                  position: "top-center",
                });
              });
          }
        });
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
    // const UpdateUserProfile = (update) => {
    //             return updateProfile(auth.currentUser, update)
    //         }

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
        // UpdateUserProfile, 
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




