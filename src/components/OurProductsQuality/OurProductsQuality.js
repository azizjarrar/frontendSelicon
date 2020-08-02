
import React from "react";
import style from "./OurProductsQuality.module.css";
import {useSelector} from 'react-redux'
import {differntlang} from '../globalVar/var'
import pp from './116692750_332966394774856_1622311790078526347_n.png'
function OurProductsQuality() {
    var lang = useSelector(state=>state.reducerlang.lang)
    var language={
      Presentation:differntlang.Presentation.PresentationHeader.fr,
      insidePresentation:differntlang.Presentation.insidePresentation.fr
    }

    if(lang==="ang"){
       language={
        Presentation:differntlang.Presentation.PresentationHeader.eng,
        insidePresentation:differntlang.Presentation.insidePresentation.eng
      }
    }
  return (
    <div id="ourproductQality" className={style.OurProductsQuality}>
      {/*<img src={pp} className={style.pp} />*/}
      <div className={style.header}>
        <h2 className={style.h2styuling23}>{language.Presentation}</h2>
        <p className={style.pstylying2}>
      {language.insidePresentation}
        </p>
        </div>
        <div className={style.chya3mlouDiscrption}>
          <div className={style.card}>
            <div className={style.h2Container}><h2 className={style.h2insideDsicprtion}>Extrusion</h2></div>
            <div className={style.centringp1}>
              <ul>
            <li><p className={style.pstyling}>Joint en Caoutchouc Spongieux et compact pour l’industrieAutomobile et industrie divers.</p></li>
            <li> <p className={style.pstyling}>Joint, Tuyau et Profilé en Silicone pour le secteur Industriel,Médical, Electrique, et Electronique.</p></li>
            </ul>
            </div>
          </div>
          <div className={style.card}>
            
          <div><h2 className={style.h2insideDsicprtion}>Compression </h2></div>
          <div className={style.centringp}>
            <ul>
          <li><p className={style.pstyling}>Joints en Silicone ou Caoutchouc pour différent industries et surtoutpour l’industrie des filtres automobile.</p></li>
          </ul>
          </div>
          </div>
          <div className={style.card}>
          <div><h2 className={style.h2insideDsicprtion}>Découpage </h2></div>
          <div className={style.centringp}>
            <ul>
          <li><p className={style.pstyling}>Des pièces en Silicone ou en caoutchouc pour diverses industries et surtout pour l’industrie automobile.</p></li>
          </ul>
          </div>
          </div>
        </div>
    </div>
  );
}
export default OurProductsQuality;
