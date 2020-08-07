import React, { useState } from "react";
import style from "./contactus.module.css";
import Input from '../elements/input/input'
import axios from 'axios'
import {url} from '../globalVar/var'
import Alert from '../elements/alert/alert'
import Googlemap from '../elements/googlemap/googlemap'


function ContactUs() {
  const [alertstate,setalertstate]=useState({state:false,msg:'gzegz',color:'#4CAF50'})

  const [state,setState]=useState('')
  const ochangeHandler =(e)=>{
    
    const {name,value}=e.target
    setState((e)=>{
      return {...e,[name]:value}
    })
    console.log(state)
  }
  const sendEmail=()=>{
    setalertstate({state:true,msg:'Email sent',color:'#4CAF50'})
setTimeout(() => {
  setalertstate({state:false,msg:''})
}, 4000);
    axios.post(`${url}sendEmail`,state).then((result)=>{
      console.log(result)
    })
  }
  return (
    <div id="contactUs" className={style.contactUs}>
            {alertstate.state&&<Alert msg={alertstate.msg} color={alertstate.color}></Alert>}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className={style.contactusContainer}>
      
        <div className={style.conctactusModule}>
          <div className={style.cardContainer}>
            <h2 style={{textAlign:'center'}}>Contactez nos</h2>
            <div className={style.NomPrenom}><div className={style.widthnp}><Input name="Nom" fn1={ochangeHandler}></Input></div><div className={style.widthnp}><Input name="prenom" fn1={ochangeHandler}></Input></div></div>
            <div className={style.email}><Input name="Email" fn1={ochangeHandler}></Input></div>
            <div className={style.phoneNumber}><Input name="Telephone" fn1={ochangeHandler}></Input></div>
            <div className={style.textArea}><textarea placeholder="Remember, be nice!" cols="80" rows="10" onChange={ochangeHandler} name="textArea"></textarea></div>
            <div className={style.sendEmail}><button className={style.btnContact} onClick={sendEmail}><p>Enovyer un Email</p></button></div>

          </div>
        </div>
        <div className={style.googlemapdesmtionContainer}><div className={style.googlemapdesmtion}><Googlemap></Googlemap></div></div>
        <div className={style.ahahha}>
        <div className={style.iconsConTainer}>
        <div><a href="#her" class="fa fa-facebook">{``}</a></div>
        <div><a href="#her" class="fa fa-twitter">{``}</a></div>
        <div><a href="#her" class="fa fa-linkedin">{``}</a></div>
        <div><a href="#hre" class="fa fa-instagram">{``}</a></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
