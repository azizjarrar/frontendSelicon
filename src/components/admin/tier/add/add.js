import React,{useState,useEffect} from "react";
import Input from "../../../elements/input/input";
import style from "./add.module.css";
import {url} from '../../../globalVar/var'
import axios from 'axios'
const Add = () => {
   /**************Tier1*****************/
 const [tier1,setTier1]=useState('None')
 const [tier1Display,settier1Display]=useState([])
 const [selectedSelect,setselectedSelect]=useState('')
 /**************Tier2*****************/
 const [tier2,setTier2]=useState('None')
 const [tier2Display,settier2Display]=useState([])
/*********************par default bil radio nhot silicon*************************/
 const [sectionSP,setsection]=useState('silicon')
 /************************************************************/
 /**************** teb3in tier 1*********************/
 /************************************************************/
  const onchangeHandler=(e)=>{
    setTier1(e.target.value)
  }
  const radioboxHandler=(e)=>{

    setsection(e.target.value)
  }
  const addTier1=()=>{
   axios.post(`${url}tier/AaddTier1`,{name:tier1,section:sectionSP}).then((response) => {
    getTier1()
  })
    .catch((e) => console.log("Error="+e));
  }
  const getTier1=async ()=>{
    const data = await axios.post(`${url}tier/getTier1`,{section:sectionSP})
    settier1Display(data.data.data.map((e)=><option value={e._id} key={e._id}>{e.name}</option>))
    }
    /***te5ou select mta3 tier 1*/
    const getSelectselect=(e)=>{
      setselectedSelect(e.target.value)
    }
    /************************************************************/
    /************************************************************/
    /************************************************************/
    /****************ajouti tier 2*********** */
   const addTier2=async ()=>{
      await axios.post(`${url}tier/AaddTier2`,{name:tier2,tier1id:selectedSelect}).then((response) => {})
      getTier2()

    }
    
    /***************mta3 input 2******* */
    const onchangeHandler1=(e)=>{
      setTier2(e.target.value)
    }
    /******************tjiblk tier 2 kol ta3 blasa li enti feha******************/
    const getTier2=async ()=>{
      const data1= await axios.post(`${url}tier/getTier2`,{id:selectedSelect})
      console.log(data1.data.data)
      settier2Display(data1.data.data[0].tier2.map((e)=><option value={e._id} key={e._id}>{e.name}</option>))
      }
      useEffect(() => {
        getTier1()
      },[sectionSP])
  useEffect(()=>{
    getTier1()
  },[selectedSelect])
  useEffect(()=>{
    document.getElementById("silicon").checked = true;
  },[])
  return (
    <div className={style.addContainer}>
      <div className={style.display}>
        <h1>Tier 1</h1>
        <div className={style.radiobox}>
          <label class="container">
          silicon
            <input id="silicon" type="radio" name="radio" value="silicon" onChange={radioboxHandler}/>
            <span class="checkmark"></span>
          </label>
          <label class="container">
          plastic
            <input type="radio" name="radio" value="plastic" onChange={radioboxHandler}/>
            <span class="checkmark"></span>
          </label>
        </div>
        <div className={style.inputContainer}>
          <Input name="tier1Select" fn1={onchangeHandler}></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={addTier1}>Ajouter</button>
        </div>
        <h1>Tier 2</h1>
        <select className={style.selectStyle} className={style.selectcss} onChange={getSelectselect}>
          <option value="None">choisir un elemnt</option>
          {tier1Display}
        </select>
        <select className={style.selectStyle} className={style.selectcss}>
          <option value="None">choisir un elemnt</option>
          {tier2Display}
        </select>
        <div className={style.inputContainer}>
          <Input name="tier2Select" fn1={onchangeHandler1}></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={addTier2}>Ajouter</button>
        </div>
      </div>
    </div>
  );
};
export default Add;

/*************************************************** */
