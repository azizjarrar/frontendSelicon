import React from "react";
import style from "./OurProductsQuality.module.css";
import { useSelector } from "react-redux";
import { differntlang } from "../globalVar/var";
import imgLogocompantStyle from './image/book-731199_1920.jpg'
import imgLogocompantStyle1  from './image/technology-1008392_1920.jpg'
import imgLogocompantStyle2 from './image/hw-john-deere-35-zts-excavator-boom-seal-kit.jpg'
import imgLogocompantStyle3 from './image/silicone-rubber-heater-insulation.jpg'
function OurProductsQuality() {
  var lang = useSelector((state) => state.reducerlang.lang);
  var language = {
    Presentation: differntlang.Presentation.PresentationHeader.fr,
    insidePresentation: differntlang.Presentation.insidePresentation.fr,
  };

  if (lang === "ang") {
    language = {
      Presentation: differntlang.Presentation.PresentationHeader.eng,
      insidePresentation: differntlang.Presentation.insidePresentation.eng,
    };
  }
  return (
    <div id="ourproductQality" className={style.OurProductsQuality}>
      <div className={style.whoweareContainer}>
        <div className={style.whoweare}>
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle}></img>
          <div className={style.Bigbox}>
            <h1 className={style.h1Header}>Qui sommes nous?</h1>
            <div className={style.pContainer}><div className={style.gzegzg}><p>
               MEA  Manufacturing and Engineering Activities 
              est une entreprise qui œuvre depuis 2001 dans le domaine de la
              fabrication des produits et activités en silicone et caoutchouc 
            </p></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Extrusion}>
      <div className={style.whoweare}>
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle1}></img>
          <div className={style.Bigbox}>
            <h1 className={style.h1Header}>Extrusion</h1>
            <div className={style.pContainer1}><div className={style.gzegzg1}>
              <p className={style.leftp}>
            	-Joint en Caoutchouc Spongieux et compact pour l’industrie Automobile et industrie divers
            </p>
            <p className={style.leftp}>-Joint, Tuyau et Profilé en Silicone pour le secteur Industriel, Médical, Electrique, et Electronique.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Compression}>
      <div className={style.whoweare}>
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle2}></img>
          <div className={style.Bigbox}>
            <h1 className={style.h1Header}>Compression</h1>
            <div className={style.pContainer}><div className={style.gzegzg}><p>
            	Joints en Silicone ou Caoutchouc pour différent industries et surtout pour l’industrie des filtres automobile.
            </p></div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Decoupage}>
      <div className={style.whoweare}>
          <img className={style.imgLogocompantStyle} src={imgLogocompantStyle3}></img>
          <div className={style.Bigbox}>
            <h1 className={style.h1Header}>Decoupage</h1>
            <div className={style.pContainer}><div className={style.gzegzg}><p>
            	Des pièces en Silicone ou en   caoutchouc pour diverses industries et surtout pour l’industrie automobile.
            </p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProductsQuality;
