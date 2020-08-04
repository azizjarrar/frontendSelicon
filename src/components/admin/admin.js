import React, { useState } from "react";
import style from "./admin.module.css";
import Navbar from "./navbar/navbar";
import Contact from "../contactUs/contactUs";
import Add from "./tier/add/add";
import Update from "./tier/update/update";
import Delete from "./tier/delete/delete";
import AdminDashbored from "./adminDashbored/AdminDashbored"
const Admin = (props) => {
  const [page, setPage] = useState("AjouterArticle");
  
  const changepage = (data) => {
    if (data === "Ajouter") {
      setPage("Ajouter");
    } else if (data === "Modifier") {
      setPage("Modifier");
    }else if(data === "AjouterArticle"){
      setPage("AjouterArticle")
    } else {
      setPage("Supprime");
    }
  };
  //Supprime

  return (
    <div className={style.adminContainer}>
      <Navbar {...props}></Navbar>
      <div className={style.HeaderTop}>
        <div className={style.khat1}>
          <div className={style.khatwe7ed}></div>
        </div>
        <div className={style.containerHeader}>
          <h1>
            <span>Measilicone</span>
          </h1>
        </div>
        <div className={style.khat2}>
          <div className={style.khatwe7ed}></div>
        </div>
      </div>
      <div className={style.adminDashboredContainer}>
    
        <div className={style.NavBar}>
        <div className={style.Header}>
            <div className={style.DashboredTitleContainer}><h2 className={style.DashboredTitle}>Admin Dashbored</h2></div>
            <button className={style.buttonstyle1} onClick={e=>changepage("AjouterArticle")}>Ajouter un article</button>
            <button className={style.buttonstyle0} onClick={e=>changepage("Ajouter")}>Ajouter un Tier</button>
            <button className={style.buttonstyle2} onClick={e=>changepage("Modifier")}>Modifier un Tier</button>
            <button className={style.buttonstyle3} onClick={e=>changepage("Supprime")}>Supprime un Tier</button>


          </div>
        </div>
          <div className={style.DashboredContent}>
          {page==="AjouterArticle"&&<AdminDashbored></AdminDashbored>}
          {page==="Ajouter"&&<Add></Add>}
          {page==="Modifier"&&<Update></Update>}
          {page==="Supprime"&&<Delete></Delete>}
          </div>
      </div>
      <Contact></Contact>
    </div>
  );
};
export default Admin;

/**
 * 
 *     
 * 
 * 
 *                 <div className={style.filebuttoncss}>
                <label for="file" className={style.labelfile}><p className={style.Pinputfile}>choisir un photo...</p></label>
                <input name="file" type="file" className={style.inputfile} onChange={e=>photoDisplay(e)}></input>
              </div>
 */
