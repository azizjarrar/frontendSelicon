import React, { useState } from "react";
import style from "./oneproduct.module.css";
import {url} from '../../globalVar/var'
{/*const ArrayofPhoto = [
  { imgurl: require(`../1.jpg`) },
  { imgurl: require(`../2.jpg`) },
  { imgurl: require(`../3.jpg`) },
  { imgurl: require(`../4.jpg`) },
  { imgurl: require(`../5.jpg`) },
  { imgurl: require(`../6.jpg`) },
  { imgurl: require(`../7.jpg`) },
  { imgurl: require(`../8.jpg`) },
  { imgurl: require(`../9.jpg`) },
];*/}

const Oneproduct = (props) => {
  console.dir(props)
  return (
    <div className={style.boxStyle} id={props.id}>
      {localStorage.getItem('role')==="admin"&&<div className={style.close} onClick={props.deleteOn}></div>}
      {localStorage.getItem('role')==="admin"&&<div className={style.Vu} ><p>Vu:{props.Vu}</p></div>}

      <div className={style.OneproductImageContainer}>
        <img
          className={style.imageStyle}
          src={url+props.url}
         alt={props.name}/>
      </div>
      <div className={style.h2Container}>
        <h4 className={style.h2Style}>{props.name}</h4>
      </div>
      <div className={style.khatContainer}><div className={style.khat}></div></div>
      <div className={style.descriptionContaienrProduct}><h5 className={style.h5style}>{props.Description}</h5></div>
      <div className={style.buttonContainer}>
        <button className={style.buttononeProduct}  onClick={props.fn1}>
          <p>View</p>
        </button>
      </div>
    </div>
  );
};
export default Oneproduct;
