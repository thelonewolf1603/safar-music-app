import { createContext } from "react";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase";


export const SigninContext = createContext();


export const SigninProvider = (props) => {


  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isLogin,setLogin] = useState(false);

useEffect(() => {
  
  const unsubscribe = auth.onAuthStateChanged(user => {setCurrentUser(user);setLoading(false);setLogin(false)})
  return unsubscribe;
}, [])



  function signup(email, password){
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password){
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout(){
    return auth.signOut();
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
    email,
    setEmail,
    isLogin,
    setLogin
  }

  return (
    <SigninContext.Provider value={value}>
      {!loading && props.children}
    </SigninContext.Provider>
  );
};
