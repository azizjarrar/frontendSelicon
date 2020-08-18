import React, { useState, useEffect } from "react";
import Input from "../../../elements/input/input";
import { url } from "../../../globalVar/var";
import axios from "axios";
import style from "./delete.module.scss";
import Alert from "../../../elements/alert/alert";

const Delete = () => {
  const [tier1Display, settier1Display] = useState([]);
  const [tier2Display, settier2Display] = useState([]);
  const [selectedSelect2, setselectedSelect2] = useState("");
  const [selectedSelect1, setselectedSelect1] = useState("");
  const [selectedSelect0, setselectedSelect0] = useState("");
  const [sectionSP, setsection] = useState("Silicone");
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("None");
  const [alertstate, setalertstate] = useState({state: false,msg: "gzegz",color: "#2196F3",});
    /******************************************************/
  /******************useEffect***************************/
  /******************************************************/
  useEffect(() => {
    getTier2();
  }, [selectedSelect1]);
  const getSelectselect2 = (e) => {
    setselectedSelect2(e.target.value);
    setinput2(e.target.value);
  };

  useEffect(() => {
    getTier1();
  }, [sectionSP]);

  useEffect(() => {
    document.getElementById("silicon").checked = true;
    getTier1();
  }, []);
  /******************************************************/
  /******************jib tier 1 ou 2**********************/
  /******************************************************/
  const getTier1 = async () => {
    const data = await axios.post(`${url}tier/getTier1`, {
      section: sectionSP,
    });

    settier1Display(
      data.data.data.map((e) => (
        <option value={e._id} key={e._id} name={e.name}>
          {e.name}
        </option>
      ))
    );
  };
  const getTier2 = async () => {
    const data1 = await axios.post(`${url}tier/getTier2`, {
      id: selectedSelect1,
    });
    if (Array.isArray(data1.data.data)) {
      settier2Display(
        data1.data.data[0].tier2.map((e) => (
          <option value={e._id} key={e._id} name={e.name}>
            {e.name}
          </option>
        ))
      );
    }
  };

  /******************************************************/
  /*i gamer ena select 5tart ou i 7out id fil input******/
  /******************************************************/
  const getSelectselect0 = (e) => {
    setselectedSelect0(e.target.value);
    setinput1(e.target.value);
  };

  const getSelectselect1 = (e) => {
    setselectedSelect1(e.target.value);
  };
  /******************************************************/
  /**********fasa5 tier 1 wala tier 2*********************/
  /******************************************************/
  const deleteTier = async () => {
    if(input1.length===0){
      setalertstate({state:true,msg:'selectione Tier1 a supprime',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }else{
      const data = await axios.post(`${url}items/Itemdelete`, {
        tier1id: input1,
      });
      setalertstate({state:true,msg:'tier1   a éte supprime',color:'#4CAF50'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
    },4000)
    }
 
  };
  const deleteTier1 = async () => {
    if(input2==="None"){
      setalertstate({state:true,msg:'selectione Tier2 a supprime',color:'#ff9800'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
      }, 4000);
      return
    }else{
      const data = await axios.post(`${url}items/Itemdelete`, {
        tier1id: selectedSelect1,
        tier2id: input2,
      });
      setalertstate({state:true,msg:'tier2 a éte supprime',color:'#4CAF50'})
      setTimeout(() => {
        setalertstate({state:false,msg:''})
    },4000)
    }

  };
  /*******************************************************/
  /**********i badel section selecon wala kawetchou********/
  /********************************************************/
  const radioboxHandler = (e) => {
    setsection(e.target.value);
  };

  return (
    <div className={style.deletContainer}>
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
        <select className={style.selectcss} onChange={getSelectselect0}>
          <option>choisire un elemnet</option>
          {tier1Display}
        </select>

        <div className={style.inputContainer}>
          <Input name="tier1" value={input1}></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={deleteTier}>
            efface
          </button>
        </div>
        <h1>niveau 2</h1>
        <select className={style.selectcss} onChange={getSelectselect1}>
          <option>choisire un elemnet</option>
          {tier1Display}
        </select>
        <select className={style.selectcss} onChange={getSelectselect2}>
          <option>choisire un elemnet</option>
          {tier2Display}
        </select>
        <div className={style.inputContainer}>
          <Input name="tier2" value={input2}></Input>
        </div>
        <div className={style.btncontainer}>
          <button className={style.btn} onClick={deleteTier1}>
            efface
          </button>
        </div>
      </div>
    </div>
  );
};
export default Delete;
