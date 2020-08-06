import React, { useState, useEffect } from "react";
import style from "./home.module.css";
import Navbar from "../navbar/navbar";
import Description from "../description/description";
import OurProducts from "../ourProducts/ourProducts";
import ContactUs from "../contactUs/contactUs";
import OurHistory from "../ourHistory/ourHistory";
import OurProductsQuality from "../OurProductsQuality/OurProductsQuality";
import translate from './image/subject.png'
import {useSelector,useDispatch} from 'react-redux'
import actionlang from '../../redux/action/changelang'


function Home(props) {
  const [image, setimage] = useState(0);
  const [langstate, setLangeState] = useState(false);
  const [opacity,setOpacity]= useState(0)

  const lang = useSelector(state=>state.reducerlang.lang)
  const dispatchlang = useDispatch();
  var langgg={
    disc1:"Notre entreprise sera votre meilleur choix.",
    disc2:"Aujourd'hui MEA est une entreprise industrielle innovante qui n'a cessé de développer ses ressources de production, de diversifier et d'améliorer la qualité de ses produits."
  }
  if(lang==="ang"){
    var langgg={
      disc1:"Our company will be your best choice. We will ensure to deliver impeccable work to you",
      disc2:"Today MEA is an innovative industrial company that has continued to develop its resources production, diversify and improve the quality of its products."
    }
  }
 // const [picture, setclasname] = useState("changephotohola");

  function onscrollfunction() {
    const home = document.querySelector('#home')
    const b = document.querySelector("#navbarBackgroundColor");


    if (
      document.getElementById("homeContainer").scrollTop >
      document.getElementById("ourproductQality").offsetTop
    ) {
      b.classList.add("changecolorBackground");
    } else {
      b.classList.remove("changecolorBackground");
    }
  }
  function testifcrhome() {
    return (
      (!!window.chrome &&
        (!!window.chrome.webstore || !!window.chrome.runtime)) ||
      typeof InstallTrigger !== "undefined"
    );
  }
  const displayLang=()=>{
    setLangeState((lang)=>!lang)
  }
  const changelangFR=()=>{
    dispatchlang(actionlang("fr"))

  }
  const changelangANG=()=>{
    dispatchlang(actionlang("ang"))


  }
  /***** */
  const gotoporoduct=()=>{
    props.routerProps.history.push("/product/ProduitSilicone");

  }
  /********* */
  return (
    <div
      id="homeContainer"
      className={style.homeContainer}
      onScroll={onscrollfunction}
    >

      {testifcrhome() && <div className={style.welcomeleft}></div>}
      {testifcrhome() && <div className={style.welcomeright}></div>}
      <div className={style.translatelogocssContainer}>
      <div className={style.changelange} onClick={displayLang}><img src={translate} className={style.translatelogocss}></img></div>
      {langstate&&<div className={style.langDisplaying}>
          <ul>
            <li onClick={changelangFR}>France</li>
            <li onClick={changelangANG}>Anglais</li>
          </ul>
        </div>}
      </div>
      <div className={style.componentsRaper}>
      <Navbar className={style.Navbar}></Navbar>

      {/*style={{backgroundColor:('255','70','0',opacity)}}*/}
        <div id="home" className={style.beginning} >
          <div className={style.backgroundphotoUrl}></div>
          <div style={{zIndex:15,position:'absolute',height:'100%',width:'100%',backgroundColor:`rgba(7.8%,7.8%,7.8%,${opacity})`,pointerEvents:"none"}}></div>
          <div className={style.blackfilter} ></div>
          <div className={style.textContainer}>
            <h1 className={style.beginningH1} id="h11">
            {langgg.disc1}
            </h1>
            <p className={style.beginningP}>
            {langgg.disc2}
            </p>
          </div>
          <div className={style.voirNosarticle}><button className={style.btnhome} onClick={gotoporoduct}><p>voir nos article</p></button></div>
        </div>
        <OurProductsQuality></OurProductsQuality>
        <Description></Description>
        <OurHistory></OurHistory>
        {window.width>700&&<OurProducts {...props}></OurProducts>}
        <ContactUs></ContactUs>
      </div>
    </div>
  );
}

export default Home;
