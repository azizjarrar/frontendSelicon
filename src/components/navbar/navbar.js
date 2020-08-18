import React ,{useState,useEffect}from 'react';
import style from "./navbar.module.scss";
import {differntlang} from '../globalVar/var'
import {useSelector} from 'react-redux'
function Navbar(){
    let navbar =differntlang['navbar']
/*
    const [state,setState]=useState({
        one:navbar.one.fr,
        two:navbar.two.fr,
        three:navbar.three.fr,
        four:navbar.four.fr
    })
*/
var langggg={
    one:navbar.one.fr,
    two:navbar.two.fr,
    three:navbar.three.fr,
    four:navbar.four.fr
}
    const lang = useSelector(state=>state.reducerlang.lang)

    if(lang==="ang"){
        langggg={
                one:navbar.one.eng,
                two:navbar.two.eng,
                three:navbar.three.eng,
                four:navbar.four.eng
        }
    }
    
    return (
        <div id="navbarBackgroundColor" className={style.navbarContainer}>
           <div className={style.logo}><h1>MEA Silicone</h1></div>
           <div className={style.pStyleDiv}><a class="aStylehref" href="#home">{langggg.one}</a></div>
           <div className={style.pStyleDiv}><a class="aStylehref" href="#description" >{langggg.two}</a></div>
           <div className={style.pStyleDiv}><a class="aStylehref" href="#ourProducts" >{langggg.three}</a></div>
    <div className={style.pStyleDiv}><a class="aStylehref" href="#contactUs" >{langggg.four}</a></div>
        </div>
    )
}

export default Navbar;