import React ,{useState, useEffect} from "react";
import style from "./viewupdate.module.scss";
import Input from "../elements/input/input";
import { url } from "../globalVar/var";
import axios from 'axios'
const Viewupdate = (props) => {
    const [photo, setPhoto] = useState(url);

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
    /*****************usestate*****************************************/
    useEffect( ()=>{
        const data =  axios.post(`${url}items/searchOneItem`, {
            id: props.idData,
          }).then(res=>{
            setTitre(res.data.data.name)
            setdiscriptionkbira(res.data.data.nameEng)
            setDiscription(res.data.data.Description)
            setTitreEng(res.data.data.DescriptionEng)
            setDiscriptionEng(res.data.data.bigDescription)
            setdiscriptionkbiraEng(res.data.data.bigDescriptionEng)
            setPhoto((e)=>e+res.data.data.url)
              
          });
    },[])

    /*******************************************************************/
    function photoDisplay(e) {
        if(e.target.files[0]!=undefined && e.target.files[0]!=null){
          setPhoto(URL.createObjectURL(e.target.files[0]));
          setPhotoDataAppend(e.target.files[0])
        }
    
      }
      /**************************************************************/
      const update=async ()=>{
        let formData = new FormData();  
        formData.append('id',props.idData)
       formData.append('file',PhotoDataAppend)
       /***************FR************* */
       formData.append('name', Titre)
       formData.append('Description', Discription)
       formData.append('bigDescription', discriptionkbiraV)
       /**************ENG**************** */
       formData.append('nameEng', TitreEng)
       formData.append('DescriptionEng', DiscriptionEng)
       formData.append('bigDescriptionEng', discriptionkbiraEngv)
       await axios.post(`${url}items/itemUpdate`, formData);
       window.location.reload();

      }
    /*******************************************************************/
    function TitreInput(e){
      setTitre(e.target.value)
    }
    function Discriptioninput(e){
        setDiscription(e.target.value)
      }
      function discriptionkbira(e){
        setdiscriptionkbira(e.target.value)
      }
      function DiscriptioninputEng(e){
        setDiscriptionEng(e.target.value)
      }
      function TitreInputEng(e){
        setTitreEng(e.target.value)
      }
      function discriptionkbiraEng(e){
        setdiscriptionkbiraEng(e.target.value)
      }
  return (
    <div className={style.viewContainer}>
      <div className={style.display}>
      <div className={style.close} onClick={props.fn1}></div>
      <div className={style.Container}>
          <h2>Mise a jour d'un article</h2>
      <div className={style.title}>
        <Input name="Titre" fn1={TitreInput} value={Titre}></Input>
        <Input name="TitreEng" fn1={TitreInputEng} value={TitreEng}></Input>
      </div>
      <div className={style.litelDescription}>
        <Input name="Mini Description" fn1={Discriptioninput} value={Discription}></Input>
        <Input name="Mini DescriptionEng" fn1={DiscriptioninputEng} value={DiscriptionEng}></Input>
      </div>
      <h2>Mise a jour de description</h2>
      <div className={style.textArea}>
        <textarea className={style.textareaStyle} placeholder="description en francais" onChange={discriptionkbira} value={discriptionkbiraV}></textarea>
        <textarea className={style.textareaStyle} placeholder="description en anglais" onChange={discriptionkbiraEng} value={discriptionkbiraEngv}></textarea>
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
        <button className={style.btn} onClick={update}>mise a jour</button>
      </div>
      </div>
      </div>

    </div>
  );
};
export default Viewupdate;
