import React, { useState, useEffect } from "react";
import Input from "../../../elements/input/input";
import style from "./add.module.scss";
import { url } from "../../../globalVar/var";
import axios from "axios";
import Alert from "../../../elements/alert/alert";

const Add = () => {
  const [tier1, setTier1] = useState("None");
  const [tier1Display, settier1Display] = useState([]);
  const [selectedSelect, setselectedSelect] = useState("");
  const [tier2, setTier2] = useState("None");
  const [tier2Display, settier2Display] = useState([]);
  const [sectionSP, setsection] = useState("Silicone");
  const [alertstate, setalertstate] = useState({state: false,msg: "gzegz",color: "#2196F3",});
  const [nameEng1,setnameEng1]=useState('')
  const [nameEng2,setnameEng2]=useState('')

  /*************************UseEffects************************/
  /***********************************************************/
  /**********************************************************/
  useEffect(() => {
    getTier1();
  }, [sectionSP]);
  useEffect(() => {
    getTier1();
    getTier2();
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
  const onchangeHandler1 = (e) => {
    setTier2(e.target.value);
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
      .post(`${url}tier/AaddTier1`, { name: tier1, section: sectionSP ,nameEng:nameEng1})
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
  /**********************************************************************/
  /********************nzid tier 2***************************************/
  /**********************************************************************/
  const addTier2 = async () => {
    if(tier2==='None'){
      setalertstate({state:true,msg:'saisie un tier2',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }else if(selectedSelect.length===0){
      setalertstate({state:true,msg:'selection tier pour ajoute ta7tha tier 2',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }
    else{
      await axios
      .post(`${url}tier/AaddTier2`, { name: tier2, tier1id: selectedSelect,nameEng:nameEng2 })
      .then((response) => {
        getTier2()
      });
      setalertstate({state:true,msg:'Tier2 a éte enregistre',color:'#4CAF50'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
    },4000)
  };
    }
  /************************************************************/
/*************************************njib tier 1*************/  
/************************************************************/
  const getTier1 = async () => {
    const data = await axios.post(`${url}tier/getTier1`, {
      section: sectionSP,
    });
    let NewTier1Array=data.data.data.map((e) => (<option value={e._id} key={e._id}>{e.name}</option>))
    settier1Display([...NewTier1Array]);
  };
    /************************************************************/
/*************************************njib tier 2*************/  
/************************************************************/
  const getTier2 = async () => {
    const data1 = await axios.post(`${url}tier/getTier2`, {
      id: selectedSelect,
    });
    if (Array.isArray(data1.data.data)) {
      settier2Display(
        data1.data.data[0].tier2.map((e) => (
          <option value={e._id} key={e._id}>
            {e.name}
          </option>
        ))
      );
    }
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
function onchangeHandlereng2(e){
  setnameEng2(e.target.value)
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
        <div className={style.inputContainer}>
          <Input name="tier1Select" fn1={onchangeHandler}></Input><Input name="tier1Select Eng" fn1={onchangeHandlereng1} ></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={addTier1}>
            Ajouter
          </button>
        </div>
        <h1>niveau 2</h1>
        <select
          className={style.selectStyle}
          className={style.selectcss}
          onChange={getSelectselect}
        >
          <option value="None">choisir un elemnt</option>
          {tier1Display}
        </select>
        <select className={style.selectStyle} className={style.selectcss}>
          <option value="None">choisir un elemnt</option>
          {tier2Display}
        </select>
        <div className={style.inputContainer}>
         <Input name="tier2Select" fn1={onchangeHandler1}></Input><Input name="tier2Select Eng" fn1={onchangeHandlereng2} ></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={addTier2}>
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};
export default Add;

/*************************************************** */
