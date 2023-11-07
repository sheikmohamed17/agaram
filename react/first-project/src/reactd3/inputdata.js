import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Inputdata(props)
{
    let [newdata,add_data]=useState('');

    return(
        <>
        
        {newdata}
        <input type="text" id="newentry" onKeyUp={(e)=>add_data(e.target.value)}/>
        <Button variant="success" onClick={()=>props.add_list([...props.existdata,newdata])}>ADD</Button>
        </>


    )
}
export default Inputdata;