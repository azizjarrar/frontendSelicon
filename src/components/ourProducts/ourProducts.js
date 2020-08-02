import React, { useState, useEffect } from "react";
import Button from '../elements/button/button'
import style from "./ourporducts.module.css";
const slideImages = [
  { imageUrl: require("./imageProducts/1.jpg") },
  { imageUrl: require("./imageProducts/2.jpg") },
  { imageUrl: require("./imageProducts/3.jpg") },
  { imageUrl: require("./imageProducts/4.jpg") },
  { imageUrl: require("./imageProducts/021.jpg") },
  { imageUrl: require("./imageProducts/022.jpg") }
];


function OurProducts(props) {
  const[on,seton]=useState(false)
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

    
  
  },[])
  return (
    <div id="ourProducts" className={style.ourProducts}>
      <div className={style.ProduitSilicone}>
        <div className={style.description}>
        <div className={style.clipath1}></div>

        <Button {...props} route={"ProduitSilicone"}></Button>
          <div className={style.descriptionContainer}>
            <h1 className={style.h1OurProuduct}>Produit Silicone</h1>
            <ul className={style.whiteul}>
              <li>Produits Compressés</li>
              <li>Produits Extrudés</li>
              <li>Produits Injectés</li>
            </ul>
          </div>
        </div>
        <div className={style.photochange}>
        <img className={`${style.photostyle} ${on&&style.slideleftDescription}`} src={slideImages[4].imageUrl} alt="chay" />
        </div>
      </div>
      <div className={style.ProduitPlastique}>
     

        <div className={style.description}>
        <div className={`${window.innerWidth<700?style.clipath:style.clipath}`}></div>

        <Button {...props} route="ProduitPlastique"></Button>
          <div className={style.descriptionContainer}>
            <h1 className={style.h1OurProuduct}>Produit Plastique</h1>
            
            <ul className={style.whiteul}>
              <li>Informatique</li>
              <li>Electronique</li>
              <li>Divers</li>
            </ul>
          </div>
        </div>
        <div className={style.photochange}>
          <img className={`${style.photostyle} ${on&&style.slideleftDescription}`} src={slideImages[5].imageUrl} alt="chay" />
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
