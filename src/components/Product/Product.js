import React, { useEffect, useState } from "react";
import style from "./product.module.css";
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

const Product = (props) => {
  
  const [selectedSelect, setselectedSelect] = useState("");
  const [selectedSelect1, setselectedSelect1] = useState("");
  const [itemDisplay,setItemDisplay]=useState([])
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [tier2Display, settier2Display] = useState([]);
  const [tier1Display, settier1Display] = useState([]);
  const [Modal,setModal]=useState({state:false,id:''})
  const [itemdelete,setitemdeleted]=useState(false)
  const dispatchlang = useDispatch();

  const Page =useSelector(e=>e.navbarReducer.navbar)
 /******************************************************* */
 /**********************useeffect************************* */
  /******************************************************* */

 useEffect(()=>{
 
  window.addEventListener("resize", handleResize);
  const url =props.routerProps.match.path.substring(9,props.routerProps.match.path.length)
  if (url==="Silicone"){
    getTier1("Silicone")
  }else{
    getTier1("Caoutchouc")
  }
  return ()=>{
    window.removeEventListener("resize", handleResize)
  }
},[])
useEffect(()=>{
  getTier1(Page)
  settier2Display([])
},[Page])
 useEffect(()=>{
  setItemDisplay(itemDisplay.filter((element)=>element.key!=itemdelete))
},[itemdelete])

useEffect(() => {
  getNewItems()
  getTier2()

},[selectedSelect,selectedSelect1])
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
 /******************************************************* */
 /******************************************************* */
 /********************************************************* */
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
 /********************************************************* */
 /***************tjib tier 1 ou 2************************** */
 /********************************************************* */
  
  const getTier2 = async () => {
    
    const data1 = await axios.post(`${url}tier/getTier2`, {
      id: selectedSelect,
    });
    if(Array.isArray(data1.data.data)){
      settier2Display(
        data1.data.data[0].tier2.map((e) => (
          <option value={e._id} key={e._id}>
            {e.name}
          </option>
        ))
      );
    }

  }
  
    const getTier1 = async (params) => {

      const data = await axios.post(`${url}tier/getTier1`, {
        section: params,
      });
      settier1Display(
        data.data.data.map((e) => (
          <option value={e._id} key={e._id}>
            {e.name}
          </option>
        ))
      );
    }
/**********************************************************/
 /***************t9oulek ena select 5tart***************** */
 /********************************************************* */
  
  const getSelectselect=(e)=>{
    setselectedSelect(e.target.value)  
  }
  function getSelectselect1(e){
    setselectedSelect1(e.target.value)
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
    if(selectedSelect1.length===0){
       data = await axios.post(`${url}items/getItemsSelection`, {
        tier1id:selectedSelect,
      });
      if(Array.isArray(data.data.data)){
        setItemDisplay(data.data.data.map((e)=><Oneproduct name={e.name} url={e.url} Description={e.Description} deleteOn={()=>deleteOn(e._id)} fn1={()=>displayModal(e._id)} key={e._id} id={e._id}></Oneproduct>))    
      }

    }else{
       data = await axios.post(`${url}items/getItemsSelection`, {
        tier1id:selectedSelect,
        tier2id:selectedSelect1
      });
      if(Array.isArray(data.data.data)){
        setItemDisplay(data.data.data.map((e)=><Oneproduct name={e.name} url={e.url} Description={e.Description} deleteOn={()=>deleteOn(e._id)} fn1={()=>displayModal(e._id)} key={e._id} id={e._id}></Oneproduct>))    
      }
    }
    //setItemDisplay()
  }
  const searchbyword=async (e)=>{
    var data = await axios.post(`${url}items/searchByword`, {
      word:e.target.value,
    });
    if(Array.isArray(data.data.data)){
      setItemDisplay(data.data.data.map((e)=><Oneproduct name={e.name} url={e.url} Description={e.Description} deleteOn={()=>deleteOn(e._id)} fn1={()=>displayModal(e._id)} key={e._id} id={e._id}></Oneproduct>))    
    }else{
      setItemDisplay([])
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
          <h3>{props.routerProps.match.path.substring(9,props.routerProps.match.path.length)}</h3>
        </div>
        <div className={style.khat2}><div className={style.khatwe7ed}></div></div>
      </div>
      <div className={style.producContainer}>
      {windowWidth<700&&radiobox()}

        <div className={style.search}>

          <select className={style.searchCss}  onChange={getSelectselect}>
            <option value="None">None</option>
            {tier1Display}
          </select>
          <select className={style.searchCss} onChange={getSelectselect1}>
            <option value="None">None</option>
            {tier2Display}

          </select>
          {windowWidth > 700 &&(
            <div className={style.searchContainer}>
              <Inputc name="seach"  fn1={searchbyword}></Inputc>
            </div>
          )}
          {(windowWidth > 700 && localStorage.getItem('role')==='admin') && (
            <div>
              <button className={style.buttonadd} onClick={goAdminDashbord}>
                <p>+</p>
              </button>
            </div>
          )}
        </div>
        {windowWidth < 700 && (
          <div className={style.searchContainer}><Inputc name="seach" fn1={searchbyword}></Inputc></div>)}
        <div className={style.itemsContainer}>
        {itemDisplay}
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};
export default Product;
