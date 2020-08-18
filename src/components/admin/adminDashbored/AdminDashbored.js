import React, { useState, useEffect } from "react";
import Input from "../../elements/input/input";
import Table from '../../elements/table/table'
import pp from ".././g5-patin-silicone-demi-sphere.jpg";
import style from "./AdminDashbored.module.scss";
import { url } from "../../globalVar/var";
import axios from "axios";
import Alert from '../../elements/alert/alert'
const AdminDashbored = () => {
  const [photo, setPhoto] = useState(pp);
  const [sectionSP, setsection] = useState("Silicone");
  const [tier2Display, settier2Display] = useState([]);
  const [tier1Display, settier1Display] = useState([]);
  const [selectedSelect, setselectedSelect] = useState("");
  const [selectedSelect1, setselectedSelect1] = useState("None");
  const [PhotoDataAppend,setPhotoDataAppend]= useState('')
  /********************fr************************ */
  const [Discription,setDiscription]=useState('default')
  const [Titre,setTitre]=useState('default')
  const [discriptionkbiraV,setdiscriptionkbira]=useState('default')

  /*****************eng******************************* */
  const [TitreEng,setTitreEng]=useState('default')
  const [DiscriptionEng,setDiscriptionEng]=useState('default')
  const [discriptionkbiraEngv,setdiscriptionkbiraEng]=useState('default')

  const [alertstate,setalertstate]=useState({state:false,msg:'gzegz',color:'#2196F3'})

  /***************************use efect *****************************************/
  useEffect(() => {
    document.getElementById("Silicone").checked = true;
  }, []);
  useEffect(() => {
    getTier1()
  },[sectionSP])
  useEffect(() => {
    getTier1();
    getTier2();
  }, [selectedSelect]);
    /********************************************************************/
    /******************************Ajouter Tier***********************************/
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
       formData.append('tier1id', selectedSelect)
       formData.append('tier2id', selectedSelect1)
       /***************FR************* */
       formData.append('name', Titre)
       formData.append('Description', Discription)
       formData.append('bigDescription', discriptionkbiraV)
       /**************ENG**************** */
       formData.append('nameEng', TitreEng)
       formData.append('DescriptionEng', DiscriptionEng)
       formData.append('bigDescriptionEng', discriptionkbiraEngv)
       const data = await axios.post(`${url}items/Itemadd`, formData);
       setalertstate({state:true,msg:'Article a été enregistrée',color:'#4CAF50'})
       setTimeout(() => {
         setalertstate({state:false,msg:''})
       }, 4000);
      }
   
   
     }
     /******************************************************************************/
 

  const getSelectselect1 = (e) => {
    setselectedSelect1(e.target.value);
  };

  const getSelectselect = (e) => {
    setselectedSelect(e.target.value);
  };
  
  /****************************jib tier1 et 2*****************************************/
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
  /********************************************************************/
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
  function DiscriptioninputEng(e){
    setTitreEng(e.target.value)
  }
  function TitreInputEng(e){
    setDiscriptionEng(e.target.value)
  }
  function discriptionkbira(e){
    setdiscriptionkbira(e.target.value)
  }
  function discriptionkbiraEng(e){
    setdiscriptionkbiraEng(e.target.value)
  }
  return (
    <div className={style.leftside}>
      {alertstate.state&&<Alert msg={alertstate.msg} color={alertstate.color}></Alert>}
      <div className={style.h2cssadminContainer}>
        <h2 className={style.h2cssadmin}>Ajoute un article</h2>
      </div>
      
      <div className={style.title}>
        <Input name="Titre" fn1={TitreInput}></Input>
        <Input name="TitreEng" fn1={TitreInputEng}></Input>
      </div>
      <div className={style.litelDescription}>
        <Input name="Mini Description" fn1={Discriptioninput}></Input>
        <Input name="Mini DescriptionEng" fn1={DiscriptioninputEng}></Input>

      </div>
      <div className={style.radiobox}>
        <label class="container">
        Silicone
          <input
            id="Silicone"
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
      <div className={style.textArea}>
        <textarea className={style.textareaStyle} placeholder="description en francais" onChange={discriptionkbira}></textarea>
        <textarea className={style.textareaStyle} placeholder="description en anglais" onChange={discriptionkbiraEng}></textarea>
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
