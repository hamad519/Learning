import React, { useState } from "react";
import style from '../modules-css/displaydata.module.css'

function Showdata(props) {
    let [name, setName] = useState('')
    let [father, setFather] = useState('')
    let [status, setStatus] = useState('')
    let [studata, setStudata] = useState([])
    let [errname, setErrname] = useState('')
    let [errfather, setErrfather] = useState('')
    let [errstatus, setErrstatus] = useState('')


    let submitdata = () => {
        let haserr = false;
        if (name === '') {
            setErrname("please fill your Name field")
            haserr = true;
        } else {
            setErrname('')
        }
        if (father === '') {
            setErrfather("please fill Your Father Name field")
            haserr = true;
        } else {
            setErrfather('')
        }
        if (status === '') {
            setErrstatus("please fill your Status field")
            haserr = true;
        } else {
            setErrstatus('')
        }
        if (haserr) return;
        let todo = {
            name,
            father,
            status
        }
        setStudata([...studata, todo]);
        setName('')
        setFather('')
        setStatus('')
    }
    return (props.isLogin ? <>
        <h1>Name</h1>
        <input className={style.input} value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
        <p className={style.p}>{errname}</p>
        <h1>Father Name</h1>
        <input className={style.input} value={father} type="text" onChange={(e) => { setFather(e.target.value) }} />
        <p className={style.p}>{errfather}</p>
        <h1>Status</h1>
        <select className={style.input} value={status} name="" id="" onChange={(e) => { setStatus(e.target.value) }}>
            <option value="">Select one...</option>
            <option value="true">Approved</option>
            <option value="false">Unapproved</option>
        </select>
        <p className={style.p}>{errstatus}</p>
        <button className={style.button} onClick={submitdata}>Submit</button>
        <p>Selected Value: {status === 'true' ? 'Approved' : status === 'false' ? 'Unapproved' : ''}</p>
        <table>
            <thead>
                <tr>
                    <th>Ser #</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    studata.map((todo, idx) => <>
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{todo.name}</td>
                            <td>{todo.father}</td>
                            <td style={{ color: todo.status === 'true' ? 'green' : todo.status === 'false' ? 'red' : 'black' }}>
                                {todo.status === 'true' ? "Approved" : todo.status === 'false' ? "Unapproved" : ""}</td>
                        </tr>
                    </>)
                }
            </tbody>
        </table>
    </> : <h2>{props.name} First you login than you have to access this page</h2>

    );
}
export default Showdata;