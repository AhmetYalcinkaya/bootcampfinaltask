import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginwrapper">
        <h1 className="logtitle">SING IN</h1>
        <form className="loginform">
          <input className="logininput" placeholder="username" />
          <input className="logininput" placeholder="password" />
          <button className="logbutton">LOGIN</button>
          <Link to="/password" className="link">
            DO NOT YOU REMEMBER THE PASSWORD?
          </Link>
          <Link to="/register" className="link">
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
