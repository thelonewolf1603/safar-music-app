import React from "react";
import { useState, useContext } from "react";
import { SigninContext } from "./datacontext";
import "./signin.css"
import {Link, useHistory} from 'react-router-dom';





const Login = () => {
  const [pass, setPass] = useState("");
  
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {email,setEmail,login,setLogin,isLogin} = useContext(SigninContext)
  
  async function handleLogin(e) {
  
    e.preventDefault();
    
    try {
      setError("")
      setLoading(true)
      await login(email, pass)
      setLogin(true)
      console.log(isLogin)
      history.push("/dashboard")
    } catch {
      setError("Invalid Email And Password 🙄")
    }
    
    setLoading(false)
  }

  const setPassword = (pass) => {
    setPass(pass);
  };

  

  return (
    <div className="signin">
      <div className="signin-box">
        <p className="signup-heading">SIGN IN</p>

        
        <form className="signup-form" onSubmit={handleLogin}>
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
          {error && <p style={{color: "red",marginTop:"1vh"}}>{error}</p>}
           
          <button
            className="signup-button"
            type="submit"
            disabled={loading}
          >
            Sign in
          </button>
          <p style={{textAlign:"right",marginTop: "10vh"}}>Do not have an account? <Link to="/signup">sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
