import React,{useState,useEffect} from 'react';
import style from "./navbar.module.css";
function Navbar(props){
 const [windowWidth,setwindowWidth] = useState(window.innerWidth)
 const [productType,settype] = useState(props.routerProps.match.params.choice)
  const handleResize=()=>{
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=>{
      window.addEventListener('resize',handleResize)
  },[])
  function changeNavbar(a){
    settype(a)
  }
  const goHome=()=>{
    props.routerProps.history.push("/");

  }
    
  /*************navbar change lang*************** */
  
  /********************************************** */
        if(windowWidth>700){
            return (
                <div id="navbarBackgroundColor" className={style.navbarContainer}>
                <div className={style.logo}><h1 onClick={goHome}>Measilicone</h1></div>
                {productType==="ProduitSilicone"&&<div className={style.pStyleDiv}  ><p className={style.aStylehref}  onClick={e=>changeNavbar("ProduitPlastique")}>Produit plastique</p></div>}
                {productType==="ProduitPlastique"&&<div className={style.pStyleDiv} ><p className={style.aStylehref}  onClick={e=>changeNavbar("ProduitSilicone")}>Produit Selicon</p></div>}
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