import React from "react";
import style from "./contactus.module.css";
function ContactUs() {
  return (
    <div id="contactUs" className={style.contactUs}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className={style.contactusContainer}>
        <div className={style.contacusP}>
          <h2 className={style.nameclasing}>CONTACT</h2>
          <ul className={style.ulstyleying}>
            <li>Contactez Nous ( 216 71 390 304 )</li>
            <li>commercial-mea@measilicone.com</li>
            <li>77 Rue Montagne Atlas Jbel Jloud, Sidi Fathallah 2023 Tunis</li>
          </ul>
        </div>
        <div className={style.contacusP}>
        <h2 className={style.nameclasing}>NAVIGATION</h2>

          <ul className={style.ulstyleying}>
            <li>Home</li>
            <li>Presentation</li>
            <li>nos product</li>
            <li>Contact</li>
          </ul>
        </div>
{       /* <div className={style.contacusP}>
        <h2 className={style.nameclasing}>ADRESSE DE LIVRAISON</h2>
          <ul className={style.ulstyleying}>
            <li>gezg</li>
            <li>gzeg</li>
            <li>gzeg</li>
            <li>gzeg</li>
            <li>gzeg</li>
          </ul>
  </div>*/}
        <div className={style.ahahha}>
        <div className={style.iconsConTainer}>
        <div><a href="#her" class="fa fa-facebook">{``}</a></div>
        <div><a href="#her" class="fa fa-twitter">{``}</a></div>
        <div><a href="#her" class="fa fa-linkedin">{``}</a></div>
        <div><a href="#hre" class="fa fa-instagram">{``}</a></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
