import { useState } from "react";

const Counter=()=>{
    const[value, setValue]=useState(0);
    const valueincrease=()=>{
        setValue(value+1);
    }
    const valuedecrease=()=>{
        setValue(value-1);
    }
    const valuereset=()=>{
        setValue(0);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>{value}</h1>
            <button onClick={valueincrease}>increase</button>
            <button onClick={valuereset} >reset</button>
            <button onClick={valuedecrease}>decrease</button>

        </div>
    )
};
export default Counter;