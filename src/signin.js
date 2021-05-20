import React from "react";
import { useState, useContext } from "react";
import { SigninContext } from "./datacontext";
import "./signin.css"
import {useHistory} from 'react-router-dom';





const Signin = () => {
  const [pass, setPass] = useState("");
  const [confpass, setConfpass] = useState("");
  const setConfpassword = (pass) => {
    setConfpass(pass);
  };
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {email,signup,setEmail,currentUser, logout} = useContext(SigninContext)
  
  async function handleSubmit(e) {
  
    e.preventDefault();
    
    try {
      setError("")
      setLoading(true)
      await signup(email, pass)
      await logout(email,pass)
      history.push("/login")
    } catch {
      setError("Invalid email or email already exists...Try again Later😅")
    }
    setLoading(false)
  }

  const setPassword = (pass) => {
    setPass(pass);
  };

  

  return (
    <div className="signin">
      <div className="signin-box">
        <p className="signup-heading">SIGN UP</p>

        
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            className="signup-email"
            type="email"
            required
            placeholder={email !== "" ? email : "Email"}
            value = {email !== "" ? email : ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="signup-password"
            type="password"
            placeholder="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
              
            }}
          />
          <input
            className="signup-password"
            type="password"
            required
            min
            placeholder="Confirm password"
            onChange={(e) => {
              setConfpassword(e.target.value);
              
                  
            }}
          />
          <p
            style={
              
              pass === "" || confpass === ""
                ? { display: "none" }
                : { display: "block" }
            }
          >
            {" "}
            {pass === confpass ? "Passwords match" : "Passwords do not match😅"}
          </p>
          <p>{error}</p>
           
          <button
            className="signup-button"
            type="submit"
            disabled={(pass !== confpass) && loading}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
