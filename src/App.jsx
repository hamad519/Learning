
import './App.css';
import Header from './components/header';
import Food from './components/food';
import Footer from './components/footer';
import Card from './components/card';
import Student from './components/student';
import { useState } from 'react';
import Arraywrap from './components/arraywrap';
import style from './modules-css/button.module.css'
import Displaydata from './components/displaydata_with_multiple_states';
import Showdata from './components/showdata_one_object';
function App() {
let [a, setA] = useState(0);
let [visible , setVisible] =useState(true)

let count = () => {
  setA(a = a+1); 
  setVisible(prevVisible => !prevVisible);

}

  return (
    <>
    <Header/>
    {/* <Food/>
    <Card/>
    <Student name="Hammad" age={24} isMarried ={false}/> */}
    {/* <h1>{a}</h1>
    {
      visible ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta necessitatibus, omnis iure provident harum.</p> : null
    }
    
    <button className={style.button} onClick={count}>click me</button> */}
    {/* <Arraywrap/> */}
    {/* <Displaydata/> */}
    <Showdata isLogin={true} name="Hammad"/>
    <Footer/>
    </>
  )
}

export default App
