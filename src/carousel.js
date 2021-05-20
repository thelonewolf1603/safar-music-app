import React, { useContext } from "react";
import "./carousel.css";
import {  SigninContext } from "./datacontext";
import { withRouter } from "react-router-dom";

const Carousel = (props) => {

  


  const {email,setEmail} = useContext(SigninContext);
  
  
  const updateEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const updateSignin = (e) => {
    e.preventDefault();
    submitForm(e);
   
  };

  const submitForm =  (e) => {
    e.preventDefault();
    props.history.push('/signup'); // <--- The page you want to redirect your user to.
  }

  const caro = (
    <div
      className="carousel"
    
    >
      <div className="get-started">
        <p className="unlimited">
          Unlimited songs, tunes <br />
          playlists and more.
        </p>
        <p className="watch">Listen anywhere. Cancel anytime.</p>
        <p className="watch">
          Ready to listen? Enter your email to create or start your safar.
        </p>

        <div className="email-enter">
         
            <form
              className="get-started-form"
              onSubmit={updateSignin}
              style={{
                justifyContent: "center",
                display: "flex",
                height: "20vh",
                width: "100%"
              }}
            >
              <div>
                <input
                  className="get-started-email"
                  type="email"
                  placeholder={email !== "" ? email : "Email Address"}
            value = {email !== "" ? email : ""}
          
                  onChange={updateEmail}
                />
              </div>
              <div>
                <button type="submit" className="carousel-button">
                  Get Started <span>{">"}</span>{" "}
                </button>
              </div>
      
            </form>
           
          
        </div>
      </div>
    </div>
  );

  return caro;
};

export default withRouter(Carousel);
