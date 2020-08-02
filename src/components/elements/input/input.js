
import React from "react";
import style from './input.module.css'
const InputC = (props) => {
  return (
    <div className={style.inputdiv}>
      <input type="text" name={props.name} value={props.value} autoComplete="off" onChange={(e)=>props.fn1(e)} required/>
      <label for={props.name} className={style.labelname}>
        <span className={style.contentName}>{props.name}</span>
      </label>
    </div>
  );
};
export default InputC;
