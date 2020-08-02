import React from "react";
import style from "./login.module.css";
import logo from './logoMEA.png'
import InputC from '../elements/input/input'
const Login = () => {
  return (
    <div className={style.loginbody}>
      <div className={style.blackfilter}></div>
      <div className={style.backgroundphoto}></div>
      <div className={style.inputcontainer}>
        <div className={style.form}>
          <div className={style.logo}><img src={logo} className={style.logoStyle} alt="gezgz"/></div>
          <InputC name="username"></InputC>
          <InputC name="password"></InputC>
          <div className={style.buttonContainer}>
            <button className={style.buttoncss}>
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
