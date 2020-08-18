import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import style from "./contactus.module.scss";
import Input from '../elements/input/input'
import axios from 'axios'
import {url} from '../globalVar/var'
import Alert from '../elements/alert/alert'
import bkg from './contactus.jpg'
import logo1 from  './email.png'
import logo2 from './phone-call.png'
import logo3 from './placeholder.png'
function ContactUs() {
  const [alertstate,setalertstate]=useState({state:false,msg:'gzegz',color:'#4CAF50'})
  const [state,setState]=useState({})
  var lang = useSelector((e)=>e.reducerlang.lang)




  const ochangeHandler =(e)=>{
    const {name,value}=e.target
    setState((e)=>{
return {...e,[name]:value}})
  }
  const sendEmail=()=>{
    setalertstate({state:true,msg:'Email sent',color:'#4CAF50'})
   
  setTimeout(() => {
    setalertstate({state:false,msg:''})
  }, 4000);
    axios.post(`${url}sendEmail`,state).then((result)=>{
    })

  }
  return (
    <div id="contactUs" className={style.contactUs}>
      {alertstate.state&&<Alert msg={alertstate.msg} color={alertstate.color}></Alert>}
      <div className={style.h1Contact}><h1>CONTACT</h1></div>
      <div className={style.sayhallo}>{lang==="ang"?<p>We like to create thing with fun,Open-minded people, feel free to say hello!</p>:<p>
Nous aimons créer des choses avec des gens amusants et ouverts d'esprit, n'hésitez pas à dire bonjour!</p>}</div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className={style.contactusContainer}>

 {       /*<div className={style.conctactusModule}>
          <div className={style.cardContainer}>
            <div className={style.h2background}><div className={style.h2fou9oul}><h2 style={{textAlign:'center',zIndex:4,margin:0,color:'white'}}>Contactez nos</h2></div><div className={style.filter} ></div><img src={bkg} className={style.srchw}/></div>
            <div className={style.NomPrenom}><div className={style.widthnp}><Input name="Nom" fn1={ochangeHandler}></Input></div><div className={style.widthnp}><Input name="prenom" fn1={ochangeHandler}></Input></div></div>
            <div className={style.email}><Input name="Email" fn1={ochangeHandler}></Input></div>
            <div className={style.phoneNumber}><Input name="Telephone" fn1={ochangeHandler}></Input></div>
            <div className={style.textArea}><textarea placeholder="Remember, be nice!" cols="80" rows="10" onChange={ochangeHandler} name="textArea"></textarea></div>
            <div className={style.sendEmail}><button className={style.btnContact} onClick={sendEmail}>{localStorage.getItem('lang')==="ang"?<p>send an email</p>:<p>envoyer un email</p>} </button></div>

          </div>
        </div>*/}
        <div className={style.ahahha}>
          <div className={style.tierinsideahahha}><div className={style.logo}><img src={logo1} className={style.logoim}/></div><div className={style.text}><p>commercial-mea@measilicone.com</p></div></div>
          <div className={style.tierinsideahahha}><div className={style.logo}><img src={logo2} className={style.logoim}/></div><div className={style.text}><p> 216 71 390 304</p></div></div>
          <div className={style.tierinsideahahha}><div className={style.logo}><img src={logo3} className={style.logoim}/></div><div className={style.text}><p>77 Rue Montagne Atlas Jbel Jloud, Sidi Fathallah 2023 Tunis</p></div></div>
          {/*<div className={style.khtayet}></div>*/}
          <div className={style.tierinsideahahha}>
          <div className={style.iconsConTainer}>
        <div><a href="https://www.facebook.com/MEA-Silicone-Caoutchouc-632439290736992" class="fa fa-facebook">{``}</a></div>
        <div><a href="#her" class="fa fa-twitter">{``}</a></div>
        <div><a href="#her" class="fa fa-linkedin">{``}</a></div>
        <div><a href="#hre" class="fa fa-instagram">{``}</a></div>
        </div>
          </div>
        </div>
      </div>
      <footer> <small>&copy; Copyright {new Date().getFullYear()}, Mea Silicone .All Rights Reserved</small> </footer> 

    </div>
  );
}

export default ContactUs;
