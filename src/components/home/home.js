import React, { useState, useEffect } from "react";
import style from "./home.module.scss";
import Navbar from "../navbar/navbar";
import Description from "../description/description";
import OurProducts from "../ourProducts/ourProducts";
import ContactUs from "../contactUs/contactUs";
import OurHistory from "../ourHistory/ourHistory";
import OurContact from "../OurContact/OurContact";
import OurProductsQuality from "../OurProductsQuality/OurProductsQuality";
import translate from './image/translate.png'
import {useSelector,useDispatch} from 'react-redux'
import actionlang from '../../redux/action/changelang'
import mp4video from './image/thegoodplasticcompany.mp4'
function Home(props) {
  const [image, setimage] = useState(0);
  const [langstate, setLangeState] = useState(false);
  const [opacity,setOpacity]= useState(0)
  const [windoww,setwindow]=useState(1000)
  const lang = useSelector(state=>state.reducerlang.lang)
  const dispatchlang = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('lang')==="ang"){
      dispatchlang(actionlang("ang"))
    }
    document.querySelector('#homeContainer').scrollIntoView({ behavior: 'smooth' });
    window.addEventListener("resize", handleResize);


    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;
   /* if(!isSafari){
      document.getElementById('video').play();
    }*/
  return ()=>{
    window.removeEventListener("resize", handleResize)
  }

},[]);
const handleResize=()=>{
  setwindow(window.innerWidth)
}
useEffect(()=>{
},[windoww])
  var langgg={
    btnfr:'voir nos articles',
    disc1:"Notre entreprise sera votre meilleur choix.",
    disc2:"Aujourd'hui MEA est une entreprise industrielle innovante qui n'a cessé de développer ses ressources de production, de diversifier et d'améliorer la qualité de ses produits."
  }
  if(lang==="ang"){
    var langgg={
      btnfr:'see our articles',
      disc1:"Our company will be your best choice. ",
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
    localStorage.setItem('lang','fr')
  }
  const changelangANG=()=>{
    dispatchlang(actionlang("ang"))
    localStorage.setItem('lang','ang')


  }
  /***** */
  const gotoporoduct=()=>{
    props.routerProps.history.push("/product/Silicone");

  }


  return (
    <div
      id="homeContainer"
      className={style.homeContainer}
      onScroll={onscrollfunction}
    >

      {/*testifcrhome() && <div className={style.welcomeleft}></div>*/}
      {/*testifcrhome() && <div className={style.welcomeright}></div>*/}
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
          <div className={style.videoContainer}>
 {           /*<video id="video"   className={style.videocss}  autoplay   loop muted>
            <source src={mp4video} type="video/mp4"/>
          </video>*/}
          
          </div>
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
          <div className={style.voirNosarticle}><button className={style.btnhome} onClick={gotoporoduct}><p>{langgg.btnfr}</p></button></div>
        </div>

        <OurProductsQuality {...props}></OurProductsQuality>
        <Description></Description>
        <OurHistory></OurHistory>
        {/*windoww>700&&<OurProducts {...props}></OurProducts>*/}
        {<OurProducts {...props}></OurProducts>}
        <ContactUs></ContactUs>

      </div>
    </div>
  );
}

export default Home;
