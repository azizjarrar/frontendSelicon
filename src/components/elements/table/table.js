import React from 'react'
import style from './table.module.css'
const Table=(props)=>{  
  //tabledata 
  if(props.view==="true"){

    return(<div>
      <table className={style.customers}>
<tr className={style.trr}>
 <th className={style.thh}></th>
 <th className={style.thh}></th>
 <th className={style.thh}></th>
 <th className={style.thh}></th>
</tr>
<tr className={style.trr}>
<td className={style.tdd}> {props.tabledata.R1tier1}</td>
<td className={style.tdd}> {props.tabledata.R1tier2}</td>
<td className={style.tdd}> {props.tabledata.R1tier3}</td>
<td className={style.tdd}> {props.tabledata.R1tier4}</td>
</tr>
<tr className={style.trr}>
<td className={style.tdd}> {props.tabledata.R2tier1}</td>
<td className={style.tdd}> {props.tabledata.R2tier2}</td>
<td className={style.tdd}> {props.tabledata.R2tier3}</td>
<td className={style.tdd}> {props.tabledata.R2tier4}</td>
</tr>
<tr className={style.trr}>
<td className={style.tdd}> {props.tabledata.R3tier1}</td>
<td className={style.tdd}> {props.tabledata.R3tier2}</td>
<td className={style.tdd}> {props.tabledata.R3tier3}</td>
<td className={style.tdd}> {props.tabledata.R3tier4}</td>
</tr>
<tr className={style.trr}>
<td className={style.tdd}> {props.tabledata.R4tier1}</td>
<td className={style.tdd}> {props.tabledata.R4tier2}</td>
<td className={style.tdd}> {props.tabledata.R4tier3}</td>
<td className={style.tdd}> {props.tabledata.R4tier4}</td>
</tr>
<tr className={style.trr}>
<td className={style.tdd}> {props.tabledata.R5tier1}</td>
<td className={style.tdd}> {props.tabledata.R5tier2}</td>
<td className={style.tdd}> {props.tabledata.R5tier3}</td>
<td className={style.tdd}> {props.tabledata.R5tier4}</td>
</tr>
<tr className={style.trr}>
<td className={style.tdd}> {props.tabledata.R6tier1}</td>
<td className={style.tdd}> {props.tabledata.R6tier2}</td>
<td className={style.tdd}> {props.tabledata.R6tier3}</td>
<td className={style.tdd}> {props.tabledata.R6tier4}</td>
</tr>
</table>
</div>)
  }else{
return(<div>
             <table className={style.customers}>
      <tr className={style.trr}>
        <th className={style.thh}></th>
        <th className={style.thh}></th>
        <th className={style.thh}></th>
        <th className={style.thh}></th>
      </tr>
      <tr className={style.trr}>
    <td className={style.tdd}><input name="R1tier1" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R1tier2" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R1tier3" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R1tier4" onChange={e=>props.fn1(e)}></input></td>
    </tr>
    <tr className={style.trr}>
    <td className={style.tdd}><input name="R2tier1" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R2tier2" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R2tier3" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R2tier4" onChange={e=>props.fn1(e)}></input></td>
    </tr>
    <tr className={style.trr}>
    <td className={style.tdd}><input name="R3tier1" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R3tier2" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R3tier3" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R3tier4" onChange={e=>props.fn1(e)}></input></td>
    </tr>
    <tr className={style.trr}>
    <td className={style.tdd}><input name="R4tier1" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R4tier2" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R4tier3" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R4tier4" onChange={e=>props.fn1(e)}></input></td>
    </tr>
    <tr className={style.trr}>
    <td className={style.tdd}><input name="R5tier1" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R5tier2" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R5tier3" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R5tier4" onChange={e=>props.fn1(e)}></input></td>
    </tr>
    <tr className={style.trr}>
    <td className={style.tdd}><input name="R6tier1" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R6tier2" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R6tier3" onChange={e=>props.fn1(e)}></input></td>
    <td className={style.tdd}><input name="R6tier4" onChange={e=>props.fn1(e)}></input></td>
    </tr>
      </table>
    </div>)
  }
    
}
export default Table