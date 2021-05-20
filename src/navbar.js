import React, { useState, useContext } from "react";

import image from "./safar.png";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";
import { SigninContext } from "./datacontext";

function NavBar(props) {
  let navbar = <></>;

  const { currentUser, logout, isLogin, setLogin } = useContext(SigninContext);
  const [isLoggedin, setLoggedin] = useState(isLogin);
  const history = useHistory();

  const handleredirect = (e) => {
    e.preventDefault();
    setLogin(false);
    history.push("/login");
  };

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout();
      setLogin(false);
      setLoggedin(isLogin);
      history.push("/login");
    } catch {
      console.log("error logging out");
    }
  }

  navbar = (
    <div
      className="topnav"
      style={isLogin ? { background: "black" } : { display: "flex" }}
    >
      <div className="logo">
        <img src={image} alt="" />
      </div>
      <div className="dropdown">
        <select>
          <option value="1">English</option>
          <option value="2">Hindi</option>
        </select>

        <div style={{ display: isLogin ? "none" : "block" }}>
          <button className="signin-button" onClick={handleredirect}>
            Sign in
          </button>
        </div>

        <div style={{ display: !isLogin ? "none" : "block" }}>
          <button className="signin-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
      <div className="username">
        {currentUser && <p>{currentUser.email.split("@")[0]}</p>}
      </div>
    </div>
  );

  return navbar;
}

export default NavBar;
