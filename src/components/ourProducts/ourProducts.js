import React, { useState, useEffect } from "react";
import Button from '../elements/button/button'
import style from "./ourporducts.module.css";
import {useImage} from 'react-image'

import p2 from './imageProducts/2.jpg'
import p3 from './imageProducts/3.jpg'
import p4 from './imageProducts/4.jpg'
import p5 from './imageProducts/5.jpg'
import p6 from './imageProducts/6.jpg'
import p7 from './imageProducts/7.jpg'
import p8 from './imageProducts/8.jpg'
import p9 from './imageProducts/9.jpg'
import p10 from './imageProducts/10.jpg'
import p11 from './imageProducts/11.jpg'
import p12 from './imageProducts/12.jpg'
import p13 from './imageProducts/13.jpg'

/*const slideImages = [
  { imageUrl: require("./imageProducts/1.jpg") },
  { imageUrl: require("./imageProducts/2.jpg") },
  { imageUrl: require("./imageProducts/3.jpg") },
  { imageUrl: require("./imageProducts/4.jpg") },
  { imageUrl: require("./imageProducts/021.jpg") },
  { imageUrl: require("./imageProducts/022.jpg") }
];*/


function OurProducts(props) {
 /* const[on,seton]=useState(false)
  useEffect(()=>{
    const b1=document.getElementById("homeContainer")
    b1.addEventListener('scroll',onscroll)
    function onscroll(){
      const b1=document.getElementById("homeContainer")
      var aa = document.getElementById("ourProducts").offsetTop-0 //fin tji ourproducsts
      var ourproductQalitypos=document.getElementById("contactUs").offsetTop // fin tji contact us
    
      if(ourproductQalitypos-aa+(b1.offsetHeight/2)<=b1.scrollTop){
        seton(true)
      }
    }

    
  
  },[])*/
  {/*<Button {...props} route="ProduitPlastique"></Button>*/}
        {/*<Button {...props} route={"ProduitSilicone"}></Button>*/}
        function goto1(){
          props.routerProps.history.push('/product/ProduitSilicone')
        }
        function goto2(){
          props.routerProps.history.push('/product/ProduitPlastique')

        }
  return (
    <div id="ourProducts" className={style.ourProducts}>
      <div className={style.cssulli}>
      <div className={style.twoh2Container}><div className={style.h2Container}><h2 onClick={goto1}>Selicon</h2></div><div className={style.h2Container}><h2 onClick={goto2}>Plastic</h2></div></div>
      </div>
      <div className={style.galery}>
        <div className={style.image2}><img src={p2} className={style.imagemax}/></div>
        <div className={style.image3}><img src={p3} className={style.imagemax}/></div>
        <div className={style.image4}><img src={p4} className={style.imagemax}/></div>
        <div className={style.image5}><img src={p5} className={style.imagemax}/></div>
        <div className={style.image6}><img src={p6} className={style.imagemax}/></div>
        <div className={style.image7}><img src={p7} className={style.imagemax}/></div>
        <div className={style.image8}><img src={p8} className={style.imagemax}/></div>
        <div className={style.image9}><img src={p9} className={style.imagemax}/></div>
        <div className={style.image10}><img src={p10} className={style.imagemax}/></div>
        <div className={style.image11}><img src={p11} className={style.imagemax}/></div>
        <div className={style.image12}><img src={p12} className={style.imagemax}/></div>
        <div className={style.image13}><img src={p13} className={style.imagemax}/></div>


      </div>
    </div>
  );
}

export default OurProducts;
