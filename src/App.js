import "./styles.css";
import Carousel from "./carousel";
import NavBar from "./navbar";
import { useEffect } from "react";
import Signin from "./signin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './login';
import {SigninProvider} from './datacontext'
import Dashboard from "./dashboard"
import PrivateRoute from "./PrivateRoute"

export default function App() {
  
useEffect(()=>{console.log("hello")},[])
 

  return (
    <Router>
      <SigninProvider>
      <div
        className="back-img"
        style={
          {
                background:
                  'url("https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/8ed3a98a-e2c2-488d-9583-93634199485d/IN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg")'
              }
        }
      >
        <div className="blur">
          
          <NavBar />

          <Route path="/" component={Carousel} exact />
          <Route path="/signup" component={Signin} exact />
          <Route path="/login" component={Login} exact/>
          <PrivateRoute path="/dashboard" component={Dashboard} exact/>
        </div>
      </div>
      </SigninProvider>
    </Router>
  );
}
