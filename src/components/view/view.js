import React from 'react'
import style from './view.module.css'
const View = (props)=>{
    console.log(props.idData)
    return(
        <div className={style.viewContainer} >
            <div className={style.display}><div><h1 onClick={props.fn2}>X</h1></div></div>
        </div>
    )
}
export default View