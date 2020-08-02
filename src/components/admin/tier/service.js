import { url } from "../../globalVar/var";
import React from "react";
import axios from "axios";

 const getSelectTier1ItemsService=(setTier1)=>{
 
}
const getSelectTier2ItemsService=(setTier2,setSelectedT1,e)=>{
  setSelectedT1(e.target.value)

}
const addSelectOptionService = (Tier1Input,setTier2Select)=>{
     return 
}


export {getSelectTier1ItemsService,getSelectTier2ItemsService,addSelectOptionService}