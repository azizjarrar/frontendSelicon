import React from 'react'
import style from './table.module.css'
const Table=(props)=>{   
    return(<div>
             <table className={style.customers}>
      <tr className={style.trr}>
        <th className={style.thh}>Nom</th>
        <th className={style.thh}>Referance</th>
        <th className={style.thh}>**********</th>
        <th className={style.thh}>**********</th>
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
export default Table