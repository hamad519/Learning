import Profilepic from '../assets/images/profilepic.jpg';
import style from '../modules-css/button.module.css'
function Card(){
    const styless ={
        
            backgroundColor: "red",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            color: "white",
            cursor: "pointer",
          
    }
    return (
        <>
        <div className="card"> 
            <img className='card-img' src={Profilepic} alt="Profile Pic" />
            <h2>Muhammad Hammad</h2>
            <p>I am learning React.Js</p>
            <button className={style.button}>Read more</button>
            <button className="button" style={styless}>Read more</button>
        </div>
        </>
    );
}
export default  Card;