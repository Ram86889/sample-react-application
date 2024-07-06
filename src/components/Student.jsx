const Student = (props) => {
   const isAdmin=false;
    console.log(props);
    return(

        <div>
        {isAdmin ? <h1>welcome {props.name} {""}{props.age} </h1>: <h1>welcome to user</h1>}

        </div>
    )

};
export default Student;  