import React, { useEffect, useState } from "react";
import Input from '../elements/input/input'
import style from "./view.module.css";
import axios from "axios";
import { url } from "../globalVar/var";
import { useSelector } from "react-redux";
const View = (props) => {
  const [state, setState] = useState('');
  const [fichtec, setfichtec] = useState("plus de description");
  const [email,setEmail]=useState('')
  const [text,setText]=useState('')
  var lang = useSelector((e) => e.reducerlang.lang);

  useEffect(() => {
    getData();
    if (lang === "ang"||localStorage.getItem('lang')==="ang") {
      setfichtec("more description");
    }
  }, []);
  useEffect(() => {}, [state]);
  const getData = async () => {
    const data = await axios.post(`${url}items/searchOneItem`, {
      id: props.idData,
    });
    setState((e) => {
      return { ...e, ...data.data.data };
    });
  };
  const onchangeHandler1=(e)=>{
    setEmail(e.target.value)
  }
  const onchangeHandler2=(e)=>{
    setText(e.target.value)
  }
  async function  sendmail(){
    const data = await axios.post(`${url}sendEmailEtefsar`,{email:email,text:text,nameArticle:state.name})
  }
  return (
    <div className={style.viewContainer}>
      <div className={style.display}>

        <div className={style.close} onClick={props.fn2}></div>
        <div className={style.leftandright}>
          <div className={style.left}>
            <div className={style.Image}>
              <div className={style.imageContainer}>
                <img className={style.imageResize} src={url + state.url} />
              </div>
            </div>
              <div className={style.Header}>
              <h2>{lang === "ang" ||localStorage.getItem('lang')==="ang"? state.nameEng : state.name}</h2>
            </div>
            <div className={style.Description}>
              <h4>Description</h4>
              <p>
                <span className={style.Descriptionspan}></span>
                {lang === "ang" ||localStorage.getItem('lang')==="ang"? state.DescriptionEng : state.Description}
              </p>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.tabletitleHeader}>
              <h2>{fichtec}</h2>
            </div>
            <div className={style.tableContainer}>
              <textarea
                className={style.cssTextArea}
                value={
                  lang === "ang"||localStorage.getItem('lang')==="ang"
                    ? state.bigDescriptionEng
                    : state.bigDescription
                }
              ></textarea>
            </div>
            <div className={style.contactNos}>
              <div className={style.pEnvoyEmail}><p>Envoye nos un email sur cette article</p></div>
            <Input name="votre email" fn1={onchangeHandler1}></Input>
            <Input name="sujet" fn1={onchangeHandler2}></Input>
            <button className={style.btnSend} onClick={sendmail}><p>Send</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default View;
