import React, { useState } from "react";
import style from "./OurProductsQuality.module.scss";
import { useSelector ,useDispatch} from "react-redux";
import { differntlang } from "../globalVar/var";
import imgLogocompantStyle from './image/book-731199_1920.jpg'
import imgLogocompantStyle1  from './image/technology-1008392_1920.jpg'
import imgLogocompantStyle2 from './image/hw-john-deere-35-zts-excavator-boom-seal-kit.jpg'
import imgLogocompantStyle3 from './image/silicone-rubber-heater-insulation.jpg'
import changeEDC from '../../redux/action/changeECD'
function OurProductsQuality(props) {
  const [display,setDisplay]=useState(false)
  const [display1,setDisplay1]=useState(false)
  const [display2,setDisplay2]=useState(false)
  var dispatching=useDispatch()
  var state = useSelector(s=>s.changeEDCreducer)
  const  Display4image=()=>{
    setDisplay(true)
  }
  const  Display4image1=()=>{
    setDisplay1(true)
  }
  const  Display4image2=()=>{
    setDisplay2(true)
  }
  var lang = useSelector((state) => state.reducerlang.lang);
  var language = {
    header1:differntlang.OurProductsQualty.header1.fr,
    header2:differntlang.OurProductsQualty.header2.fr,
    header3:differntlang.OurProductsQualty.header3.fr,
    header4:differntlang.OurProductsQualty.header4.fr,
    disc1:differntlang.OurProductsQualty.disc1.fr,
    disc2t1:differntlang.OurProductsQualty.disc2.tier1.fr,
    disc2t2:differntlang.OurProductsQualty.disc2.tier2.fr,
    disc3:differntlang.OurProductsQualty.disc3.fr,
    disc4:differntlang.OurProductsQualty.disc4.fr,
  };

  if (lang === "ang") {
    language = {
      header1:differntlang.OurProductsQualty.header1.eng,
      header2:differntlang.OurProductsQualty.header2.eng,
      header3:differntlang.OurProductsQualty.header3.eng,
      header4:differntlang.OurProductsQualty.header4.eng,
      disc1:differntlang.OurProductsQualty.disc1.eng,
      disc2t1:differntlang.OurProductsQualty.disc2.tier1.eng,
      disc2t2:differntlang.OurProductsQualty.disc2.tier2.eng,
      disc3:differntlang.OurProductsQualty.disc3.eng,
      disc4:differntlang.OurProductsQualty.disc4.eng,
    };
  }
  const GotoSilicone=(e)=>{
    dispatching(changeEDC(e))
    props.routerProps.history.push('/product/Silicone')


  }
 const  GotoCaoutchouc=(e)=>{
  dispatching(changeEDC(e))
  props.routerProps.history.push('/product/Caoutchouc')


  }
  return (
    <div id="ourproductQality" className={style.OurProductsQuality}>
      <div className={style.whoweareContainer} >

        <div className={style.whoweare} >

          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle} ></img>
          <div className={style.Bigbox} >
            <h1 className={style.h1Header}>{language.header1}</h1>
            <div className={style.pContainer}><div className={style.gzegzg}><p>
            {language.disc1}
            </p></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Extrusion}>
      <div className={style.whoweare} onMouseEnter={Display4image}>
      {display&&<div className={style.animation1}><h2 onClick={e=>GotoSilicone('Extrusion')}>Silicone</h2></div>}
            {display&&<div className={style.animation2}><h2 onClick={e=>GotoCaoutchouc('Extrusion')}>Caoutchouc</h2></div>}
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle1}></img>
          <div className={style.Bigbox} >
            <h1 className={style.h1Header}>{language.header2}</h1>
            <div className={style.pContainer1}><div className={style.gzegzg1}>
              <p className={style.leftp}>
              {language.disc2t1}
            </p>
            <p className={style.leftp}>
            {language.disc2t2}
            </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Compression}>
      <div className={style.whoweare} onMouseEnter={Display4image1}>
      {display1&&<div className={style.animation1}><h2 onClick={e=>GotoSilicone('Compression')}>Silicone</h2></div>}
            {display1&&<div className={style.animation2}><h2 onClick={e=>GotoCaoutchouc('Compression')}>Caoutchouc</h2></div>}
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle3}></img>
          <div className={style.Bigbox} >
            <h1 className={style.h1Header}>{language.header3}</h1>
            <div className={style.pContainer}><div className={style.gzegzg}><p>
            {language.disc3}
            </p></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Decoupage}>
      <div className={style.whoweare} onMouseEnter={Display4image2}>
          {display2&&<div className={style.animation1}><h2 onClick={e=>GotoSilicone('Decoupage')}>Silicone</h2></div>}
            {display2&&<div className={style.animation2}><h2 onClick={e=>GotoCaoutchouc('Decoupage')}>Caoutchouc</h2></div>}
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle2}></img>
          <div className={style.Bigbox} >
            <h1 className={style.h1Header}>{language.header4}</h1>
            <div className={style.pContainer}><div className={style.gzegzg}>
              <p>
              {language.disc4}
            </p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProductsQuality;
