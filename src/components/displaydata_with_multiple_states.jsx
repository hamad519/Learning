import { useState } from 'react';
import style  from '../modules-css/displaydata.module.css';


function Displaydata(){
let [fullName, setFullName] =useState('');
let [fatherName, setFatherName] =useState('');
let [address, setAddress] =useState('');
let [name, setName] =useState('');
let [fname, setFname] =useState('');
let [homeAddress, setHomeAddress] =useState('');
let [fullnameerr, setFullnameerr] =useState('')
let [fatherNameerr, setFatherNameerr] =useState('')
let [addresserr, setAddresserr] =useState('')
let showData = () =>{
    if (fullName === ''){
        setFullnameerr("please enter your Full Name");
    }
    else{
        setFullnameerr('')
        setName(fullName);
    }
    if (fatherName === ''){
        setFatherNameerr("please enter your Father Name");
    }
    else{
        setFatherNameerr('')
        setFname(fatherName);
    }
    if (address === ''){
        setAddresserr("please enter your Address");
    }
    else{
        setAddresserr('')
        setHomeAddress(address);
    }
}

    return(
        <>
        <h2 className={style.h2}>Full Name </h2>
        <p className={style.p}>{fullnameerr}</p>
        <input className={style.input} value={fullName} onChange={(event) => {setFullName(event.target.value)}} type="text" />
        <h2 className={style.h2}>Father Name</h2>
        <p className={style.p}>{fatherNameerr}</p>
        <input className={style.input} value={fatherName} onChange={(event) => {setFatherName(event.target.value)}} type="text" />
        <h2 className={style.h2}>Address</h2>
        <p className={style.p}>{addresserr}</p>
        <input className={style.input} value={address} onChange={(event) => {setAddress(event.target.value)}} type="text" /> <br></br>
        <button className={style.button} onClick={showData}>Show Data</button>
        <h3>My Full name is {name}</h3>
        <h3>My Father name is {fname}</h3>
        <h3>My Home Address  is {homeAddress}</h3>
        </>
    )
} 

export default Displaydata;