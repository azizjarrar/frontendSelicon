import React ,{useState} from "react";
import style from "./ourHistory.module.css";
import {useSelector} from 'react-redux'
import {differntlang} from '../globalVar/var'

function OurHistory(){
    var lang = useSelector((state)=>state.reducerlang.lang)
        var language={
            l1Header:differntlang.OurHistory.OurHistory1.title.fr,
            l2Header:differntlang.OurHistory.OurHistory2.title.fr,
            l3Header:differntlang.OurHistory.OurHistory3.title.fr,
            l4Header:differntlang.OurHistory.OurHistory4.title.fr,
            l4HeaderDescription1:differntlang.OurHistory.OurHistory1.description.fr,
            l4HeaderDescription2:differntlang.OurHistory.OurHistory2.description.fr,
            l4HeaderDescription3:differntlang.OurHistory.OurHistory3.description.fr,
            l4HeaderDescription4:differntlang.OurHistory.OurHistory4.description.fr
        }

        console.log(language)
    if(lang==="ang"){
        language={
                l1Header:differntlang.OurHistory.OurHistory1.title.eng,
                l2Header:differntlang.OurHistory.OurHistory2.title.eng,
                l3Header:differntlang.OurHistory.OurHistory3.title.eng,
                l4Header:differntlang.OurHistory.OurHistory4.title.eng,
                l4HeaderDescription1:differntlang.OurHistory.OurHistory1.description.eng,
                l4HeaderDescription2:differntlang.OurHistory.OurHistory2.description.eng,
                l4HeaderDescription3:differntlang.OurHistory.OurHistory3.description.eng,
                l4HeaderDescription4:differntlang.OurHistory.OurHistory4.description.eng
            }
        
    }
    return (
        <div id="ourHistoryContainerid" className={style.ourHistoryContainer}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={style.space}></div>
            <div className={style.spacing}><h2 className={style.h2center}>{language.l1Header}</h2><p className={style.pstyleys}><span class="fa fa-star checked"></span>{language.l4HeaderDescription1} 15</p></div>
            <div className={style.spacing}><h2 className={style.h2center}>{language.l2Header}</h2><p className={style.pstyleys}><span class="fa fa-star checked"></span>{language.l4HeaderDescription2} 44</p></div>
            <div className={style.spacing}><h2 className={style.h2center}>{language.l3Header}</h2><p className={style.pstyleys}><span class="fa fa-star checked"></span>{language.l4HeaderDescription3} 3</p></div>
            <div className={style.spacing}><h2 className={style.h2center}>{language.l4Header}</h2><p className={style.pstyleys}><span class="fa fa-star checked"></span>204 </p></div>
            <div className={style.space}></div>
        </div>
    )
}
export default OurHistory