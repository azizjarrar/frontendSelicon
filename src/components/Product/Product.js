import React, { useEffect, useState } from "react";
import style from "./product.module.scss";
import Navbar from "./navbar/navbar";
import Inputc from "../elements/input/input";
import table from "./test.js";
import View from '../view/view'

import Oneproduct from "./oneProduct/oneproduct";
import Contact from "../contactUs/contactUs";
import { url } from "../globalVar/var";
import axios from "axios";
import {useSelector,useDispatch} from 'react-redux'
import ActionNavar from '../../redux/action/changenavbar'
import changeEDC from '../../redux/action/changeECD'

const Product = (props) => {
  const [selectedSelect, setselectedSelect] = useState("");
  const [itemDisplay,setItemDisplay]=useState([])
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [tier1Display, settier1Display] = useState([]);
  const [Modal,setModal]=useState({state:false,id:''})
  const [itemdelete,setitemdeleted]=useState(false)
  const dispatchlang = useDispatch();
  const dispatchEDC = useDispatch();
  const Page =useSelector(e=>e.navbarReducer.navbar)
  var ECDD = useSelector((e)=>e.changeEDCreducer)
  var lang = useSelector((e)=>e.reducerlang.lang)

 /******************************************************* */
 /**********************useeffect************************* */
  /******************************************************* */

 useEffect(()=>{

  window.addEventListener("resize", handleResize);
  const url =props.routerProps.match.path.substring(9,props.routerProps.match.path.length)

  if (url==="Silicone"){
    dispatchlang(ActionNavar(url))
    getTier1("Silicone")
  }else{
    dispatchlang(ActionNavar(url))
    getTier1("Caoutchouc")
  }
  
  return ()=>{
    window.removeEventListener("resize", handleResize)
  }
  
},[])
useEffect(()=>{
  setItemDisplay([])
  getNewItems()

},[selectedSelect])

useEffect(()=>{
  setItemDisplay([])
  setselectedSelect('')
  const url =props.routerProps.match.path.substring(9,props.routerProps.match.path.length)
  getTier1(url)
  
},[Page])
useEffect(()=>{
 
  setItemDisplay([])
  setselectedSelect('')
  const url =props.routerProps.match.path.substring(9,props.routerProps.match.path.length)
  getTier1(url)

},[ECDD])
 useEffect(()=>{
  setItemDisplay(itemDisplay.filter((element)=>element.key!=itemdelete))
},[itemdelete])


 /******************************************************* */
 /*******************hel ou tsaker model****************** */
 /********************************************************* */
  const displayModal=(id)=>{
    setModal((e)=>{
      return {state:!e.state,id:id}
    })
  
   }
 const closeModel=()=>{
  setModal((e)=>{
    return {...Modal,state:!e.state}  
  })
 }
  /******************************************************* */
 /****************tfasa5 article*************************** */
 /********************************************************* */
 const deleteOn=async(id)=>{
  const data1 = await axios.post(`${url}items/deleteOneItem`, {
    id: id,
  })
  setitemdeleted(id)
}
const updateOn=async()=>{

}
 /******************************************************* */
 /******************************************************* */
 /********************************************************* */
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  
    const getTier1 = async (params) => {
      const data = await axios.post(`${url}tier/getTier1`, {
        section: params,
        ECD:ECDD
      });
      settier1Display(
        data.data.data.map((e) => (
          <option value={e._id} key={e._id}>
            {localStorage.getItem('lang')==="ang"?e.nameEng:e.name}
          </option>
        ))
      );
      if(document.getElementById('selectlowla')[1]!=undefined){
        document.getElementById('selectlowla').selectedIndex=1
        setselectedSelect(document.getElementById('selectlowla')[1].value)
      }
     /* if(document.getElementById('selectlowla')[1]!=undefined){
        document.getElementById('selectlowla').selectedIndex=1
        setselectedSelect(document.getElementById('selectlowla')[1].value)
        getNewItems()
      
      }*/

    }
/**********************************************************/
 /***************t9oulek ena select 5tart***************** */
 /********************************************************* */
  
  const getSelectselect=(e)=>{
    setselectedSelect(e.target.value)  

  }

  /**********************************************************/
 /***************thezek li dashbored********************** */
 /********************************************************* */
  const goAdminDashbord = () => {
    props.routerProps.history.push("/admin");
  };

  /**********************************************************/
 /***************ijib les article************************** */
 /********************************************************* */
 
  const getNewItems=async ()=>{
    var  data
       data = await axios.post(`${url}items/getItemsSelection`, {
        tier1id:selectedSelect
        /*ECD:ECDD,
        type:Page*/
      });
      if(Array.isArray(data.data.data)){
        setItemDisplay(data.data.data.map((e)=><Oneproduct Vu={e.Vu} name={lang==="ang"||localStorage.getItem('lang')==="ang"?e.nameEng:e.name} url={e.url} Description={lang==="ang"||localStorage.getItem('lang')==="ang"?e.DescriptionEng:e.Description} deleteOn={()=>deleteOn(e._id)} updateOn={()=>updateOn(e._id)} fn1={()=>displayModal(e._id)} key={e._id} id={e._id}></Oneproduct>))    
      }

    
  }
  /**********************************************************/
 /***************thezek Home********************** */
 /********************************************************* */
  const goToHome =()=>{
    props.routerProps.history.push("/");

  }
    /**********************************************************/
 /***************ta3 radio box fi tel********************** */
 /********************************************************* */
  const radiobox=()=>{
    return (
     <div className={style.radiobox}>
     <label class="container">
     Silicone
       <input
         id="silicon"
         type="radio"
         name="radio"
         value="Silicone"
         onChange={radioboxHandler}
       />
       <span class="checkmark"></span>
     </label>
     <label class="container">
     Caoutchouc
       <input
       id="plastic"
         type="radio"
         name="radio"
         value="Caoutchouc"
         onChange={radioboxHandler}
       />
       <span class="checkmark"></span>
     </label>
   </div>
    )
    
     }
     const radioboxHandler=(e)=>{
      dispatchlang(ActionNavar(e.target.value))
      
    }
  /**********************************************************/
 /***************Radio box handler***************************/
 /************************************************************/
 const ecdfn=(e)=>{
  dispatchEDC(changeEDC(e))
 }
  return (
    <div className={style.productBody}>
      {Modal.state&&<View fn2={closeModel} idData={Modal.id}></View>}
      {windowWidth>700&&<Navbar {...props}></Navbar>}
      <div className={style.HeaderTop}>
        <div className={style.khat1}><div className={style.khatwe7ed}></div></div>
        <div className={style.containerHeader}>
          <h1 onClick={goToHome}>
            <span className={style.Measilicone}>Measilicone</span>
          </h1>
          <h3>{(localStorage.getItem('lang')==="ang"&&props.routerProps.match.path.substring(9,props.routerProps.match.path.length)==="Caoutchouc")?'Rubber':props.routerProps.match.path.substring(9,props.routerProps.match.path.length)}</h3>
        </div>
        <div className={style.khat2}><div className={style.khatwe7ed}></div></div>
      </div>
      <div className={style.producContainer}>
      {windowWidth<700&&radiobox()}

        <div className={style.search}>
          <div className={`${style.ecdContainer}  ${ECDD==="Extrusion"&&style.ecdContainerBottm}`} onClick={e=>ecdfn('Extrusion') }><h2>Extrusion</h2></div>
          <div className={`${style.ecdContainer} ${ECDD==="Compression"&&style.ecdContainerBottm}`} onClick={e=>ecdfn('Compression') }><h2>Compression</h2></div>
          <div className={`${style.ecdContainer} ${ECDD==="Decoupage"&&style.ecdContainerBottm}`} onClick={e=>ecdfn('Decoupage') }><h2>Decoupage</h2></div>
          <select id="selectlowla" className={style.searchCss}   onChange={getSelectselect}>
            <option  value="None">None</option>
            {tier1Display}
          </select>
          {(windowWidth > 700 && localStorage.getItem('role')==='admin') && (
            <div>
              <button className={style.buttonadd} onClick={goAdminDashbord}>
                <p>+</p>
              </button>
            </div>
          )}
        </div>

        <div className={style.itemsContainer}>
        {itemDisplay}
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};
export default Product;
