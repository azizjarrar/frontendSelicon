import React, { useState, useEffect } from "react";
import Input from "../../elements/input/input";
import Table from '../../elements/table/table'
import pp from ".././g5-patin-silicone-demi-sphere.jpg";
import style from "./AdminDashbored.module.css";
import { url } from "../../globalVar/var";
import axios from "axios";
import Alert from '../../elements/alert/alert'
const AdminDashbored = () => {
  const [photo, setPhoto] = useState(pp);
  const [sectionSP, setsection] = useState("silicon");
  const [tier2Display, settier2Display] = useState([]);
  const [tier1Display, settier1Display] = useState([]);
  const [selectedSelect, setselectedSelect] = useState("");
  const [selectedSelect1, setselectedSelect1] = useState("None");
  const [PhotoDataAppend,setPhotoDataAppend]= useState('')
  const [Discription,setDiscription]=useState('default')
  const [Titre,setTitre]=useState('default')
  const [state,setState]=useState({'R4tier2':''})
  const [alertstate,setalertstate]=useState({state:false,msg:'gzegz',color:'#2196F3'})
  const changeHandler=(e)=>{
    const {name,value}=e.target
    setState((oldstate)=>{
      return {...oldstate,[name]:value}
    })
    console.log(state)
  }
  useEffect(() => {
    document.getElementById("silicon").checked = true;
  }, []);

  const getSelectselect1 = (e) => {
    setselectedSelect1(e.target.value);
  };
  useEffect(() => {
    getTier1()
  },[sectionSP])
  useEffect(() => {
    getTier1();
    getTier2();
  }, [selectedSelect]);
  const getSelectselect = (e) => {
    setselectedSelect(e.target.value);
  };
  const addTier = async () =>{
   if(PhotoDataAppend.length===0){
    setalertstate({state:true,msg:'saisie un images',color:'#ff9800'})
    setTimeout(() => {
      setalertstate({state:false,msg:''})
    }, 4000);
    return
   }else if(Discription==="default"){
    setalertstate({state:true,msg:'saisie une Discription',color:'#ff9800'})
    setTimeout(() => {
      setalertstate({state:false,msg:''})
    }, 4000);
    return
   }else if(Titre==="default"){
    setalertstate({state:true,msg:'saisie un Titre',color:'#ff9800'})
    setTimeout(() => {
      setalertstate({state:false,msg:''})
    }, 4000);
    return
   }else if(selectedSelect.length===0){
    setalertstate({state:true,msg:'Select un Tier',color:'#ff9800'})
    setTimeout(() => {
      setalertstate({state:false,msg:''})
    }, 4000);
    return
   }else{
    let formData = new FormData();  
    formData.append('file',PhotoDataAppend)
    formData.append('name', Titre)
    formData.append('tier1id', selectedSelect)
    formData.append('tier2id', selectedSelect1)
    formData.append('Description', Discription)
    formData.append('table', JSON.stringify(state))
    const data = await axios.post(`${url}items/Itemadd`, formData);
    setalertstate({state:true,msg:'Article a été enregistrée',color:'#4CAF50'})
    setTimeout(() => {
      setalertstate({state:false,msg:''})
    }, 4000);
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
  };
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

  };
  function photoDisplay(e) {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    setPhotoDataAppend(e.target.files[0])
  }
  const radioboxHandler = (e) => {
    setsection(e.target.value);
  };


  function Discriptioninput(e){
    setDiscription(e.target.value)
  }
  function TitreInput(e){
    setTitre(e.target.value)
  }
  return (
    <div className={style.leftside}>
      {alertstate.state&&<Alert msg={alertstate.msg} color={alertstate.color}></Alert>}
      <div className={style.h2cssadminContainer}>
        <h2 className={style.h2cssadmin}>Ajoute un article</h2>
      </div>
      <div className={style.title}>
        <Input name="Titre" fn1={TitreInput}></Input>
      </div>
      <div className={style.litelDescription}>
        <Input name="Description" fn1={Discriptioninput}></Input>
      </div>
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
      <div className={style.tier}>
        <select className={style.selectcss} onChange={getSelectselect}>
          <option>None</option>
          {tier1Display}
        </select>
      </div>
      <div className={style.tier}>
        <select className={style.selectcss} onChange={getSelectselect1}>
          <option value="None">None</option>
          {tier2Display}
        </select>
      </div>
      <div className={style.tableData}>
      <Table fn1={changeHandler}></Table>
      </div>

      <div className={style.displayimageBTNContainer}>
        <div className={style.filebuttoncss}>
          <label for="file" className={style.labelfile}>
            <p className={style.Pinputfile}>choisir un photo...</p>
          </label>
          <input
            name="file"
            type="file"
            className={style.inputfile}
            onChange={(e) => photoDisplay(e)}
          ></input>
        </div>
      </div>
      <div className={style.imageDisplay}>
        <img src={photo} className={style.imageCss} alt="gezgzé" />
      </div>
      <div className={style.btncontainer}>
        <button className={style.btn} onClick={addTier}>Ajouter</button>
      </div>
    </div>
  );
};
export default AdminDashbored;
