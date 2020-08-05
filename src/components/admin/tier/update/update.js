import React, { useState, useEffect } from "react";
import Input from "../../../elements/input/input";
import { url } from "../../../globalVar/var";
import axios from "axios";
import style from "./update.module.css";
import Alert from "../../../elements/alert/alert";

const Update = () => {
  const [tier1, setTier1] = useState("None");
  const [tier2, setTier2] = useState("None");
  const [sectionSP, setsection] = useState("silicon");
  const [tier1Display, settier1Display] = useState([]);
  const [tier2Display, settier2Display] = useState([]);
  const [selectedSelect2, setselectedSelect2] = useState("");
  const [selectedSelect1, setselectedSelect1] = useState("");
  const [selectedSelect0, setselectedSelect0] = useState("");
  const [alertstate, setalertstate] = useState({
    state: false,
    msg: "gzegz",
    color: "#2196F3",
  });

  const onchangeHandler1 = (e) => {
    setTier2(e.target.value);
  };
  const onchangeHandler0 = (e) => {
    setTier1(e.target.value);
  };
  const getSelectselect0 = (e) => {
    setselectedSelect0(e.target.value);
  };

  const getSelectselect1 = (e) => {
    setselectedSelect1(e.target.value);
  };
  const getSelectselect2 = (e) => {
    setselectedSelect2(e.target.value);
  };
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
  };
  const radioboxHandler = (e) => {
    setsection(e.target.value);
  };
  const getTier2 = async () => {
    const data1 = await axios.post(`${url}tier/getTier2`, {
      id: selectedSelect1,
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
  const changetier1Title0 = async () => {
    if(tier1==='None'){
      setalertstate({state:true,msg:'saisie  le Nouveau Tier nom',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }else if(selectedSelect0.length===0){
      setalertstate({state:true,msg:'selection tier pour le modifie',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }
    else{
      const data1 = await axios.post(`${url}tier/MaddTier1`, {
        id: selectedSelect0,
        newname: tier1,
      }).then(()=>getTier1());
      setalertstate({state:true,msg:'tier1 Nom  a éte modifie',color:'#4CAF50'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
    },4000)
    }

    
  };
  const changetier2Title1 = async () => {
    if(tier2==='None'){
      setalertstate({state:true,msg:'saisie  le Nouveau Tier nom',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }else if(selectedSelect2.length===0){
      setalertstate({state:true,msg:'selection tier pour le modifie',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    } 
    else{
      const data1 = await axios.post(`${url}tier/MaddTier2`, {
        id: selectedSelect2,
        newname: tier2,
      }).then(()=>getTier2());
    }

    
  };
  useEffect(() => {
    getTier1();
  }, [sectionSP]);
  useEffect(() => {
    console.log("tbadel");
    getTier2();
  }, [selectedSelect1]);

  useEffect(() => {
    document.getElementById("silicon").checked = true;
    getTier1();
  }, []);
  return (
    <div className={style.deletContainer}>
      {alertstate.state && (
        <Alert msg={alertstate.msg} color={alertstate.color}></Alert>
      )}

      <div className={style.display}>
        <h1>Tier 1</h1>
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
              type="radio"
              name="radio"
              value="plastic"
              onChange={radioboxHandler}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <select className={style.selectcss} onChange={getSelectselect0}>
          <option>choisire un element</option>
          {tier1Display}
        </select>
        <div className={style.inputContainer}>
          <Input name="tier1" fn1={onchangeHandler0}></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={changetier1Title0}>
            Mise a Jour Tier1
          </button>
        </div>
        <h1>Tier 2</h1>
        <select className={style.selectcss} onChange={getSelectselect1}>
          <option>choisire un element</option>
          {tier1Display}
        </select>
        <select className={style.selectcss} onChange={getSelectselect2}>
          <option>choisire un element</option>
          {tier2Display}
        </select>
        <div className={style.inputContainer}>
          <Input name="tier2" fn1={onchangeHandler1}></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={changetier2Title1}>
            Mise a Jour
          </button>
        </div>
      </div>
    </div>
  );
};
export default Update;
