const Student = (props) => {
    console.log(props);
    return(

        <div>
            <h1>Welcome {props.name}{" "}{props.age}</h1>

        </div>
    )

};
export default Student;