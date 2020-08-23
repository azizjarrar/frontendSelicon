import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import ActionNavar from '../../redux/action/changenavbar'
import style from "./ourporducts.module.scss";
import p1 from './imageProducts/1.jpeg'
import p2 from './imageProducts/2.jpeg'
import p3 from './imageProducts/3.jpeg'
import p4 from './imageProducts/4.jpeg'
import p5 from './imageProducts/5.jpg'
import p6 from './imageProducts/6.jpeg'
import p7 from './imageProducts/7.jpeg'
import p8 from './imageProducts/8.jpeg'
import p9 from './imageProducts/9.jpeg'
import { lang } from "../globalVar/var";

/*const slideImages = [
  { imageUrl: require("./imageProducts/1.jpg") },
  { imageUrl: require("./imageProducts/2.jpg") },
  { imageUrl: require("./imageProducts/3.jpg") },
  { imageUrl: require("./imageProducts/4.jpg") },
  { imageUrl: require("./imageProducts/021.jpg") },
  { imageUrl: require("./imageProducts/022.jpg") }
];*/


function OurProducts(props) {

       var lang = useSelector((e)=>e.reducerlang.lang)
       const dispatchlang = useDispatch();

        var langg={
          title1:"Silicone",
          title2:"Caoutchouc"
        }
        if (lang==="ang"){
          langg={
            title1:"silicone",
            title2:"Rubber"
          }
        }
        function goto1(){
          props.routerProps.history.push('/product/silicone')
          dispatchlang(ActionNavar('silicone'))
          window.location.reload();
        }
        function goto2(){
          props.routerProps.history.push('/product/Caoutchouc')
          dispatchlang(ActionNavar('Caoutchouc'))

          window.location.reload();

        }
        if(window.innerWidth>700){
          return (
            <div id="ourProducts" className={style.ourProducts}>
              <div className={style.cssulli}>
          <div className={style.twoh2Container}><div className={style.h2Container}><h2 onClick={goto1}>{langg.title1}</h2></div><div className={style.h2Container}><h2 onClick={goto2}>{langg.title2}</h2></div></div>
              </div>
              <div className={style.galery}>
                <div className={style.image3}><img src={p3} className={style.imagemax}/></div>
                <div className={style.image4}><img src={p4} className={style.imagemax}/></div>
                <div className={style.image5}><img src={p5} className={style.imagemax}/></div>
                <div className={style.image6}><img src={p6} className={style.imagemax}/></div>
                <div className={style.image1}><img src={p1} className={style.imagemax}/></div>
                <div className={style.image8}><img src={p8} className={style.imagemax}/></div>
                <div className={style.image9}><img src={p9} className={style.imagemax}/></div>
              </div>
            </div>
          );
        }else{
          return (
            <div id="ourProducts" className={style.ourProducts}>
              <div className={style.cssulli}>
          <div className={style.twoh2Container}><div className={style.h2Container}><h2 onClick={goto1}>{langg.title1}</h2></div><div className={style.h2Container}><h2 onClick={goto2}>{langg.title2}</h2></div></div>
              </div>
              <div className={style.galery}>
              <div className={style.image3}><img src={p3} className={style.imagemax}/></div>
                <div className={style.image4}><img src={p4} className={style.imagemax}/></div>
                <div className={style.image5}><img src={p5} className={style.imagemax}/></div>
                <div className={style.image6}><img src={p6} className={style.imagemax}/></div>   
              </div>
            </div>
          );
        }

}

export default OurProducts;
