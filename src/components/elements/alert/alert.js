import React from 'react'
import style from './alert.module.css'

const Alert = (props)=>{
    return(
     
<div className={`${style.alert} ${style.info}`} style={{backgroundColor:props.color}}>
  <strong>Message:</strong> <p>{`    ${props.msg}`}</p>
</div>
    )
}
export default Alert