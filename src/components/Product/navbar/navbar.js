import React,{useState,useEffect} from 'react';
import style from "./navbar.module.css";
import {useSelector,useDispatch} from 'react-redux'
import ActionNavar from '../../../redux/action/changenavbar'

function Navbar(props){
 const [windowWidth,setwindowWidth] = useState(window.innerWidth)
 const dispatchlang = useDispatch();
 var lang = useSelector((e)=>e.reducerlang.lang)

 var langg={
   Title1:'Produit Caoutchouc',
   Title2:'Produit Silicone',
   Title3:'Accueil'
 }
 if(lang==="ang"||localStorage.getItem('lang')==="ang"){
  langg={
    Title1:'Rubber Product',
    Title2:'Silicone product',
    Title3:'Home'
  }
 }
 const handleResize=()=>{
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=>{
      window.addEventListener('resize',handleResize)
      return ()=>{
        window.removeEventListener("resize", handleResize)
      }
  },[])
  function changeNavbar(a){
      if(a==="Silicone"){
        props.routerProps.history.push('/product/Silicone')
        dispatchlang(ActionNavar(a))
      }else{
        props.routerProps.history.push('/product/Caoutchouc')
        dispatchlang(ActionNavar(a))

      }

    
  }
  const goHome=()=>{
    props.routerProps.history.push("/");

  }
    const Deconnexion=()=>{
      localStorage.setItem('role','user')
      localStorage.setItem('token','')
      window.location.reload()
    }
        if(windowWidth>700){
            return (

                <div id="navbarBackgroundColor" className={style.navbarContainer}>
    
                <div className={style.logo}><h1 onClick={goHome}>MEA Silicone</h1></div>
                { localStorage.getItem('role')==='admin'&&<div className={style.pStyleDiv}><p className={style.aStylehref} onClick={Deconnexion}>déconnexion</p></div>}
            <div className={style.pStyleDiv}  ><p className={style.aStylehref}  onClick={e=>changeNavbar("Caoutchouc")}>{langg.Title1}</p></div>
                <div className={style.pStyleDiv} ><p className={style.aStylehref}  onClick={e=>changeNavbar("Silicone")}>{langg.Title2}</p></div>
                <div className={style.pStyleDiv}><p className={style.aStylehref} onClick={goHome} >{langg.Title3}</p></div>
             </div>
         )
        }else{
           return( 
            <div className={style.navbartel}>
                <div className={style.logophone}><h1 className={style.logoStyling }onClick={goHome}>MeaSilicone</h1></div>
 {        /*       <div className={style.pStyleDivphone}><p className={style.paraStyling}>Produit plastique</p></div>
                <div className={style.pStyleDivphone}><p className={style.paraStyling}>Produit Selicon</p></div>
           <div className={style.pStyleDivphone}><p className={style.paraStyling}>Home</p></div> */}
            </div>
            )
        }

}

export default Navbar;