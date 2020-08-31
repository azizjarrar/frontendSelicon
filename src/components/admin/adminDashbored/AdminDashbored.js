import React, { useState, useEffect } from "react";
import Input from "../../elements/input/input";
import pp from ".././g5-patin-silicone-demi-sphere.jpg";
import style from "./AdminDashbored.module.scss";
import { url } from "../../globalVar/var";
import axios from "axios";
import Alert from '../../elements/alert/alert'
const AdminDashbored = () => {
  const [photo, setPhoto] = useState(pp);
  const [sectionSP, setsection] = useState("Silicone");
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
  }, [selectedSelect]);
  useEffect(()=>{

  },[tier1Display])
    /********************************************************************/
    /******************************Ajouter Tier***********************************/
    const addTier = async () =>{
      if(selectedSelect1=="None"){
        setalertstate({state:true,msg:'Selectione  une famille',color:'#ff9800'})
        setTimeout(() => {
          setalertstate({state:false,msg:''})
        }, 4000);
        return
      }
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
       setalertstate({state:true,msg:'Selectione une famille',color:'#ff9800'})
       setTimeout(() => {
         setalertstate({state:false,msg:''})
       }, 4000);
       return
      }else{
       let formData = new FormData();  
       formData.append('file',PhotoDataAppend)
       formData.append('ECD', selectedSelect)
       formData.append('tier1id', selectedSelect1)
       formData.append('type',sectionSP)
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
       for(var x=0 ;x<  document.getElementsByTagName('input').length;x++){
        document.getElementsByTagName('input')[x].value=''
      }
      document.getElementsByTagName('textarea')[0].value=''
      document.getElementsByTagName('textarea')[1].value=''
      setPhoto(pp)
      setTitre('default')
      setDiscription('default')
      setdiscriptionkbira('default')
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
      ECD:selectedSelect
    });
    settier1Display(
      data.data.data.map((e) => (
        <option value={e._id} key={e._id}>
          {e.name}
        </option>
      ))
    );
  };

  /********************************************************************/
  function photoDisplay(e) {
    if(e.target.files[0]!=undefined && e.target.files[0]!=null){
      setPhoto(URL.createObjectURL(e.target.files[0]));
      setPhotoDataAppend(e.target.files[0])
    }

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
    setDiscriptionEng(e.target.value)

  }
  function TitreInputEng(e){
    setTitreEng(e.target.value)

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
          <option value="None">choisire un famille</option>
        <option value="Extrusion">Extrusion</option>
          <option value="Compression">Compression</option>
          <option value="Decoupage">Decoupage</option>
        </select>
      </div>
      <div className={style.tier}>
        <select className={style.selectcss} onChange={getSelectselect1}>
          <option value="None">None</option>
          {tier1Display}
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
