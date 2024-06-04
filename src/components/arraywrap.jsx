import React, { useState } from "react";
import style from '../modules-css/button.module.css'
function Arraywrap(){
    let [teamname, setTeamname] =useState(['Capt Hassan', 'Capt Amir', 'Capt Sikandar', 'BCF Umer'])
    let [err, setErr] = useState('')

    let addmem = () => {
        if (newprod === ''){
            setErr("Please Enter New Member")
            return
        }
        setTeamname([...teamname, newprod])
        setNewprod('')
    }
    let [newprod, setNewprod] = useState('')

    return (
    <>
    {
        teamname.map((member, idx) => <h1> {idx+1}-{member}</h1>)
    }
    <h3>{err}</h3>
    <input type="text" value={newprod} onChange={(event) => setNewprod(event.target.value)} />
    <button onClick={addmem} className={style.button}> Add Member</button>


    </>
)
}
export default Arraywrap;