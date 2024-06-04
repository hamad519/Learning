function Student(props){
    return(
        <>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Married Status :{props.isMarried ? "Yes" : "No"}</p>
         
        </>
    );
}
export default Student;