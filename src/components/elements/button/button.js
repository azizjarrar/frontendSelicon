import React from 'react';
import style from './button.module.css'
function Button(props){
   const goToProduct=()=>{
        props.routerProps.history.push("/product/"+props.route);
    }
    return (
    <button className={style.button} onClick={goToProduct}>
            <p>Show More</p>
    </button>
    )
}
export default Button