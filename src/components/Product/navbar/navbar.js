import React,{useState,useEffect} from 'react';
import style from "./navbar.module.css";
import {useSelector,useDispatch} from 'react-redux'
import ActionNavar from '../../../redux/action/changenavbar'
function Navbar(props){
 const [windowWidth,setwindowWidth] = useState(window.innerWidth)
 const [productType,settype] = useState(props.routerProps.match.params.choice)
 const dispatchlang = useDispatch();

 const handleResize=()=>{
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=>{
      window.addEventListener('resize',handleResize)
  },[])
  function changeNavbar(a){

    props.routerProps.history.push('/product/'+a)
    settype(a)
    dispatchlang(ActionNavar(a))
  }
  const goHome=()=>{
    props.routerProps.history.push("/");

  }
    
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
                <div className={style.logophone}><h1 className={style.logoStyling }onClick={goHome}>Measilicone</h1></div>
 {        /*       <div className={style.pStyleDivphone}><p className={style.paraStyling}>Produit plastique</p></div>
                <div className={style.pStyleDivphone}><p className={style.paraStyling}>Produit Selicon</p></div>
           <div className={style.pStyleDivphone}><p className={style.paraStyling}>Home</p></div> */}
            </div>
            )
        }

}

export default Navbar;