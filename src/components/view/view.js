import React, { useEffect, useState } from "react";
import style from "./view.module.css";
import axios from "axios";
import { url } from "../globalVar/var";
import Table from "../elements/table/table"
const View = (props) => {
  const [state, setState] = useState({table:''});
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
   
  }, [state]);
  const getData = async () => {
    const data = await axios.post(`${url}items/searchOneItem`, {
      id: props.idData,
    });
    setState(data.data.data);
  };
  return (
    <div className={style.viewContainer}>
      <div className={style.display}>
        <div className={style.close} onClick={props.fn2}></div>
        <div className={style.leftandright}>
          <div className={style.left}>
            <div className={style.Header}><h2>{state.name}</h2></div>
            <div className={style.Image}><div className={style.imageContainer}><img className={style.imageResize} src={url + state.url} /></div></div>
            <div className={style.Description}><p><span className={style.Descriptionspan}>Description:</span>{state.Description}</p></div>
          </div>
         
          <div className={style.right}><Table tabledata={state.table} view="true"></Table></div>
        </div>
      </div>
    </div>
  );
};
export default View;
