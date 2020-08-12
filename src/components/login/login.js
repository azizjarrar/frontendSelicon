import React, { useEffect, useState } from "react";
import style from "./login.module.css";
import logo from './logoMEA.png'
import InputC from '../elements/input/input'
import axios from 'axios'
import {url} from '../globalVar/var'
import videomp4 from '../home/image/thegoodplasticcompany.mp4'
const Login = (props) => {
  const [state,setState]=useState({})
  const onchangeHandler=(e)=>{
    const {name,value}=e.target
    setState({...state,[name]:value})
   
  }
  useEffect(()=>{
    document.getElementById('video1').play();

  })
  const LoginToken=async ()=>{
    const data = await axios.post(`${url}login`,{...state})
    if(data.data.message=='login succeeded'){
      localStorage.setItem('token',data.data.token)
      localStorage.setItem('role',data.data.role)
      props.routerProps.history.push('/admin')
      window.location.reload();
    }else{
      alert('mot de passe incorrect')
    }


  }
async  function entree(e){
    if(e.keyCode == 13){
      const data = await axios.post(`${url}login`,{...state})
      if(data.data.message=='login succeeded'){
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('role',data.data.role)
        props.routerProps.history.push('/admin')
        window.location.reload();
      }else{
        alert('mot de passe incorrect')
      }
    }

  }
  return (
    <div className={style.loginbody} onKeyUp={(e)=>entree(e)}>
      <div className={style.videoContainer}>
                  <video id="video1"   className={style.videocss}  autoplay   loop muted>
            <source src={videomp4} type="video/mp4"/>
          </video>
          </div>
      <div className={style.blackfilter}></div>
      <div className={style.backgroundphoto}></div>
      <div className={style.inputcontainer} >
        <div className={style.form}>
          <div className={style.logo}><img src={logo} className={style.logoStyle} alt="gezgz"/></div>
          <InputC name="username" fn1={onchangeHandler}></InputC>
          <InputC name="password" fn1={onchangeHandler}></InputC>
          <div className={style.buttonContainer}>
            <button className={style.buttoncss} onClick={LoginToken}>
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
