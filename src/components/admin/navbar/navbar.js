import React,{useState,useEffect} from 'react';
import style from "./navbar.module.scss";
function Navbar(props){
 const [windowWidth,setwindowWidth] = useState(window.innerWidth)
  const handleResize=()=>{
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=>{
      window.addEventListener('resize',handleResize)
  },[])

  const goHome=()=>{
    props.routerProps.history.push("/");

  }
  const gotoProduct=()=>{
   
    props.routerProps.history.push("/product/Silicone");

  }
  const Deconnexion=()=>{
    localStorage.setItem('role','user')
    localStorage.setItem('token','')
    window.location.reload()
  }
  
  /********************************************** */
        if(windowWidth>700){
            return (
                <div id="navbarBackgroundColor" className={style.navbarContainer}>
                <div className={style.logo}><h1 onClick={goHome}>MEA MANUFACTURING</h1></div>
                { localStorage.getItem('role')==='admin'&&<div className={style.pStyleDiv}><p className={style.aStylehref} onClick={Deconnexion}>déconnexion</p></div>}
                <div className={style.pStyleDiv}  ><p className={style.aStylehref}  onClick={gotoProduct}>les Produit</p></div>
                <div className={style.pStyleDiv}><p className={style.aStylehref} onClick={goHome} >Home</p></div>
             </div>
         )
        }else{
           return( 
            <div className={style.navbartel}>
                <div className={style.logophone}><h1 className={style.logoStyling}>Measilicone</h1></div>
 {        /*       <div className={style.pStyleDivphone}><p className={style.paraStyling}>Produit plastique</p></div>
                <div className={style.pStyleDivphone}><p className={style.paraStyling}>Produit Selicon</p></div>
           <div className={style.pStyleDivphone}><p className={style.paraStyling}>Home</p></div> */}
            </div>
            )
        }

}

export default Navbar;