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
import {useSelector} from 'react-redux'

const Product = (props) => {
  
  const [selectedSelect, setselectedSelect] = useState("");
  const [selectedSelect1, setselectedSelect1] = useState("");
  const [itemDisplay,setItemDisplay]=useState([])
  const [sectionSP, setsection] = useState("");
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [tier2Display, settier2Display] = useState([]);
  const [tier1Display, settier1Display] = useState([]);
  const [Modal,setModal]=useState({state:false,id:''})
  const [itemdelete,setitemdeleted]=useState(false)
 
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
 const deleteOn=async(id)=>{
  const data1 = await axios.post(`${url}items/deleteOneItem`, {
    id: id,
  })
  setitemdeleted(id)
}
useEffect(()=>{
  setItemDisplay(itemDisplay.filter((element)=>element.key!=itemdelete))
},[itemdelete])

  const navbarReducer = useSelector(state=>state.navbarReducer.navbar)
  useEffect(()=>{
    if(navbarReducer==="ProduitPlastique"){
      setsection('plastic')
        setItemDisplay([])
    }else{
      setsection('silicon')
        setItemDisplay([])
    }
  },[navbarReducer])

  
  useEffect(() => {
      getTier1()
    window.addEventListener("resize", handleResize);
    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[sectionSP]);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  /**********************get tier 1 and 2*********************/
  
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
  
    const getTier1 = async () => {

      const data = await axios.post(`${url}tier/getTier1`, {
        section: sectionSP,
      });
      settier1Display(
        data.data.data.map((e) => (
          <option value={e._id} key={e._id}>
            {e.name}
          </option>
        ))
      );
    }
  /*********************************************/
  
  const getSelectselect=(e)=>{
    setselectedSelect(e.target.value)
    
  }
 
  useEffect(() => {
    getNewItems()
    getTier2()
  
  },[selectedSelect,selectedSelect1])

    useEffect(()=>{

      if(windowWidth<700){

        if(props.routerProps.match.params.choice==="ProduitSilicone"){
          document.getElementById("silicon").checked = true;
          setsection('silicon')
        }else{
          document.getElementById("plastic").checked = true;
          setsection('plastic')
        }
      }
      if(props.routerProps.match.params.choice==="ProduitSilicone"){
        setsection('silicon')
      }else{
        setsection('plastic')
      }
  

    },[])
  

  const goAdminDashbord = () => {
    props.routerProps.history.push("/admin");
  };
  function getSelectselect1(e){
    setselectedSelect1(e.target.value)
  }
 /**************************fetech getItemsSelection***************************************/
 
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
  const radioboxHandler=(e)=>{
    setsection(e.target.value)

  }
  
  const radiobox=()=>{
 return (
  <div className={style.radiobox}>
  <label class="container">
    silicon
    <input
      id="silicon"
      type="radio"
      name="radio"
      value="silicon"
      onChange={radioboxHandler}
    />
    <span class="checkmark"></span>
  </label>
  <label class="container">
    plastic
    <input
    id="plastic"
      type="radio"
      name="radio"
      value="plastic"
      onChange={radioboxHandler}
    />
    <span class="checkmark"></span>
  </label>
</div>
 )
  }
  const goToHome =()=>{
    props.routerProps.history.push("/");

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
          <h3>{sectionSP}</h3>
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
