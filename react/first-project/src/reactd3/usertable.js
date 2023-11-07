import { useState } from "react"
import Inputdata from "./inputdata";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Linkpage from "../reactd4/linkpage";
function Userlist()
{
    let [existdata,add_list]=useState(['Ajay','Ajil','Barish'])
    const delete_data =(todo_data_value) =>
    {
       let filter_data = existdata.filter(
        (single_data)=>single_data!==todo_data_value
       )
       add_list(filter_data)
       
    }
    return(
       
        <>
        <table border={1}cellPadding={2} cellSpacing={2} >
            <thead>
            <tr>
            <th>S.No</th>
            <th>User</th>
            <th>Del</th>
            </tr>
            </thead>
            {
                 existdata.map(   (data,index)=>(
                     <tr>
                        <td>{index+1}</td>
                        <td>{data}</td>
                        <td><Button type="button" variant="outline-danger" onClick={()=>delete_data(data)}>Del</Button></td>
                    </tr>
         
                 )
         
         
                 )
            }
          
        </table>
        <Inputdata  add_list={add_list} existdata={existdata} />
        <Linkpage />
        
        </>
       



    )
        
    
}
export default Userlist