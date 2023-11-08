import { useState } from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Inputdata from "./reactd3/inputdata";
import Linkpage from "./reactd4/linkpage";
import axios from "axios"
function Todolist(props)
{
    // let [newdata,add_data]=useState('');
    let [existdata,add_list]=useState(['files','headset','charger'])
    // alert(JSON.stringify(props))
    const delete_data =(todo_data_value) =>
    {
       let filter_data = existdata.filter(
        (single_data)=>single_data !== todo_data_value
       )
       add_list(filter_data)
       
    }
    const getdata=()=>
    {
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then(function(response)
        {
            console.log(response)
        })
    }
    return(
       
        <>
         {props.isLogged.status?`welcome ${props.isLogged.mail}`:'guestUser'}
        <Table bordered hover>
            <tr>
            <th>S.No</th>
            <th>Order</th>
            </tr>
            
            {
                 existdata.map(   (data,index)=>(
                     <tr>
                        <td>{index}</td>
                        <td>{data}</td>
                        <td><Button variant="outline-danger" type="button" onClick={()=>delete_data(data)}>Del</Button></td>
                    </tr>
         
                 )
         
         
                 )
            }
          
        </Table>
        <Inputdata  add_list={add_list} existdata={existdata} />
        <button onClick={()=>getdata()}>Get_Data</button>
        {/* <Linkpage /> */}
    
   
       
        
        {/* {newdata}
        <input type="text" id="newentry" onKeyUp={(e)=>add_data(e.target.value)}/>
        <button onClick={()=>add_list([...tododata,newdata])}>ADD</button> */}

        </>
       

      

    )
    console.log('props',props)
    
}
export default Todolist