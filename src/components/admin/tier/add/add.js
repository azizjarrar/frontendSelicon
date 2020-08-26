import React, { useState, useEffect } from "react";
import Input from "../../../elements/input/input";
import style from "./add.module.scss";
import { url } from "../../../globalVar/var";
import axios from "axios";
import Alert from "../../../elements/alert/alert";

const Add = () => {
  const [tier1, setTier1] = useState("None");
  const [tier1Display, settier1Display] = useState([]);
  const [selectedSelect, setselectedSelect] = useState("");//hedhi famille 1 che5tar menha
  const [sectionSP, setsection] = useState("Silicone");
  const [alertstate, setalertstate] = useState({state: false,msg: "gzegz",color: "#2196F3",});
  const [nameEng1,setnameEng1]=useState('')

  /*************************UseEffects************************/
  /***********************************************************/
  /**********************************************************/
  useEffect(() => {
    getTier1();
  }, [sectionSP]);
  useEffect(() => {
    getTier1();
  }, [selectedSelect]);
  useEffect(() => {
    document.getElementById("silicon").checked = true;
    getTier1();
  }, []);
  /**********************************************************************/
  /************hedhi mta3 input 1 ou 2***********************************/
  /**********************************************************************/
  const onchangeHandler = (e) => {
    setTier1(e.target.value);
  };

  /**********************************************************************/
  /*****************hedhi mta3 checkbox**********************************/
  /**********************************************************************/
  const radioboxHandler = (e) => {
    setsection(e.target.value);
  };
  /**********************************************************************/
  /********************nzid tier 1***************************************/
  /**********************************************************************/
  const addTier1 = () => {
    if(tier1==='None'){
      setalertstate({state:true,msg:'saisie un tier1',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }else{
      axios
      .post(`${url}tier/AaddTier1`, { name: tier1, section: sectionSP ,nameEng:nameEng1,ECD:selectedSelect})
      .then((response) => {
        getTier1();
      })
      .catch((e) => console.log("Error=" + e));
      setalertstate({state:true,msg:'Tier1 a éte enregistre',color:'#4CAF50'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
    },4000)
  }
}

 
  /************************************************************/
/*************************************njib tier 1*************/  
/************************************************************/
  const getTier1 = async () => {
    const data = await axios.post(`${url}tier/getTier1`, {
      section: sectionSP,
      ECD:selectedSelect
    });
    let NewTier1Array=data.data.data.map((e) => (<option value={e._id} key={e._id}>{e.name}</option>))
    settier1Display([...NewTier1Array]);
  };

/************************************************************/
/******************enehi tier 1 selectit*********************/  
/************************************************************/
  const getSelectselect = (e) => {
    setselectedSelect(e.target.value);
  };
  /************************************************************/
/*************************************************************/  
/************************************************************/
function onchangeHandlereng1(e){
  setnameEng1(e.target.value)
}

  return (
    <div className={style.addContainer}>
      {alertstate.state && (
        <Alert msg={alertstate.msg} color={alertstate.color}></Alert>
      )}

      <div className={style.display}>
        <h1>niveau 1</h1>
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
              type="radio"
              name="radio"
              value="Caoutchouc"
              onChange={radioboxHandler}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <select
          className={style.selectStyle}
          className={style.selectcss}
          onChange={getSelectselect}
        >
          <option value="None">choisire un famille</option>
          <option value="Extrusion">Extrusion</option>
          <option value="Compression">Compression</option>
          <option value="Decoupage">Decoupage</option>
        </select>
        <div className={style.inputContainer}>
          <Input name="tier1Select" fn1={onchangeHandler}></Input><Input name="tier1Select Eng" fn1={onchangeHandlereng1} ></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={addTier1}>
            Ajouter
          </button>
        </div>
        <h2>Liste les famille</h2>
        <select
          className={style.selectStyle}
          className={style.selectcss}
        >
          {tier1Display}
        </select>
  
  

      </div>
    </div>
  );
};
export default Add;

/*************************************************** */
