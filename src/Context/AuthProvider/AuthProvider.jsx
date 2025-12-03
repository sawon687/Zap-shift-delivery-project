import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../FareBase/farebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const Goolgeprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(false)
    const createUser=(email,password)=>{
        setLoading(false)
         return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
        setLoading(false)
        return signInWithPopup(auth, Goolgeprovider).then(res=>{
            console.log(res)
            
        })
    }
    const signOutuser=()=>{
      return  signOut(auth)
    }
      const updateUserProfile=(userProfile)=>{
        return updateProfile(auth.currentUser,userProfile)
    }
    useEffect(()=>{
       const unSubscribe=onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser)
           setLoading(true)
       })
        return()=>{
         unSubscribe()
       }
    },[])

  
    const authInfo={
      createUser,
      signInUser,
      googleLogin,
      user,
      loading,
      signOutuser,
      updateUserProfile

    }
    return (
        <div>
            <AuthContext value={authInfo}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;